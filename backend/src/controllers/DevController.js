const axios = require('axios');

module.exports = {
    async store(req,res) { 
        const { username } = req.body;

        const response = await axios.get(`https://api.github.com/users/${username}`);
         
        //As informações no axios esta dentro do data
        console.log(response.data);


        return res.json(response.data);
    }
}