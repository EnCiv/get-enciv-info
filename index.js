/**
 * 
 * getEncivInfo uses socket.io to send a request to the socket based api server, and then return the response in a call back.
 *  
 * 
 * the socket connection is persistent, and it is authenticated.
 * 
 */
const clientIo = require("socket.io-client");

// ensure ENV keys
if (!process.env.ENCIV_API_KEY) {
    console.error("ENCIV_API_KEY needed.  On bash use: export ENCIV_API_KEY=\"your-key-here\" or add it to your .bashrc file")
    process.exit();
}

// ensure ENV keys
if (!process.env.ENCIV_API_URL) {
    console.error("ENCIV_API_URL needed.  On bash use: export ENCIV_API_URL=\"your-key-here\" or add it to your .bashrc file")
    process.exit();
}

const ioClient = clientIo.connect(process.env.ENCIV_API_URL);
var authenticated=false;
var queued=[];

ioClient.on('connect',()=>{
    console.info("client connected", ioClient.id);
    ioClient.emit('authenticate', process.env.ENCIV_API_KEY);
    ioClient.on("authenticated",()=>{
        authenticated=true;
        while(queued.length) queued.shift()();
    })
});

function getEncivInfo(...args) {
    if(!authenticated) queued.push(()=>ioClient.emit(...args))
    else
        ioClient.emit(...args)
}

module.exports=getEncivInfo;
