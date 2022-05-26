// ---------------- QUOKKA --------------------------------

({
    "plugins": ["jsdom-quokka-plugin"],
    "jsdom": {
        "file": "./index.html",
    }
})

// ---------------- QUOKKA --------------------------------


// Intro


function fetchData(url_api, callback) {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url_api, true)

    xhr.onreadystatechange = function () {
        
        if (xhr.readyState === 4) {

            switch (xhr.status) {
                
                case 200:
                    callback(null, JSON.parse(xhr.responseText))
                    break;
            
                default:
                    const error = new Error('Error ' + url_api);
                    return callback(error, null);
            }
        }
    }
    xhr.send()
}


const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API, function(reject1, resolve1) {

    if (reject1 != null) console.log(reject1);
    else fetchData(API + resolve1.results[0].id, function(reject2, resolve2) {

        if (reject2 != null) console.log(reject2);
        else fetchData(resolve2.origin.url, function(reject3, resolve3) {

            if (reject3 != null) console.log(reject3);
            else {
                console.log(resolve1.info.count);
                console.log(resolve2.name);
                console.log(resolve3.dimension);
            }
        })
    })
})