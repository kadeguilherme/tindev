const axios = require('axios');

module.exports = {
    store(req,res) { 
        const { username } = req.body;

        const response = axios.get(`https://api.github.com/users/${username}`);
         
        //As informações no axios esta dentro do data
        console.log(response.data);


        return res.json({ok: true });
    }
}