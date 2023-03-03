
// This is old way like in old days we first download any video or song and then play it.
const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request' , (req , res) =>{
       
       // fs.readFile(  'readme.txt' , (err,data)=> { //readFile() reads the full contents of the file, and invokes the callback function when it's done.
         //   if(err) return console.error(err);
           // res.end(data.toString());       //The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string.
       // });                                 //res.end(data) in the callback will return the file contents to the HTTP client.
     
     
     
     
     
  

        // 2nd way 
 // Reading from a stream 
 // Creating a readable stream
 // Handle stream events -> data,end  and error
//Instead of waiting until the file is fully read,
 //we start streaming it to the HTTP client as soon  as we have a chunk of data ready to be sent.

 
 const rstream = fs.createReadStream( 'readme.txt');

 rstream.on("data", (chunkdata) =>{
    res.write(chunkdata);

  });


  rstream.on('end' , () =>{
    res.end();
   });
 
     
// If no file exist like readme.txt it will show the error to handle this we need to show the proper error to user.
 rstream.on('error' ,(err)=>{
  console.log(err);
  res.end("File not found ");
 });
});


// 3rd way
//const rstream = fs.createReadStream('readme.txt');
//rstream.pipe(res); // stream.pipe(), the method used to take a readable stream and connect it to a writable stream 
 
//});

server.listen(8000 , "127.0.0.1");


