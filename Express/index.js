const express = require("express");
const path = require("path");
const app = express();
const allRoutes = require('./routes/route.js')
app.use(allRoutes);

app.get("/", (req,res)=>{
    res.render("HELLO");
});


//!             To Serve html files 

app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname, '/index.html'));
});

//!             How to Serve dynamic files(TEMPLATING)
/** Templating = When you create code that is pre built for a specific purpose
 *  Step 1: create a views directory amd include all files inside the views dir
 *  app.set('view engine', 'ejs');
 * 
app.get("/about", (req,res)=>{
    res.render('index',{                // index is our ejs file
        title:'Express and Node'         // check index.ejs file  

    });    
}) 

*/

/**
 * After Creating a Seprate Folder For Routes now we use them in our main js file
 * But at first we have to include allRoutes from route.js file 
 * const allRoutes = require('./routes/route.js)
 * app.use(allRoutes);
 */


//!   How to Perform redirects 

app.get('/about-us', (req,res)=>{
    res.redirect('/about');
})
// Here /about-us is our old link if someone req for that URL we'll redirect the user using res.redirect method in which we'll put our new URL.

// 404 page

app.use((req,res)=>{
     res.status(404).sendFile('./view/404.htm',{root:__dirname});
})



app.listen(3000,()=>{
    console.log("YES SIR!");
});



