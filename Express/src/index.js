const path = require('path');
const express = require('express');
const app = express();



//const StaticPath = path.join(__dirname, "/public");

//! bulit-in middleware
//app.use(express.static(StaticPath));

//app.use(express.static('\NodeJS\Express\public'));

//app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function(req , res, next){
    res.render('index.ejs');

});

//! syntax =app.get(route , callback)

app.get('/about', (req, res) =>{
    res.status(200).send("Apna kam kr na !");
});

//! How to send JSON data as a response 
/*app.get('/temp', (req, res) =>{
   res.send([          // we can also use res.json that will also work the same way
       {
           id : 1,
           name: "Vinay"     //After putting square brackets this becomes array of an object
       }                     
   ])
}); 

//? The only difference between res.json and res.send is , In res.send() the methods are identical when an object or array is passed
//?  but res.json() will also convert non-objects such as null and undefined which are not valid JSON.
*/



app.listen(8000, ()=>{
    console.log("SUN raha hu bhai !")
});
