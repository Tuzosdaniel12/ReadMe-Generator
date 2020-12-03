//require `inquirer and fs to index js
const inquirer = require ('inquirer');
const fs = require ('fs');

const createReadMeFile = require ('./templete.js');
const questions = require ('./questions.js');

//ask user detail about readme
const intiFileCreation = async () =>{
    const response = await promptQuestions()
    const readMeName = formatReadMeName(response);
    try{    
        await fs.writeFileSync(`${readMeName}.md`, createReadMeFile(response))
        console.log('Success')
    }catch(err){
        console.error(err)
    } 

}

const promptQuestions = () =>{
    return inquirer.prompt(questions)
}

const formatReadMeName = (response) =>{
    let {title} = response
    title= title.toLowerCase().split(" ")
    const modTitle = title.reduce((acc,val) => acc + "_"+ val)
    return modTitle;
}


intiFileCreation()
