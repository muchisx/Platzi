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


const fetchToObject = (API_URL) => {

    return fetch(API_URL)
        .then(res => res.json());
}


const AsyncFetch = async (API_URL) => {

    try {
        const dataCharList = await fetchToObject(API_URL);
        const dataChar = await fetchToObject(`${API_URL}${dataCharList.results[0].id}`)
        const dataLocation = await fetchToObject(dataChar.origin.url)
        
        console.log(dataCharList.info.count);
        console.log(dataChar.name);
        console.log(dataLocation.dimension);
    } catch {
        console.error(error);
    }
};


console.log('Before');
AsyncFetch(API_URL);
console.log('After');