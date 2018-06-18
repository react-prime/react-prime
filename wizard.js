/* eslint-disable */
'use strict';

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const cp = require('child_process');

// Wrap readFile in a promise
// File helpers
const readFile = (file) => fs.readFileSync(file, 'utf8');

const writeFile = (file, result) => fs.writeFileSync(file, result, 'utf8', (err) => {
    if (err) console.error(err);
});

const writeToFile = (filePath, regexString, writeString) => {
    try {
        const file = dirPath(filePath);
        const data = readFile(file);
        const result = data.replace(regexString, writeString);
        writeFile(file, result);
    } catch (err) {
        console.error(err);
        process.exit(0);
    }
}

// Path resolve helper
const dirPath = (subPath) => path.resolve(__dirname, subPath);

// Wizard timeout
(function() {
    // Timeout after no user input for some time
    const timer = setTimeout(() => {
        console.error('\n🛑 Stopped wizard because of no user input.');
        process.exit(0);
    }, 6000);

    // Cancel timeout on user input
    const stdin = process.openStdin();
    stdin.addListener('data', () => clearTimeout(timer));
})();

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
        validate: (answer) => /\d*?\.\d*?\.\d*/.test(answer),
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
        default: 'Label A',
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
    ...['DEV', 'ACC', 'PROD'].reduce((all, env) => ([
        ...all,
        {
            // Only ask these questions when apihelper answer is true
            when: answers => answers.apihelper,
            type: 'input',
            name: `apiurl_${env}`,
            message: `${env} API Host URL`,
            default: '',
        }
    ]), []),
];

// Answer logic
inquirer.prompt(questions).then((answers) => {
    console.log('Configuring boilerplate...');

    _.forEach(Object.keys(answers), (question) => {
        const answer = answers[question];

        switch (question) {
            case 'name':
                writeToFile('README.md', /React Prime/, answer);
                writeToFile('src/server/helpers/renderFullPage.js', /React Redux Boilerplate/, answer);
                writeToFile('package.json', /"name": "(.*?)"/, `"name": "${answer.replace(/\W/, '-')}"`);
            break;

            case 'author':
                writeToFile('package.json', /"author": "(.*?)"/, `"author": "${answer}"`);
            break;

            case 'description':
                writeToFile('package.json', /"description": "(.*?)"/, `"description": "${answer}"`);
            break;

            case 'version':
                writeToFile('package.json', /"version": "(.*?)"/, `"version": "${answer}"`);
            break;
            
            case 'ssr':
                writeToFile('src/config/index.js', /SSR = (false|true)/, `SSR = ${answer.toString()}`);
            break;

            case 'apihelper': {
                // Remove apiHelper.js
                if (answer === false) {
                    fs.unlinkSync(dirPath('src/app/services/apiHelper.js'));
                    fs.unlinkSync(dirPath('src/config/api.js'));
                }
            }
            break;

            case 'apiurl_DEV':
            case 'apiurl_ACC':
            case 'apiurl_PROD':
                const env = question.split('_')[1];
                writeToFile(
                    'src/config/api.js',
                    new RegExp(`\\[__${env}__\\]: '(.*?)'`),
                    `[__${env}__]: '${answer}'`,
                );
            break;

            default:
                console.error('Error: Answers defaulted! question:', question);
        }
    });

    if (answers.apihelper === true) {
        console.log('Installing qs package...');
        cp.exec('npm i -S qs', (err, stdout, stderr) => {
            if (err) {
                console.error('Error running npm install script');
            }
          
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            console.log('Configuration done!');
          });
    } else {
        console.log('Configuration done!');
    }
});
