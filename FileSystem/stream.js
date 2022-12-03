/*
If we have larger piece of data it is better to not load all the data at once maybe we want to present
the output one by one.
*/

const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt',{encoding: 'utf-8'});


const ws = fs.createWriteStream('./files/new-lorem.txt'); 

/*
rs.on('data',(datachunk)=>{
      ws.write(datachunk);         //! Writing file data into new-lorem.txt
})
*/

// Better way 

rs.pipe(ws);

/*
!  Additonal Information 
* How to Create Directory

if(!fs.existSync('./new')){
    fs.mkdir('./new',(err)=>{
        if(err) throw err;
        console.log('Directory created');
    });
}

* How to delete Directory

if(!fs.existSync('./new')){
    fs.rmdir('./new',(err)=>{
        if(err) throw err;
        console.log('Directory created');
    });
}

*/