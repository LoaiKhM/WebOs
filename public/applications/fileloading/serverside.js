async function getApplication0123(req, res, pat, fs) {
    let serv = req.body.serv
    if (serv == 0) {
        console.log('done server')
        let path = req.body.path
        path = path.split(',')


        path = pat.join(path[0], path[1])

        const dir = await fs.opendir(path)
        let diri = await dir.read()
        const dirlist = []
        const filelist = []
        while (diri) {
            if (diri.isDirectory()) {
                dirlist.push(diri.name)


                diri = await dir.read()
            } else if (diri.isFile()) {


                filelist.push(diri.name)
                diri = await dir.read()
            }

        }
        console.log({ dir: dirlist, file: filelist, cwd: path })
        res.send({ dir: dirlist, file: filelist, cwd: path })
    }else if(serv == 'SaveFile-file-save'){
        let {name , path, value} = req.body;
        
    }
}
module.exports = getApplication0123