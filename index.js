//--- node modules ---

// Allows inquirer to be used in program - 
import inquirer from 'inquirer';
// Allows filesave to be used in program - 
import fs from 'fs';




            /* TITLE */ 

inquirer.prompt (
    [
        {
            type: 'input',
            message: "What's the project title?",
            name: 'title',
            validate: (value) => { 
                if(value){return true} 
                else {return "i need a value to continue"}
            }
        },


            /* DESCRIPTION */
        {
            type: 'input',
            message: 'Enter a description',
            name: 'description',
            validate: (value) => { 
                if(value){return true} 
                else {return "i need a value to continue"}
            }
        },

            /* LICENSE */

        {
            type: 'list',
            message: "What license did you use?",
            name: 'license',
            choices: ['Apache License 2.0', 'MIT License', 'BSD 2-Clause (Simplified) License', 'BSD 3-Clause (New) or (Revised) License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v3.0', 'GNU General Public License v3.0', 'GNU General Public License v2.0', 'Mozilla Public License 2.0', 'The Unlicense'],
            validate: (value) => { 
                if(value){return true} 
                else {return "i need a value to continue"}
            }
        },

            /* TECHNOLOGIES */
        {
            type: 'checkbox',
            message: "What technologies did you use?",
            name: 'technologies',
            choices: [ 
                { name:'HTML', value:'HTML'},
                { name:'CSS', value:'CSS'},
                { name:'JavaScript', value:'JavaScript'},
                { name:'Bootstrap', value:'Bootstrap'},
                { name:'JQuery', value:'JQuery'},
                { name:'React', value:'React'},
                { name:'NodeJS', value:'Node.js'},
                { name:'MySQL', value:'MySQL'},
                { name:'Git', value:'Git'},
                { name:'GitHub', value:'GitHub'},
                { name:'MongoDB', value:'MongoDB'}
            ],
            validate: (value) => { 
                if(value){return true} 
                else {return "i need a value to continue"}
            }

        },
            /* INSTALLATION */
        {
            type: 'input',
            message: "How do you install this program?",
            name: 'installation',
            validate: (value) => { 
                if(value){return true} 
                else {return "i need a value to continue"}
            }
        },

            /* USAGE */
        {
            type: 'input',
            message: "How can this project be used?",
            name: 'usage',
            validate: (value) => { 
                if(value){return true} 
                else {return "i need a value to continue"}
                }
        },

            /* CONTRIBUTING */
        {
            type: 'input',
            message: "Who contributed to this project?",
            name: 'contributing',
            validate: (value) => { 
                if(value){return true} 
                else {return "i need a value to continue"}
                }
        },

            /* GITHUB USERNAME */

        {
            type: 'input',
            message: "What is your GitHub username?",
            name: 'github',
            validate: (value) => { 
                if(value){return true} 
                else {return "i need a value to continue"}
                }
        },
        
            /* EMAIL ADDRESS */
          
        {
            type: 'input',
            massage: "What is your email address?",
            name: 'email',
            validate: (value) => { 
                if(value){return true} 
                else {return "i need a value to continue"}
                }
        },

    ]
)

.then(({
    title,
    description,
    technologies,
    installation,
    usage,
    license,
    licenseBadge,
    contributing,
    github,
    email
}) => {


/*--------------------------------- LICENSE BADGE SELECTOR -------------- */

// CONSTRUCTOR AND PROTOTYPE

function License(badge) {
    this.badge = badge;
};

License.prototype.changeBadge = function() {
    licenseBadge = this.badge
};

// Conditional LICENSE BADGE APPENDING

            // Apache Badge
    if (license === "Apache License 2.0") {
        var apache = new License("[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)")
        apache.changeBadge();
    };

            // MIT Badge
    if (license === "MIT License") {
        var mit = new License("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)")
        mit.changeBadge();
    };

            // BSD 2 Badge
    if (license === "BSD 2-Clause (Simplified) License") {
        var bsdTwo = new License("[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)")
        bsdTwo.changeBadge();
    };

            // BSD 3 Badge
    if (license === "BSD 3-Clause (New) or (Revised) License") {
        var bsdThree = new License("[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)")
        bsdThree.changeBadge();
    };

            // Boost Badge
    if (license === "Boost Software License 1.0") {
        var boost = new License("[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)")
        boost.changeBadge();
    };

            // Creative Commons Zero Badge
    if (license === "Creative Commons Zero v1.0 Universal") {
        var ccz = new License("[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)")
        ccz.changeBadge();
    };

            // Eclipse Badge
    if (license === "Eclipse Public License 1.0") {
        var eclipse = new License("[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)")
        eclipse.changeBadge();
    };

            // GNU Affero General Public License v3.0 Badge
    if (license === "GNU Affero General Public License v3.0") {
        var gnuAffero = new License("[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)")
        gnuAffero.changeBadge();
    };

            // GNU Lesser General Public License v3.0 Badge
    if (license === "GNU Lesser General Public License v3.0") {
        var gnuLesser = new License("[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)")
        gnuLesser.changeBadge();
    };

            // GNU General Public License v3.0 Badge
    if (license === "GNU General Public License v3.0") {
        var gplThree = new License("[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)")
        gplThree.changeBadge();
    };

            // GNU General Public License v2.0 Badge
    if (license === "GNU General Public License v2.0") {
        var gplTwo = new License("[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)")
        gplTwo.changeBadge();
    };

            // Mozilla Public License 2.0 Badge
    if (license === "Mozilla Public License 2.0") {
        var mozz = new License("[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)")
        mozz.changeBadge();
    };

            // The Unlicense Badge
    if (license === "The Unlicense") {
        var unlicense = new License("[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)")
        unlicense.changeBadge();
    };



        /* TEMPLATE */
const template =`
${licenseBadge}
# ${title}

## ${description}

## Table of Contents
1. [General Info](#general)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Collaboration](#contributing)
5. [Contact](#contact) 

# Technologies
*${technologies}*

# Installaton
*${installation}*

# Usage
*${usage}*

# License
*${license}*

# Contributing
*${contributing}*

# Contact: 
[GitHub](https://github.com/${github})
Email: ${email}`;

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

