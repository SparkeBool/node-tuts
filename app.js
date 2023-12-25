
const EventEmitter = require('events');
// const emiter = new EventEmitter();

const Logger = require("./logger");
const logger = new Logger();

//registering a istener

logger.on('messageLogged', (args)=>{
    console.log("Listener Called", args);
});


logger.log('Hey Sparke!');

const http = require('http');


const server = http.createServer((req, res)=>{
if (req.url === '/'){
    res.write("Welcome to Sparke Site");
    res.end();
}

if (req.url === '/api/courses'){
    res.write(JSON.stringify([2,3,4,5]));
    res.end();
}



});



server.listen(3000,
console.log("Listening on port 3000..."));





//raise an event/ add argument


// emiter.on("Logging", (data)=>{

// console.log('Logging', data);

// });

// emiter.emit("Logging", {message:"I am testing the emitter"})


































// const fs = require('fs');

// const files= fs.readdirSync('./');

// console.log(files);

// const file= fs.readdir('$', function(err,files){
//     if(err) console.log('Error', err);
//     else console.log("result", files);
// });





















































// const path = require('path')
// const os = require("os");


// var pathObject = path.parse(__filename);

// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();


// console.log(`Total Memory: ${totalMemory}; Free Memory: ${freeMemory}  `);

// // console.log(pathObject);
