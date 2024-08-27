async function getApplication0123(req, res, pat, fs) {
    let serv = req.body.serv
    if (serv == 0) {
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

        res.send({ dir: dirlist, file: filelist, cwd: path })
    }
}
module.exports = getApplication0123