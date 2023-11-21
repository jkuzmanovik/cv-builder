'use strict';

const fs = require('fs');
const theme = require('jsonresume-theme-eloquent-mod');
const resume = require('./resume.json');

console.log(resume)

const renderedResume = theme.render(resume);

fs.writeFile('resume.html', renderedResume, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
