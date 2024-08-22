const express = require('express')
const ejs = require('ejs')
const { Dirent } = require('fs')
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
    let path = req.body.path
    
    
    const dir = await fs.opendir(path)
    let diri = await dir.read()
    const dirlist = [ ]
    const filelist = [ ]
    while (diri){
        if(diri.isDirectory()){
            dirlist.push(diri.name)
            diri = await dir.read()
        }else if(diri.isFile()){
            filelist.push(diri.name)
            diri = await dir.read()
        }

    }
    console.log(`${path}`)
    res.send({dir: dirlist,file:filelist,cwd :path})
})
process.on('uncaughtException', function (error, orgin) {
    console.log(error, orgin)
})
app.listen(3000, () => {
    console.log('Running in 3000')
})
