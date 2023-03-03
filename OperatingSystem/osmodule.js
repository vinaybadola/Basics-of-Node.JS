import { freemem, homedir, arch ,totalmem , hostname , type} from 'os';

console.log(freemem()/1024/1024/1024) // Returns the amount of free  System memory in bytes as an integer. But if we divide that memory with 1024 3 times it returns 
                                        // the memory in gb.


console.log(homedir())  // Returns the string path of the current user's home directory.
console.log(arch()) // Returns the OS CPU architecture for which the Node.js binary was compiled.
console.log(totalmem()) // Returns total memory in your system (Basicallly RAM)
console.log(hostname()) // Returns the host name 
console.log(type()) // Returns the OS name 

const os=require('os');  
console.log("os.freemem(): \n",os.freemem());  
console.log("os.homedir(): \n",os.homedir());  
console.log("os.hostname(): \n",os.hostname());  
console.log("os.endianness(): \n",os.endianness());  
console.log("os.loadavg(): \n",os.loadavg());  
console.log("os.platform(): \n",os.platform());  
console.log("os.release(): \n",os.release());  
console.log("os.tmpdir(): \n",os.tmpdir());  
console.log("os.totalmem(): \n",os.totalmem());  
console.log("os.type(): \n",os.type());  
console.log("os.uptime(): \n",os.uptime());  

