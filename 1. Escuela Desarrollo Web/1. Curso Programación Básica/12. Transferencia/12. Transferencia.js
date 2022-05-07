// alert("works")

// -------------------------------------------------------------------------------------------------------
//                              Global VARs
// -------------------------------------------------------------------------------------------------------

var bank_client;
var account_client;
var balance_client;
var index_client;

var bank_receiver;
var account_receiver;

var transfer_fee = 0;

var transfer_amount;

var hour_current;
var hours = Math.floor(Math.random()*24);
var minutes = Math.floor(Math.random()*60);

// -------------------------------------------------------------------------------------------------------
//                               Classes & fills
// -------------------------------------------------------------------------------------------------------

class client_info {
    constructor(b, c, s) {
        this.bank = b;
        this.account = c;
        this.balance = s;
    }
}

var client = [];
client.push(new client_info("Bancolombia", "Verified", Math.round(Math.random()*1000000)));
client.push(new client_info("BBVA", "Verified", Math.round(Math.random()*100000)));
client.push(new client_info("Davivienda", "Not verified", Math.round(Math.random()*5000)));
client.push(new client_info("Nequi", "Not verified", Math.round(Math.random()*15000)));
client.push(new client_info("Paypal", "Verified", Math.round(Math.random()*70000)));

// -------------------------------------------------------------------------------------------------------
//                               HTML Modifications
// -------------------------------------------------------------------------------------------------------

var client_bank_select = document.getElementById('client_bank');
client_bank_select.addEventListener('change', dynamicClientInfo);

var receiver_bank_select = document.getElementById('receiver_bank');
receiver_bank_select.addEventListener('change', dynamicReceiverInfo);


var bal_client_current = document.getElementById("balance_client_current");

for (let i = 0; i < client.length; i++) {
    client_bank_select.options[i+1] = new Option(client[i].bank, client[i].bank);
    receiver_bank_select.options[i+1] = new Option(client[i].bank, client[i].bank);
}

hourCurrent();
var hour_current_textp = document.getElementById("hour_current");
hour_current_textp.innerHTML = hour_current;

var money_input = document.getElementById("money_input");
money_input.addEventListener('change', dynamicClientInfo);

var transfer_button = document.getElementById("transfer_button");
transfer_button.addEventListener("click", transferMoney)

var result = document.getElementById("result");
var fee = document.getElementById("fee");

// -------------------------------------------------------------------------------------------------------
//                               Functions
// -------------------------------------------------------------------------------------------------------

function transactionFee() {
        
    if (bank_client !== bank_receiver) {
        transfer_fee = 100;
        fee.innerHTML = "Transactions between different banks have a $100 fee."
    } else {
        transfer_fee = 0;
        fee.innerHTML = "Transactions between same banks dont incur fees."
    }
    
}

function dynamicReceiverInfo() {
    bank_receiver = receiver_bank_select.value;
    transactionFee();
    console.log("dynamicReceiverInfo launched");
}

function transferMoney() {

    if ((hours >= 9 && hours <= 12) || (hours >= 15 && hours <= 20)) {

        if (account_client == "Verified") {
            
            if (money_input.value <= balance_client - transfer_fee) {
                result.textContent = "Succesful transfer, your transfer fee was: $" + transfer_fee
                client[index_client].balance -= money_input.value - transfer_fee;
                console.log("Succesful transfer");
                dynamicClientInfo();
            } else {
                result.textContent = "Error during transfer - You do not have enough funds."
            }

        } else {
            result.textContent = "Error during transfer - Your account is not verified."
        }

    } else {
        result.textContent = "Error during transfer - We only operate between 9AM to 12PM and 3PM to 8PM."
    }
}


function dynamicClientInfo() {
    switch (client_bank_select.value) {
        
        case client[0].bank:    
        bal_client_current.innerHTML =  "Balance: " + formatMoney(client[0].balance) + " - " + client[0].account;
        bank_client = client[0].bank;
        balance_client = client[0].balance;
        account_client = client[0].account;
        index_client = 0;
        break;
    
        case client[1].bank:    
        bal_client_current.innerHTML =  "Balance: " + formatMoney(client[1].balance) + " - " + client[1].account;
        bank_client = client[1].bank;
        balance_client = client[1].balance;
        account_client = client[1].account;
        index_client = 1;
        break;

        case client[2].bank:    
        bal_client_current.innerHTML =  "Balance: " + formatMoney(client[2].balance) + " - " + client[2].account;
        bank_client = client[2].bank;
        balance_client = client[2].balance;
        account_client = client[2].account;
        index_client = 2;
        break;

        case client[3].bank:    
        bal_client_current.innerHTML =  "Balance: " + formatMoney(client[3].balance) + " - " + client[3].account;
        bank_client = client[3].bank;
        balance_client = client[3].balance;
        account_client = client[3].account;
        index_client = 3;
        break;

        case client[4].bank:    
        bal_client_current.innerHTML =  "Balance: " + formatMoney(client[4].balance) + " - " + client[4].account;
        bank_client = client[4].bank;
        balance_client = client[4].balance;
        account_client = client[4].account;
        index_client = 4;
        break;
    }
    transactionFee();
    transfer_amount = money_input.value;
    console.log("dynamicClientInfo launched");
}

function hourCurrent() {
    switch (true) {

        case hours >= 10 && minutes >= 10:
        if (hours >= 13 && hours - 12 < 10) {
            hour_current = "0" + (hours - 12) + ":" + minutes + " PM";                
        } else if (hours - 12 >= 10) {
            hour_current = (hours - 12) + ":" + minutes + " PM";                
        } else {
            hour_current = hours + ":" + minutes + " AM";
        }       
        break;

        case hours < 10 && minutes < 10:
        hour_current = "0" + hours + ":" + "0" + minutes + " AM";
        break;

        case hours < 10 && minutes >= 10:
        hour_current = "0" + hours + ":" + minutes + " AM";
        break;

        case hours >= 10 && minutes < 10:
        if (hours >= 13 && hours - 12 < 10) {
            hour_current = "0" + (hours - 12) + ":" + "0" + minutes + " PM";
        } else if (hours - 12 >= 10) {
            hour_current = (hours - 12) + ":" + "0" + minutes + " PM";               
        } else {
            hour_current = + hours + ":" + "0" + minutes + " AM";
        }
        break;

    }
}

function addMinutes() {
    minutes = minutes + 1;

    if (minutes == 60) {
        hours = hours + 1;
        minutes = 0;
    }

    if (hours == 24) {
        hours = 0;
    }

    hourCurrent();

    hour_current_textp.innerHTML = hour_current;
}
setInterval(addMinutes, 1000);

function formatMoney(money) {
    return money.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

// -------------------------------------------------------------------------------------------------------
//                               Console Fixed Info 
// -------------------------------------------------------------------------------------------------------

console.table(client);
