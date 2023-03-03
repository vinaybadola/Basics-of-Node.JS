/* Callback is an asynchronus equivalent for a function. A Callback funtion is called at the completion of a given task.
All the APIs of node are written in such a way that they support callbacks.
*/



// Blocking code example
// Explaination: This example shows that the program blocks until it reads the file  and then only it proceeds to end the program.


// Uncomment to see the operation 

/*var fs = require('fs');
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("program ended"); */


// Non Blocking code example
// Explaination: This example shows that the program does not wait for file reading and proceeds
//to print "Program Ended" and at the same time, the program without blocking continues reading the file.


var fs = require('fs');
fs.readFile('input.txt' , (err, data) => {
        if (err)
            return console.error(err);
        console.log(data.toString());

    });
console.log("program ended");
