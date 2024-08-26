const express = require('express')
const ejs = require('ejs')
const { Dirent } = require('fs')
const pat = require('path')
const app = express()
const fs = require('fs').promises

async function readingfiles(){
    const dir = await fs.opendir('./public/applications')
    // let s = (await fs.readFile('./public/applications/ico.svg')).toString()
    // console.log(s)
    let applist = [ ];
    let dirint = await dir.read()
    
    while (dirint){
        if(dirint.isDirectory()){
            console.log(dirint.name)
            console.log(`./public/applications/${dirint.name}/application.json`)
            applist.push(JSON.parse((await (fs.readFile(`./public/applications/${dirint.name}/application.json`))).toString()))
            
            dirint = await dir.read()
            
        }else{
            console.log(false)
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
    console.log(applicationslist)
    res.render('./index.ejs',{applicationslist :  JSON.stringify(applicationslist)})
})
app.post('/',async (req,res)=>{
    console.log(true);
    
    const getApplication0123 = require('./public/applications/fileloading/serverside')
    const terminal_application = require('./public/applications/terminal/application')
    getApplication0123(req,res,pat,fs)
    terminal_application(req,res)

})
process.on('uncaughtException', function (error, orgin) {
    console.log(error, orgin)
})
app.listen(3000, () => {
    console.log('Running in 3000')
})
