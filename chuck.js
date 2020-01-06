const axios = require('axios')

function getJoke() {
    const jokeURL= `https://api.chucknorris.io/jokes/random?category=random`;
    return axios.get(jokeURL)
    .then(response => {
        return response.data.value;
    });
}

module.exports = {
    getJoke
    // getDadJoke: getDadJoke
};
