//!                   Here we are solving some challenges Related to File System.


//* Creating a Folder
//* Check the 'AsynCrud' Folder for this challenge

const fs = require("fs");
/*
 Uncomment This piece of Code to perform the operation
fs.mkdir("AsynCrud", (err,data) =>{
  console.log("Folder Created");
}); 

/creating a file
/ Uncomment This piece of Code to perform the operation
fs.writeFile('./AsynCrud/bio.txt'," My name is Vinay",(err) =>{
         console.log("files Created");
});

/ Appending data into files
/ Uncomment This piece of Code to perform the operation
fs.appendFile('./AsynCrud/bio.txt',"Life is a marathon,there is no shortcut", (err) =>{
  console.log("Appended Files data");
}); 

*/

// 4. Read the data without getting the buffer data at file encoding.
// Uncomment This piece of Code to perform the operation
/*fs.readFile('./AsynCrud/bio.txt', 'utf-8' , (err, data) =>{
  if(err) throw err;
    console.log(data);
}); */
// we get buffer data if we don't write 'utf-8' 

// 5. Rename the file 
// Uncomment This piece of Code to perform the operation
/*
fs.rename('./AsynCrud/bio.txt', './AsynCrud/bio2.txt' , (err) =>{
         console.log(" Rename Done");
}); */

// 6.  Delete the file
// Uncomment This piece of Code to perform the operation
/*
fs.rm('./AsynCrud/bio.txt', (err)=>{
    console.log("DELETE THIS SHIT");
}) ;*/
// 7.  Delete the Folder
// Uncomment This piece of Code to perform the operation
//fs.rmdir('./AsynCrud', (err) =>{
  //  console.log("Folder Deletd");
//});
