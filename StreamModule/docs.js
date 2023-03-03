// Writing to a Stream
var fs = require('fs');
var data = "One day I will be Successful";

// Creating a writable stream
var writerStream = fs.createWriteStream('output.txt');

//Write the data to stream with encoding to be utf-8
writerStream.write(data , 'utf-8');
//!How to send data to a writable stream[We can also use this method to write the information in our file]
//? sol: Using the stream write() method:

writerStream.write('hey!/n');

// Mark the end of file
writerStream.end();

// Handle stream events 
writerStream.on('finish', function(){
    console.log("write completed");
});
writerStream.on( 'error', function(err){
    console.log(err);
})

console.log("Program Ended");

// Now open the ouput.txt file to verify that program runs successfully