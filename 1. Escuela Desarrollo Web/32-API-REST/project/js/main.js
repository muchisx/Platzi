// ---------------- QUOKKA -------------------------------

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

// ---------------- QUOKKA -------------------------------

const LANDING_TITLE = document.getElementById('landing-title');
const CARDS_CONTAINER = document.getElementById('cats-cards-container');
const FAV_CARDS_CONTAINER = document.getElementById('favorites-cats-cards-container');

const APP = {
    LANDING_TITLE: LANDING_TITLE,
    CARDS_CONTAINER: CARDS_CONTAINER,
    FAV_CARDS_CONTAINER: FAV_CARDS_CONTAINER,
}


const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'cede8741-5c98-48b3-8332-75be0bd0aa74';
const ENDPOINTS = [
    '/images/search',
    '/favourites/',
    '/images/upload',
];
const OPTIONS = [
    "?limit=",
    "&page=",
    "&order=",
    `?api_key=${API_KEY}`
];

const CAT_API = axios.create({
    baseURL: API_URL
});
CAT_API.defaults.headers.common['x-api-key'] = API_KEY;


const fetchCats = async (FULL_API_URL) => {

    let res = await fetch(FULL_API_URL);
    let data = await res.json();

    console.log(data, '    <- data');
    return data
}

const changeRandomCat = async () => {

    const RANDOM_5_DESC = [
        API_URL,
        ENDPOINTS[0],
        OPTIONS[0],
        '5',
    ].join('')

    const data = await fetchCats(RANDOM_5_DESC);
    const nodes = [];

    CARDS_CONTAINER.innerHTML = "";

    data.forEach(item => {

        let index = data.indexOf(item);

        let article = document.createElement('article');
        let div = document.createElement('div');
        let img = document.createElement('img');
        let button = document.createElement('button');
        

        article.classList.add('cat-card-container');
        article.id = `cat-card-container-${index}`;
        div.classList.add('cat-card');
        img.id = item.id
        img.classList.add('cat-card__image');
        img.src = item.url;
        button.classList.add('cat-card__favorite-button');
        button.onclick = makeFavorite;
        button.innerText = '🖤';

        article.appendChild(div);
        div.appendChild(img);
        div.appendChild(button)

        nodes.push(article);

    })

    CARDS_CONTAINER.append(...nodes)
    FAV_CARDS_CONTAINER.classList.add('display-none')
    CARDS_CONTAINER.classList.remove('display-none')

    APP.LANDING_TITLE.remove();
}

const changeRandomCatAxios = async () => {
      
    const res = await CAT_API.get(`${ENDPOINTS[0]}${OPTIONS[0]}5`);
    console.log(res);
    const data = res.data
    console.log(data);

 
    const nodes = [];

    CARDS_CONTAINER.innerHTML = "";

    data.forEach(item => {

        let index = data.indexOf(item);

        let article = document.createElement('article');
        let div = document.createElement('div');
        let img = document.createElement('img');
        let button = document.createElement('button');
        

        article.classList.add('cat-card-container');
        article.id = `cat-card-container-${index}`;
        div.classList.add('cat-card');
        img.id = item.id
        img.classList.add('cat-card__image');
        img.src = item.url;
        button.classList.add('cat-card__favorite-button');
        button.onclick = makeFavorite;
        button.innerText = '🖤';

        article.appendChild(div);
        div.appendChild(img);
        div.appendChild(button)

        nodes.push(article);

    })

    CARDS_CONTAINER.append(...nodes)
    FAV_CARDS_CONTAINER.classList.add('display-none')
    CARDS_CONTAINER.classList.remove('display-none')

    APP.LANDING_TITLE.remove();
}

const swapToFavorites = async () => {

    const FAVORITES = [
        API_URL,
        ENDPOINTS[1],
    ].join('')

    let res = await fetch(FAVORITES, {
        method: 'GET',
        headers: {
            "x-api-key": API_KEY,
        }
    })
    let data = await res.json()

    CARDS_CONTAINER.classList.add('display-none')
    FAV_CARDS_CONTAINER.classList.remove('display-none')

    APP.LANDING_TITLE.remove();

    if (data.length == 0) {

        FAV_CARDS_CONTAINER.innerHTML = "";
        let info = document.createElement('p')
        info.classList.add('cat-card__info')
        info.innerText = "No Favs added yet"

        FAV_CARDS_CONTAINER.append(info)
    } else {

        FAV_CARDS_CONTAINER.innerHTML = "";
        const nodes = [];
             
        data.forEach(item => {

            let index = data.indexOf(item);

            let article = document.createElement('article');
            let div = document.createElement('div');
            let img = document.createElement('img');
            let button = document.createElement('button');
            

            article.classList.add('cat-card-container');
            article.id = `cat-card-container-${index}`;
            div.classList.add('cat-card');
            img.classList.add('cat-card__image');
            img.id = item.id
            img.src = item.image.url;
            button.classList.add('cat-card__favorite-button');
            button.onclick = removeFavorite;
            button.innerText = '❤️';

            article.appendChild(div);
            div.appendChild(img);
            div.appendChild(button)

            nodes.push(article);
        })

        
        FAV_CARDS_CONTAINER.append(...nodes)
    }
}

const makeFavorite = async (e) => {
    console.log(e);
    e.target.innerText = '❤️';

    const image = e.target.parentNode.querySelector('.cat-card__image');
    const imageURL = image.src;
    const imageID = image.id

    console.log(imageURL);
    console.log(imageID);

    const res = await postFavorite(imageID);
}

const postFavorite = async (imageID) => {

    const POST_FAV_URL = [
        API_URL,
        ENDPOINTS[1],
    ].join('')

    let res = await fetch(POST_FAV_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
        },
        body: JSON.stringify({
            "image_id": imageID,
        })
    })

    console.log(res);
    return res
}

const removeFavorite = async (e) => {
    console.log(e);
    e.target.innerText = '🖤';

    const image = e.target.parentNode.querySelector('.cat-card__image');
    const imageURL = image.src;
    const imageID = image.id

    console.log(imageURL);
    console.log(imageID);

    const REMOVE_FAV_URL = [
        API_URL,
        ENDPOINTS[1],
        imageID,
    ].join('')

    console.log(REMOVE_FAV_URL);

    let res = await fetch(REMOVE_FAV_URL, {
        method: "DELETE",
        headers: {
            "x-api-key": API_KEY,
        }
    })

    swapToFavorites();
    console.log(res);

}

const uploadCatImage = async () => {

   const form = document.getElementById('upload-form');
   const formData = new FormData(form);
   console.log(formData);
   console.log(formData.get('file'));

    
   const POST_IMG_URL = [
    API_URL,
    ENDPOINTS[2],
    ].join('')

   const res = await fetch(POST_IMG_URL, {

        method: 'POST',
        headers: {
            // 'Content-Type': 'multipart/form-data',
            'x-api-key': API_KEY,
        },
        body: formData
    
   })
   const data = await res.json();

   console.log(data);
   await postFavorite(data.id)
   
}


