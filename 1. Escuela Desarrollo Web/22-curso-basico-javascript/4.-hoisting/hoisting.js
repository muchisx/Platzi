


// ! Hoisting != Hosting
// Hoisting is the action of JS to load stuff in memory before running the code line by line

issueHosting();

function issueHosting() {
    console.log(unreadable);
}

// Notice how the unreadable variable couldn't be read because the function was declared first

var unreadable = "I wont be read because of hosting";