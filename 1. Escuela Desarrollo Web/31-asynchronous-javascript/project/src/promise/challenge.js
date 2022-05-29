// ---------------- QUOKKA --------------------------------

({
    "plugins": ["jsdom-quokka-plugin"],
    "jsdom": {
        "file": "./index.html"
    },
    "env": {
        "params": {
          "runner": "--experimental-fetch"
        }
      }
})


// ---------------- QUOKKA --------------------------------


const API_URL = 'https://rickandmortyapi.com/api/character/';


fetch(API_URL)
    .then(res => res.json()).then(data => fetch(API_URL + data.results[0].id))
    .then(res => res.json()).then(data => fetch(data.origin.url))
    .then(res => res.json()).then(data => console.log(data.dimension))
    .catch(error => new Error(error))


