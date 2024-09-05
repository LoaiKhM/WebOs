const express = require('express')
const ejs = require('ejs')
const { Dirent } = require('fs')
const pat = require('path')
const app = express()
const fs = require('fs').promises

async function readingfiles(){
    const dir = await fs.opendir('./public/applications')
    // let s = (await fs.readFile('./public/applications/ico.svg')).toString()

    let applist = [ ];
    let dirint = await dir.read()
    
    while (dirint){
        if(dirint.isDirectory()){


            applist.push(JSON.parse((await (fs.readFile(`./public/applications/${dirint.name}/application.json`))).toString()))
            
            dirint = await dir.read()
            
        }else{

            dirint = await dir.read()
        }


    }
    
    return applist;
}
app.use(express.json())
app.set('view engine', "ejs")
app.use(express.static('public'))

app.get('/', async (req, res) => {
    
    const applicationslist = await readingfiles()

    res.render('./index.ejs',{applicationslist :  JSON.stringify(applicationslist)})
})
app.post('/',async (req,res)=>{

    console.log('done')
    const getApplication0123 = require('./public/applications/fileloading/serverside')
    // const save = require('./public/scripts/fileSaveSV')

    const terminal_application = require('./public/applications/terminal/application')
    getApplication0123(req,res,pat,fs)
    terminal_application(req,res,fs)
    
    // save(req,res,pat,fs)
    

})
process.on('uncaughtException', function (error, orgin) {
    console.log(error, orgin)
})
app.listen(3000, () => {
    console.log('Running in 3000')
})
