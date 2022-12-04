const fs = require('fs');       // Requiring file System 
const path = require('path');


/* 
                                                        Reading a file.
 imp:  Here all the methods will perform aysnchronously
 Here read.txt is our file and utf-8 to read our file without any buffer data. 
 */
 
 fs.readFile('read.txt', 'utf8', function(err, data){
  if(err) throw err;
  console.log(data)
}) 




//exit on uncaught errors
//This is to handle errors To check this method change the file name from Calc.js to anything and you'll see the error prints on console.


process.on('uncaughtException',err =>{
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
})

 // But wait you see fs.readFile('calc.js')  instead of writin hard coded path we can use path module because in different enviroment files paths are different
 //  like this ./google/files.txt and for some other  .\google\file.txt notice backslash and forwardSlash  so this will causes error. 


fs.readFile(path.join(__dirname,'files','read.txt'),'utf-8',(err,data)=>{
  if(err) throw err;
  console.log(data);
});


//Here __dirname is our directory name , files is our folder and read.txt is our file Name.



process.on('uncaughtException',err =>{
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
})




//                                                    Writing the file



 fs.writeFile(path.join(__dirname,'files','reply.txt'), "Nice to meet you ", (err) =>{
  if(err) throw err;
  console.log('Write Complete');
 })

/*Here our callback function only take on params because we are only writing the data and 
reply.txt is our file and "Nice to Meet you " is the content we  write in our files.
*/


//                                           APPEND THE FILE



fs.appendFile(path.join(__dirname,'files','reply.txt'), '\n\nYes it is.', (err) =>{
  if(err) throw err;
  console.log('Append Complete');
 })

/* NOTE:    We can also write AppendFile method inside our WriteFile method if we are going to modify the same file and also some other method inside 
          writeFile method like rename but it will result in callback hell.Check the Callback.js file in this same folder.
*/
//                                         DELETING THE FILE


fs.unlink('reply.txt',function(err){
  console.log('deleted Complete');
})







// Creating a folder name Live
//Whatever operation we need to do we just change import{"OPERATION NAME"} 

import { readFile } from 'fs';
mkdirSync("Lie");

//                This operation will write data in your file and even if there is any data this opt. will overwrite into your file.
import { writeFile } from 'fs';
writeFileSync('Live/bio.txt',"This is weird");

//                 This opt. will add data into your file without overwriting
appendFileSync('Live/bio.txt', " One day i'm gonna be a Successful Coder!");


/*                               Reading File Synchoronusly
 Unicode = It is a set of characters used around the world.
 UTF-8 = A character encoding capable of encoding of all possible characters(called code points)
 in Unicode.
*/

const data = readFileSync("Live/bio.txt" , 'utf-8');
console.log(data);
 

//                             This is how You can rename any file 
                renameSync('Live/bio.txt' , 'Live/chem.txt');


//                             Deleting file
                unlinkSync("Live/chem.txt");

//                              Deleting folder
                rmdirSync("Live");


