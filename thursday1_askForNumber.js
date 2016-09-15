var translations = {
    1: "eins",
    2: "zwei",
    3: "drei",
    4: "vier",
    5: "funf",
    6: "sechs",
    7: "sieben",
    8: "acht",
    9: "neun",
    10: "zehn"
};


function askForNumber(){
    var num = prompt("please enter a number between 1 and 10");
    try {
        if (num % 1 == 0 && num > 0 &&  num < 11){
            return num;
        }
        throw "not a valid number";
    }
    catch(e){
        console.log(e);
        return askForNumber();
    }
}

function translateNumberToGerman(){
    var num = askForNumber();
    return translations[num];
}

console.log(translateNumberToGerman());
