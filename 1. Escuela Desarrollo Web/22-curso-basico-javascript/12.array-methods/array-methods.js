

// ! Array Methods

let articles = [
    { name: 'Bike', price: 3000 },
    { name: 'TV', price: 2500 },
    { name: 'Book', price: 320 },
    { name: 'Phone', price: 10000 },
    { name: 'Laptop', price: 20000 },
    { name: 'Laptop', price: 20000 },
    { name: 'Keyboard', price: 500 },
    { name: 'Headphones', price: 1700 }
]


// Filter method
// Finds all elements that meet the criteria and returns their respective object in order in a new array
// as objects

let filteredArticles = articles.filter(function(article) {
    return article.price <= 500
});

filteredArticles;

// Map method
// Finds all elements under a label without returning the entire object associated
// in this example we only return the elements associated with the name label

let namedArticles = articles.map(function(article) {
    return article.name
})

namedArticles;

// Find method
// finds the first element that matches a criteria and returns is as an object with the other
// labels associated with it

let findArticle = articles.find(function(article) {
    return article.name === "Laptop"
})

findArticle;

// forEach method
// does not return an array
// Instead, it will execute the function for each element inside an array

articles.forEach(function(article) {
    console.log(article.name);
})

// some method
// Returns a boolean that matches true or false depending on your criteria

let cheapArticles = articles.some(function(article) {
    return article.price <= 700;
})
cheapArticles;


// push method
// shift method
// unshift method
// pop method
// indexOf method
// We went through the above methods in this other class
// "../12.array-methods"