module.exports = {
    store(req,res) { 
        console.log(req.body.username);
        //Poder ser o debaixo usando a desestruturação
        const { username } = req.body;
        return res.json({ok: true });
    }
}