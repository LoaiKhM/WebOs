const { response } = require("express");

// api : cmd [0] is the tool // cmd [1] is the parameters
async function terminal_system(req,res,fs){
    let serv = req.body.serv;
    console.log('done')
    if(serv == 'terminal-req'){
        console.log(req.body.nwJSN)
        fs.writeFile('./public/applications/terminal/terminal-tools/terminal-init.json',JSON.stringify(req.body.nwJSN))
        res.end()
    }
}
// export it as a module
module.exports = terminal_system;