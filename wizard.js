/* eslint-disable */
'use strict';

const inquirer = require('inquirer');
const fs = require('fs');
const stream = require('stream');
const readline = require('readline');
const path = require('path');
const _ = require('lodash');
const util = require('util');

// Wrap readFile in a promise
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// File helpers
const readFile = (file) => readFileAsync(file, 'utf8');

const writeFile = (file, result) => writeFileAsync(file, result, 'utf8', (err) => {
    if (err) console.error(err);
});

const writeToFile = async (filePath, regexString, writeString) => {
    const file = dirPath(filePath);
    const data = await readFile(file);
    const result = data.replace(regexString, writeString);
    writeFile(file, result);
}

// Path resolve helper
const dirPath = (subPath) => path.resolve(__dirname, subPath);

// Wizard questions
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Project name',
        default: '',
    },
    {
        type: 'confirm',
        name: 'ssr',
        message: 'Do you want to use Server Side Rendering?',
        default: false,
    },
    {
        type: 'confirm',
        name: 'apihelper',
        message: 'Do you want to install the apiHelper?',
        default: false,
    },
];

// Answer logic
inquirer.prompt(questions).then((answers) => {
    console.log('Configuring boilerplate...');

    _.forEach(Object.keys(answers), async (answerName) => {
        const answer = answers[answerName];

        switch (answerName) {
            case 'name':
                try {
                    // Readme
                    await writeToFile('README.md', /React Prime/, answer);
                    // renderFullPage
                    await writeToFile('src/server/helpers/renderFullPage.js', /React Redux Boilerplate/, answer);
                } catch (err) {
                    console.error(err);
                    process.exit(0);
                }
            break;
            
            case 'ssr':
                try {
                    await writeToFile('src/config/index.js', /SSR = (false|true)/, `SSR = ${answer.toString()}`);
                } catch (err) {
                    console.error(err);
                    process.exit(0);
                }
            break;

            case 'apihelper': {}
            break;

            default:
                console.error('Error: Answers defaulted! Answer:', answerName);
        }
    });

    // console.log(JSON.stringify(answers, null, '  '));

    console.log('Configuration done!');
});

// ssr
// project name (title, package.json, readme)
// apiHelper
//
