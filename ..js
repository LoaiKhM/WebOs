let terminalparams = terminal-params;
let sp = terminalparams.split(' ')

let user = sp[0]
let pc = sp[1]
console.log(pc, user)
async function editinfo(){
    
    let nwJSN = {
                    "username" : user, 
                    "pcname"   : pc
                }
    alert()
    await fetch('/',{method :'POST',headers:{'Content-Type' : 'application/json'},body:JSON.stringify({nwJSN : nwJSN , serv : 'terminal-req'})})
    append_to_window(false,STDP,`<h6 style='font-family:sans-serif; letter-spacing:3px; padding:0;margin:2px 0 2px 0;'>PC : ${pc} USER : ${user}</h6>`)
    add_line()
}
editinfo()