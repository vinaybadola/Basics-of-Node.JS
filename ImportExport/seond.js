
//(function(exports, require, ,module, _filename, _dirname){













//Import and export In Node js
// We export Vinay obj from seond.js and import into the index2.js

vinay={
    name:"viny",
    fav : 15,
    developer:true
}
console.log(exports , require , module, __filename , __dirname) 
module.exports =vinay;

//})