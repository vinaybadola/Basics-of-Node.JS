// In Node js every individual file is known as module.
// If we write our code like this it will throw error 

/*
ReferenceError: a is not defined
    at Object.<anonymous> (d:\NodeJS\ModuleWrapperFunc\index.js:7:13)
*/
// because we are calling our func outside the wrapper function.


/*(function ()
{
    var a = "Vinay Badola ";

})();
console.log(a);*/

// Alternate Way
(function()
{
 var a = "vinay Badola";
 console.log(a);
})();
