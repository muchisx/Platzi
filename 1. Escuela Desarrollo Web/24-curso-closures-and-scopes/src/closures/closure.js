const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`saveCoins: ${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

const moneyBox2 = () => {
    debugger;
    var saveCoins2 = 0;
    const countCoins = (coins) => {
        debugger;
        saveCoins2 += coins;
        console.log(`saveCoins2: ${saveCoins2}`);
    }
    return countCoins;
}

let myMoneyBox2 = moneyBox2();

myMoneyBox2(4)
myMoneyBox2(5)
myMoneyBox2(10)
