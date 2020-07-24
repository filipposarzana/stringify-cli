const { series } = require('async');

const { readProjectConfig } = require('../utils/projectConfig');
const { writeProjectLock } = require('../utils/projectLock');

const pullLocalization = require('../processes/pullLocalization')

const Log = require('../utils/log');

module.exports = function(config){

    const projectConfig = readProjectConfig(config);

    let downloadTasks = [];

    for(const project of projectConfig.projects){

        for(const localization of project.localizations){

            downloadTasks.push((callback) => {

                pullLocalization(config, project, localization, projectConfig.format)
                    .then((data) => callback(null, data))
                    .catch(e => callback(e))
            });
        }
    }

    Log.log(`> Pulling ${downloadTasks.length} localizations...`);

    series(downloadTasks, (e, data) => {

        if(e){
            Log.error(e);
        }
        else {

            // Update lockfile
            let lockProjects = [];

            for(const project of projectConfig.projects){

                const localizations = data.filter(itm => itm.projectId === project.id);

                lockProjects.push({
                    projectId: project.id,
                    localizations: localizations.map(itm => ({
                        locale: itm.locale,
                        version: itm.version
                    }))
                })
            }

            try {

                writeProjectLock(config, { projects: lockProjects });
                Log.info('Saved lockfile, please push this file to your repository.');
            }
            catch(e){

                console.error(e);
                Log.error('Couldn\'t write lock file');
            }

            Log.success('Done');
        }
    });
};