const express = require('express');
const app = express();
const PORT = 3000;
//const axios = require('axios');
const userRouter = express.Router();
const authRouter = express.Router();

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use(express.urlencoded({extended: true}));
 app.use(express.json())


authRouter
.route('/signup')
.get(getSignUp)
.post(postSignUp)


// A simple Axios GET request with callbacks
/*
axios.get('http://webcode.me')
.then(resp=>{
    console.log(resp.data)
})

.catch((err) =>{
    console.log(err);
})
*/


// Head Request it is a get req without a msg body
/*
async function doHeadRequest() {

    let res = await axios.head('https://leetcode.com/problems/non-decreasing-subsequences/description/');
  
    console.log(`Status: ${res.status}`)
    console.log(`Server: ${res.headers.server}`)
    console.log(`Date: ${res.headers.date}`)
  }
  
  doHeadRequest();
*/

// Getting GitHub information
/*
async function getNumberOfFollowers() {

    let res = await axios.get('https://api.github.com/users/vinaybadola');
  
    let nOfFollowers = res.data.followers;
    let location = res.data.location;
  
    console.log(`NO. of followers: ${nOfFollowers}`)
    console.log(`Location: ${location}`)
  }
  
  getNumberOfFollowers();

*/

function getSignUp(req,res){
  res.sendFile('public/index.html',{root:__dirname})
}


function postSignUp(req,res){
  let obj = req.body;
  console.log('backend', obj)
  res.json({
    message:"user signed Up",
    data:obj
  });
}


app.listen(PORT, (err)=>{
    if(err) console.log(err);
    console.log(`server is listening on ${PORT}`);
})