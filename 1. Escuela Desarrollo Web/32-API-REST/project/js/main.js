// ---------------- QUOKKA --------------------------------

({
    "plugins": ["jsdom-quokka-plugin"],
    "jsdom": {
        "file": "./1. Escuela Desarrollo Web/32-API-REST/project/index.html",
    },
    "env": {
        "params": {
            "runner": "--experimental-fetch"
        }
    }
})

// ---------------- QUOKKA --------------------------------

const LANDING_TITLE = document.getElementById('landing-title');


const APP = {
    LANDING_TITLE: LANDING_TITLE,
}




const API_URL = 'https://api.thecatapi.com/v1/images/search'
const API_KEY = 'cede8741-5c98-48b3-8332-75be0bd0aa74'
const OPTIONS = [
    "?limit=3",
    "&page=100",
    "&order=DESC",
    `?api_key=${API_KEY}`
]

const FULL_API_URL = [
    API_URL,
].join('')

console.log(FULL_API_URL);

const fetchCat = async (FULL_API_URL) => {

    let res = await fetch(FULL_API_URL);
    let data = await res.json();

    console.log(data, '    <- data');
    return data
}



const changeRandomCat = async () => {

    const data = await fetchCat(FULL_API_URL);

    const CAT_IMG = document.getElementById('cat-image')
    CAT_IMG.src = data[0].url
    CAT_IMG.classList.remove('display-none')

    APP.LANDING_TITLE.remove();
}


