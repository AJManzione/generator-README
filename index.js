//WHEN I am prompted for information about my application repository
//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions --

// title
// description
// table of contents
// installation
// usage
// license
// contributing
// tests
// questions


//--- node modules ---

// Allows inquirer to be used in program - 
const inquirer = require('inquirer');
// Allows filesave to be used in program - 
const fs = require('fs');
const { type } = require('os');



            /* TITLE */ 

//WHEN I enter my project title
//THEN this is displayed as the title of the README
inquirer.prompt (
    [
        {
            type: 'input',
            message: "What's the project title?",
            name: 'title',
            validate: (value) => { 
                if(value){return true} 
                else {return 'i need a value to continue'}
            }
        },


            /* LICENSE */

//WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
            
        {
            type: 'list',
            message: "What license did you use?",
            name: 'license',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
            validate: (value) => { 
                if(value){return true} 
                else {return 'i need a value to continue'}
                }
        },

            /* GITHUB USERNAME */

//WHEN I enter my GitHub username
//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

        {
            type: 'input',
            message: "What is your GitHub username?",
            name: 'github',
            validate: (value) => { 
                if(value){return true} 
                else {return 'i need a value to continue'}
                }
        },
        


            /* EMAIL ADDRESS */
//WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
          
        {
            type: 'input',
            massage: "What is your email address?",
            name: 'email',
            validate: (value) => { 
                if(value){return true} 
                else {return 'i need a value to continue'}
                }
        },



    ]
)

.then(({
    title,
    license,
    github,
    email
}) => {

const template =`
    #${title}

    ##

    ## License
    ${license}

    ## Github: 
    [Link](https://github.com/${github})`;

    createReadmeFile(title, template)
});

function createReadmeFile(fileName, data) {

// Filesave code 
fs.writeFile(`./generated-${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
    if (err){
        console.log(err)
    } console.log("README generated!");
})

} 




















//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README
