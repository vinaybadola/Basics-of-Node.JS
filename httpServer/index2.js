/*
To access the web page of any web application, you need a web server. The web server will handle 
all the http requests for the web application.
Ex- IIS is a web server for ASP.net web app and Apache is a web server for php or java web app.

Node js provides capabilities to create a your own web server which will handle HTTP 
requests asynchronusly. You can use IIS or Apache to run Node.js web application
but it is recommended to use node js web server.
 
The http createServer() method includes request and response parameters which is supplied by node.js
The request object can be used to get information about the current HTTP request.
If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header
with the correct content type. 
*/



// This is how we create web server in node.js
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) =>{

/*   const data = fs.readFileSync(`./UserApi/userapi.json` , "utf-8" );
    const objData = JSON.parse(data);


    if(req.url == "/"){
    res.end('hello from the Home side');
    }
    else if(req.url == "/about"){
      res.end("Hello from AboutUS side")
    }
    else if(req.url == "/userapi"){
      res.writeHead(200 , {"content-type": "application/json" });
        res.end(objData[0].username);
    }
    else {
        res.writeHead(404, {"content-type" : "text/html"} );// This content-type is used to tell the server that our file is of
                                                            that particular document extension which we define.
        res.end("Error 404 page not found")                 // res.writeHead( http code) is used to show our document info in responsive header inside network pannel 
                                                             after we inspect our web page.
      }

      */
//! This is How you Will render an index.html file 
  /*    res.setHeader('Content-Type','text/html');
      fs.readFile('./views/index.html',(err,fileData) =>{
        if(err){
          console.log(err);
        }

        else{
          res.write(fileData);
          res.end();
        }
      })
      */

  //! Now We'll see how you can render Multiple files
  let path = './views';
  switch(req.url){
    case '/':
      path += '/index.html'
      break;
      case '/about':
        path += '/about.html'
        break;
         
        //! This is How you Perform Redirect 
        case '/about-me':
          res.statusCode = 301;
        res.setHeader('location','/about');
        res.end();

        
      default:
        path += '/error.html'  
        break;
  };

  fs.readFile( path,(err,fileData) =>{
    if(err){
      console.log(err);
    }

    else{
      res.write(fileData);
      res.end();
    }
  })


    });


server.listen(8000 ,"127.0.0.1",()=>{
    console.log('Listen to port no 8000')
});
