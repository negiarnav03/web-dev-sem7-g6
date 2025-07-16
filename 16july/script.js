/*

setTimeOut() delay - event
setInterval()  delay - event repeat
setImmediate() callback 
process.next.tick

*/

const https = require('node:https');
const fs = require('node:fs');
setTimeout(()=>{
    console.log("THIS ST3")
},10);


fs.readFile("./something.txt",'utf8',(err,data)=>{
    if(err){
        console.error(err);
        return ;
    }
    console.log(data);
});


var a =200;

setTimeout(() => {
    console.log("THIS IS ST3");   
},0);


console.log(a);
setTimeout(()=>{
    console.log("THIS IS ST2");
})


