// api : cmd [0] is the tool // cmd [1] is the parameters
function terminal_system(req,res){
    let serv = req.body.serv;
    if(serv == 'terminal-req'){
        let cmd = req.body.cmd;
        // make the list that contains the tool the first space and the rest is in one item in the list !
        cmd = cmd.split(' ')
        let first = cmd.shift()
        cmd = cmd.join(' ')
        // the finsher list 
        let toolparm = [first, cmd]
        // the requirement of the tool 
        let reqs = require(`./public/applications/terminal/terminal-tools/${toolparm[0]}.jst`)
        // the passing of the parameters!
        let out = reqs(toolparm[1])
        // sending the respond of the server and the tool ..
        res.send({error : false, output : out})

    }
}
// export it as a module
module.exports = terminal_system;