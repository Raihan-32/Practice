var prompt = require("prompt-sync")();
password = prompt("Enter password: ");

if (password == "a1b2c3"){
    console.log("Welcome!")
}

else if (password == "c3b2a1"){
    console.log("Welcome!")
}
else{
    console.log("Sorry! We don't find you in the system.")
}








