# Stringify CLI
The Stringify Command Line Interface (CLI) can be used to download and upload your strings from the command line.
To get started, please follow the installation instructions below.

## Installation
You can install the Stringify CLI using npm, make sure [Node.js](https://nodejs.org/) is installed on your system first.

Run the following command to install the Stringify CLI globally:
```bash
npm install -g stringify-cli
```

## Commands
Run `stringify --help` to list all available commands. Specific commands can be executed using the following format: `stringify <command>`.

Below you can find a list of all commands and their function:

| Command | Description                                         |
|---------|-----------------------------------------------------|
| config  | Configure the Stringify CLI                         |
| init    | Initialize project                                  |
| sync    | Synchronize strings files with server (push & pull) |
| pull    | Download strings files from server                  |
| push    | Upload strings files to server                      |

### config
The `stringify config` command configures the Stringify CLI, this process starts automatically when the CLI is used for the first time.
Instructions will be provided which lead you trough the steps of obtaining an API-token. 
This token should be provided to the Stringify CLI in order to communicate with the server. 

### init
Run `stringify init` in order to initialize a Stringify project in your current working directory.
This project should have already been created using the web interface.

You will be run through the following steps:
1. All your projects will be listed, select the desired project using the arrow (up/down) keys.
2. Select the desired localizations with the `space` key, the available options can be set using the web interface.
3. Pick the format that should be used for the strings files.
4. The Stringify CLI will automatically try to resolve the location of the strings-files, based on the picked format (step 3). 
 When these files couldn't be found, you will be prompted to enter the path for the files manually. 
5. Your final settings will be saved in a `stringify.config.json` file, this file is used by all project-specific commands. 
 See the [Config file](#config-file) section for more details.

### sync
The `stringify sync` command runs the [push](#push) and [pull](#pull) commands sequentially. 
We recommend you to use this command instead of running the `push` and `pull` commands separately.

### pull
Coming soon

### push
Coming soon

## Config file
Coming soon