
const messages = [
    "Hey",
    "How",
    "Are",
    "You",
    "Today",
    "???"
]

const randomMessages = () => {

    const message = messages[Math.floor(Math.random()*messages.length)]

    console.log(message);
}

module.exports = {randomMessages}