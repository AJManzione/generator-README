//--- node modules ---

// Allows inquirer to be used in program - 
const inquirer = require('inquirer');
// Allows filesave to be used in program - 
const fs = require('fs');



inquirer.prompt (
    [
        {
            type: 'input'.
            message = "What's the project title?",
            name: 'title',
            validate: (value) => { 
                if(value){return true} 
                else {return 'i need a value to continue'}
            }
        }
    ]
)

.then(({
    title   
}) => {

const template =`# ${title}`
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


//WHEN I am prompted for information about my application repository
//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


//WHEN I enter my project title
//THEN this is displayed as the title of the README




//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests



//WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under



//WHEN I enter my GitHub username
//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile



//WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions



//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README
