async function getApplication0123(req,res,pat,fs) {

    console.log(false);
    

    let path = req.body.path
    path = path.split(',')
    console.log(path);

    path = pat.join(path[0], path[1])

    const dir = await fs.opendir(path)
    let diri = await dir.read()
    const dirlist = []
    const filelist = []
    while (diri) {
        if (diri.isDirectory()) {
            dirlist.push(diri.name)
            console.log(true);
            
            diri = await dir.read()
        } else if (diri.isFile()) {
            console.log(true);

            filelist.push(diri.name)
            diri = await dir.read()
        }

    }
    console.log(`${path}`)
    res.send({ dir: dirlist, file: filelist, cwd: path })

}
module.exports = getApplication0123