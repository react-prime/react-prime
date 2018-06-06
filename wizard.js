/* eslint-disable */
'use strict';

var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var questions = [
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

inquirer.prompt(questions).then(answers => {
    console.log('Configuring boilerplate...');

    console.log(answers);

    _.forEach(Object.keys(answers), answerName => {
        const answer = answers[answerName];

        switch (answerName) {
            case 'ssr':
                const file = path.resolve(__dirname, 'src/config/index.js');

                fs.readFile(file, 'utf8', function (err, data) {
                    if (err) {
                        return console.error(err);
                    }

                    var result = data;
                    result = data.replace(/SSR = (false|true)/g, `SSR = ${answer ? 'true' : 'false'}`);

                    fs.writeFile(file, result, 'utf8', function (err) {
                        if (err){
                            return console.log(err);
                        }
                    });
                });
            break;

            case 'name':
                break;

            case 'apihelper':
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
