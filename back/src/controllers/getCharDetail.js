const axios = require('axios');

const getCharDetail = (res, ID) => {
    const URL_BASE = 'https://rickandmortyapi.com/api/'

    axios.get(`${URL_BASE}/characters/${ID}`)
    .then((data) => {
        const character = {
            image: data.data.image,
            name: data.data.name,
            gender: data.data.gender,
            status: data.data.status,
            origin: data.data.origin,
            species: data.data.species
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(character))
    })
    .catch((error) => {
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end(error.message)
    })
};

module.exports = getCharDetail;