/*
! Download Better Comments extension for prettier comments
 *Pure JavaScript is Unicode friendly, but it is not so for binary data. While dealing with TCP streams or the file system, it's necessary to handle octet streams.
! Node provides Buffer class which provides instances to store raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.

? Buffer class is a global class that can be accessed in an application without importing the buffer module.


* Creating  Buffers
 
* Method 1:
! Var buf = new Buffer() is depreacted due to security issue
! New way:   var buf = Buffer.alloc()
!             var buf =Buffer.from( string , encoding)
**Following is the syntax to create an uninitiated Buffer of 10 octets −
** Question mark sign in below code  is only used so that we can write comments in different colors.
  ?   var buf = Buffer.alloc(10);

 *Method 2:
 ?  var buf =  Buffer.alloc([97, 98 , 99 , 100 ]);
 ?  console.log(buf.toString('utf-8')); //! output = abcd

 *Method 3: 
 
 ? var buf = Buffer.from("Simply Easy Learning", "utf-8");
 ? console.log(buf.toString()); //! outupt = Simply Easy Learning  (try removing .toString() method)
                                
*/

//! Writing to Buffers 

// Syntax :
// buf.write(string[, offset][, length][, encoding])

//buf = Buffer.alloc(256);
//len = buf.write("Simply Easy Learning");

//console.log("Octets written : "+  len);  //! output: Octets written : 20


//! Reading from Buffers

// Syntax 
// buf.toString([encoding][, start][, end])
 /*
 ?encoding − Encoding to use. 'utf8' is the default encoding.
?start − Beginning index to start reading, defaults to 0.
*end − End index to end reading, defaults is complete buffer.

 */
/*
buf = Buffer.alloc(256);
for(var i = 0 ; i< 26 ; i++){
    buf[i] = i+ 97;
}

console.log(buf.toString('utf-8' ,0, 6));  //! output- abcdef
console.log(buf.toString('ascii'));        //! output- abcdefghijklmnopqrstuvwxyz
console.log( buf.toString(undefined, 0,5));  // Encoding defaults to 'utf-8' //! output- abcde
*/
 //! Convert Buffer to JSON

 // ? syntax: buf.toJSON()

 /*var buf = Buffer.from('Simply');
 var json = buf.toJSON(buf);
 console.log(json);
*/
 //! Iterate over the contents of a buffer

 const buff = Buffer.from('Hey');
 for(const item of buff){
   console.log(item); //! output = 72 101 121
 }
 //? Changing the content of a buffer
 const buf = Buffer.from("HEYYYY!");
 buf.write('OObsdk');
 console.log(buf.toString('utf-8')); //? output= OObsdk!
 
 // Just like you can access a buffer with an array syntax, you can also set the contents
 //of the buffer in the same way:

 const bufo = Buffer.from('hey!');
 bufo[1] = 111 //* o in utf-8
 console.log(bufo.toString());//! Hoy!
 
 //! Slice a Buffer
 //? If you want to create a partial visualization of a buffer, you can create a slice.
 //? A slice is not a copy: the original buffer is still the source of truth. If that changes your slice changes.

 //* Use the subarray() method to create it. The first parameter is the starting position and you can specify an optional second parameter with and end position.
 const slic = Buffer.from('HELLO!')
 const slice = slic.subarray(0,2);
 console.log(slice.toString());





