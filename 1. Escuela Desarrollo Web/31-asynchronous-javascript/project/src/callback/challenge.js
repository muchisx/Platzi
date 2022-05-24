// ---------------- QUOKKA --------------------------------

({
    "plugins": ["jsdom-quokka-plugin"],
    "jsdom": {
        "file": ""
    }
})

// ---------------- QUOKKA --------------------------------


function fetchData(url_api, callback) {

    let xhr = new XMLHttpRequest();
    xhr.open('method', url_api, true)

    xhr.onreadystatechange = function () {
        
        if (xhr.readyState === 4) {

            switch (xhr.status) {
                
                case 200:
                    callback(null, JSON.parse(xhr.responseText))    
                    break;
            
                default:
                    const error = new Error('Error' + url_api);
                    return callback(error,null);
                    break;
            }
        }
    }
    xhr.send()
}




