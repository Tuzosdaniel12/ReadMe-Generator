//require `inquirer and fs to index js
const inquirer = require ('inquirer');
const fs = require ('fs');

const createReadMeFile = require ('./js/templete.js');
const questions = require ('./js/questions.js');

//ask user detail about readme
const intiFileCreation = async () =>{
    const response = await promptQuestions()
    writeFileCatchErrors(response)
    
}

//prompt user and return response
const promptQuestions = () => inquirer.prompt(questions)

//prompt format read me name, so it can create ne readme all the time based on title name
const formatReadMeName = (response) =>{
    let {title} = response
    title= title.toLowerCase().split(" ")
    const modTitle = title.reduce((acc,val) => acc + "_"+ val)
    return modTitle;
}

//send response to template and catches errors 
const writeFileCatchErrors = (response) => {
    const readMeName = formatReadMeName(response);

    try{    
         fs.writeFileSync(`${readMeName}.md`, createReadMeFile(response))
        console.log('Success')
    }catch(err){
        console.error(err)
    } 
}

//start program
intiFileCreation()
