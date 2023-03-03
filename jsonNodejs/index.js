
const fs = require("fs");
const biodata = {
    name : "Vinay",
    age : 20,
    field :"Technical",
};
/*
//JSON. stringify() takes a JavaScript object and transforms it into a JSON string.

const jsonData = JSON.stringify(biodata);
console.log(jsonData);
//console.log(jsonData.channel);  // This will give us error



//parse() takes a JSON string and transforms it into a JavaScript object

const objData = JSON.parse(jsonData);
console.log(objData); */


// Things to do 
/*
1. Convert obj to JSON.
2. ADD it into new file. 
3. Read File.
4. Again convert back to JS obj.
5. print it into console.
*/
// 1
const jsonData = JSON.stringify(biodata);
// 2
/*fs.writeFile('json1.json', jsonData, (err) =>{
    console.log("done");
});*/

//3.
fs.readFile('json1.json', "utf-8" , (err , data) =>{
    // console.log(data);
    
    //4.
    const orgData = JSON.parse(data);
    console.log(orgData); // This will give us data in obj format.
    console.log(data); // this will give us data in JSON format.
});