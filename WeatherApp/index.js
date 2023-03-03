const http = require('http');
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync('home.htm',"utf-8" );
const replaceVal =(tempVal , orgVal)=>{
    let temprature = tempVal.replace("{%tempval%}" , orgVal.main.temp);
     temprature = temprature.replace("{%tempmin%}" , orgVal.main.temp_min);
     temprature = temprature.replace("{%tempmax%}" , orgVal.main.temp_max);
     temprature = temprature.replace("{%location%}" , orgVal.name);
     temprature = temprature.replace("{%country%}" , orgVal.sys.country);
     temprature = temprature.replace("{%tempstatus%}" , orgVal.weather[0].main);
     
     return temprature;
}


const server = http.createServer((req,res) =>{
       if (req.url == "/"){
         requests("http://api.openweathermap.org/data/2.5/weather?q=Dehradun&appid=0c598b175c400988261d4408417f789b"
         )
         .on("data",(chunk) =>{
             const objdata = JSON.parse(chunk);
             const arrData = [objdata];
             //console.log(arrData[0].main.temp);
             const realTimeData = arrData.map((val)=>replaceVal(homeFile ,val)).join("");
             res.write(realTimeData);
        console.log(realTimeData);
         })

         .on("end", (err) =>{
             if(err) return console.log("connection closed due to errrors!" , err);
             res.end();
    
         });
       }
}); 

server.listen(8000, "127.0.0.1");