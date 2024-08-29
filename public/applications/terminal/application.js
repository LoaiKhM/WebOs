// api : cmd [0] is the tool // cmd [1] is the parameters
async function terminal_system(req,res){
    let serv = req.body.serv;
    if(serv == 'terminal-req'){
        console.log(req.body.nwJSN)
    }
}
// export it as a module
module.exports = terminal_system;