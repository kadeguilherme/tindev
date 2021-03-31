module.exports = {
    store(req,res) { 
        console.log(json.body)
        return res.json({ok: true });
    }
}