const express = require("express");
const path = require("path");
const app = express();










app.get("/", (req,res)=>{
    res.render("HELLO");
});


//!             To Serve html files 

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
});


//!   How to Perform redirects 

app.get('/about-us', (req,res)=>{
    res.redirect('/about');
})



// 404 page

app.use((req,res)=>{
     res.status(404).sendFile('./view/404.htm',{root:__dirname});
});

// Here /about-us is our old link if someone req for that URL we'll redirect the user using res.redirect method in which we'll put our new URL.

app.listen(3000,()=>{
    console.log("YES SIR!");
});



