//console.log(profileDataArgs);

/*const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
      console.log(profileDataArr[i]);
    }
    console.log('================');

    //is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
  }; printProfileData(profileDataArgs);*/

  const inquirer = require('inquirer');

 const promptUser = () => {
 return inquirer .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'what is your name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          }else {
            console.log('please enter your name!');
            return false;
          }
        }
      },
      {
       type: 'input',
       name: 'github',
       message: 'enter your gitHub Username',
       validate: githubUserNameInput => {
         if (githubUserNameInput) {
           return true;
         }else {
           console.log('you must enter a user name!');
           return false;
         }
       }
      },
      {
        type: 'input',
        name: 'about',
        message: 'provide some information about yourself:'
      }
    ]);
  }


   const promptProject = portfolioData => {
     // if theres no 'projects' array property lets create one
     if (!portfolioData.projects) { 
     portfolioData.projects = [];
     };
     console.log(`
     =================
Add a New Project
=================
     `);
     return inquirer.prompt([
       {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
        validate: projectNameInput => {
          if (projectNameInput) {
            return true;
          }else {
            console.log('you must enter a project name!')
            return false;
          }
        }
       },
       {
         type:'input',
         name:'description',
         message:'Provide a description of the project(Required)',
         validate: projectDescriptInput => {
           if (projectDescriptInput) {
             return true;
           }else {
             console.log('you must enter a project description!');
             return false;
           }
         }
       },
       {
         type: 'checkbox',
         name:'languages',
         message:'What did you build this project with(check all that apply)',
         choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap','Node']
       },
       {
         type: 'input',
         name: 'link',
         message: 'Enter the Github link to your project. (Required)',
         validate: linkInput => {
           if (linkInput) {
             return true;
           }else {
             console.log('you must enter a project link!');
             return false;
           }
         }
       },
       {
         type: 'confirm',
         name: 'feature',
         message: 'Would you like to feature this Project?',
         default: false
       },
       {
         type: 'confirm',
         name: 'confirmAddProject',
         message: 'Would you like to enter another project',
         default: false
       }
     ]).then(projectData => {
       portfolioData.projects.push(projectData);
       if (projectData.confirmAddProject) {
         return promptProject(portfolioData)
       }else {
         return portfolioData;
       }

     });
   };
   promptUser()
     .then(promptProject)
     .then(portfolioData => {
       console.log(portfolioData);  
     });
  
 /* const fs = require('fs');
  const generatePage = require('./src/page-template.js');
 
  const pageHTML = generatePage(name, github)

fs.writeFile('index.html', pageHTML, err => {
    if (err) throw err;
    console.log('portfolio complete! Check out index.html to see the output!')
});*/