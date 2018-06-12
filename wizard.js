/* eslint-disable */
'use strict';

const inquirer = require('inquirer');
const fs = require('fs');
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
        type: 'input',
        name: 'version',
        message: 'Project version',
        default: '0.0.1',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description',
        default: '',
    },
    {
        type: 'input',
        name: 'author',
        message: 'Project author(s)',
        default: '',
    },
    {
        type: 'confirm',
        name: 'ssr',
        message: 'Do you want to use Server Side Rendering?',
        default: true,
    },
    {
        type: 'confirm',
        name: 'apihelper',
        message: 'Do you want to install the apiHelper?',
        default: true,
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
                    await writeToFile('README.md', /React Prime/, answer);
                    await writeToFile('src/server/helpers/renderFullPage.js', /React Redux Boilerplate/, answer);
                    await writeToFile('package.json', /react-prime/, answer.replace(/\W/, '-'));
                } catch (err) {
                    console.error(err);
                    process.exit(0);
                }
            break;

            case 'version':
                try {
                    await writeToFile('package.json', /"version": "(.*?)"/, `"version": "${answer}"`);
                } catch (err) {
                    console.error(err);
                    process.exit(0);
                }
            break;
            
            case 'description':
                try {
                    await writeToFile('package.json', /"description": "(.*?)"/, `"description": "${answer}"`);
                } catch (err) {
                    console.error(err);
                    process.exit(0);
                }
            break;
            
            case 'author':
                try {
                    await writeToFile('package.json', /"author": "(.*?)"/, `"description": "${answer}"`);
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

            case 'apihelper': {
                // Remove apiHelper.js
                if (answer === false) {
                    fs.unlinkSync(dirPath('src/app/services/apiHelper.js'));
                    fs.unlinkSync(dirPath('src/config/api.js'));
                }
            }
            break;

            default:
                console.error('Error: Answers defaulted! Answer:', answerName);
        }
    });

    console.log('Configuration done!');
});
