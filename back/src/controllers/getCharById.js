const axios = require('axios');

const getCharById = (res, ID) => {
    const URL_BASE = 'https://rickandmortyapi.com/api'

    axios.fetch(`${URL_BASE}/characters/${ID}`)
    .then((data) => {
        const character = {
            id: data.data.id,
            image: data.data.image,
            name: data.data.name,
            gender: data.data.gender,
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

module.exports = getCharById;

// fetch(`${URL_BASE}/character/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.name){
//           setCharacters((oldChars) => [...oldChars, data]);
//         } else {
//           window.alert('Algo Salió mal');
//         }
//       });