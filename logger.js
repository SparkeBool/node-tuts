const EventEmitter = require('events');


const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    //method
     log(message) {
        //send http request
        console.log(message);
    
       this.emit("messageLogged", {id:1, url:url});
        
    }

}



module.exports= Logger;