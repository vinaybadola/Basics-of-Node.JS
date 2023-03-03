//* The setInterval() method helps us to repeatedly execute a function after a fixed delay.
//? It returns a unique interval ID which can later be used by the clearInterval() method which stops further repeated execution of the function. 
 
//!  In this example, we will see Infinite number of function executions.
//setInterval(() =>{
//  console.log('setInterval')
//}, 1000);

//* In this example, we will see Finite number of executions using clearInterval().

let count = 0;
const IntervalId = setInterval(() =>{
    console.log("Hi guyss!");
    count ++;

    if(count == 5){
        console.log("clearing after the interval id after 5 executions");
        clearInterval(IntervalId);
    }
} , 1000);

//? SetTimeout() 
setTimeout(() => {
    console.log("setTimeout");
}, 1000);