const fsPromises = require('fs').promises;       // Requiring file System 
const path = require('path');



//!   Below What You see is  Callback Hell ,is essentially nested callbacks stacked below one another forming a pyramid structure

/*
fs.writeFile(path.join(__dirname,'files','reply.txt'), "Nice to meet you ", (err) =>{
    if(err) throw err;
    console.log('Write Complete');

    fs.appendFile(path.join(__dirname,'files','reply.txt'), '\n\nYes it is.', (err) =>{
        if(err) throw err;
        console.log('Append Complete');


        fs.rename(path.join(__dirname,'files','reply1.txt'), path.join(__dirname,'files','reply1.txt') ,(err) =>{
            if(err) throw err;
            console.log('Append Complete');
           })


       })
   })

   */

//!    Replacing Callback Hell with Aysnc Await
    const fileOps = async() =>{
    try{
         const data = await fsPromises.readFile(path.join(__dirname ,'files','reply.txt'),'utf-8');
         console.log(data);
         await fsPromises.writeFile(path.join(__dirname ,'files','promiseWrite.txt'),data);
         await fsPromises.appendFile(path.join(__dirname ,'files','promiseWrite.txt'), '\n\n Hell yeah');
         await fsPromises.rename(path.join(__dirname ,'files','promiseWrite.txt'), path.join(__dirname ,'files','promiseWrite1.txt'));
         const newData = await fsPromises.readFile(path.join(__dirname,'files','promiseWrite1.txt'),'utf-8');
         console.log(newData);

    }
    catch(err){
        console.log(err);
    }
 }


fileOps(); 