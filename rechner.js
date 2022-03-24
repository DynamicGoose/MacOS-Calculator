var nDisplay = "0";
var n = 0;
var calcType;
var acceptInput = true;

document.addEventListener("keydown", function(event) {
    if(event.key === "0"){
        zero();
    }
    if(event.key === "1"){
        one();
    }
    if(event.key === "2"){
        two();
    }
    if(event.key === "3"){
        three();
    }
    if(event.key === "4"){
        four();
    }
    if(event.key === "5"){
        five();
    }
    if(event.key === "6"){
        six();
    }
    if(event.key === "7"){
        seven();
    }
    if(event.key === "8"){
        eight();
    }
    if(event.key === "9"){
        nine();
    }
    if(event.key === "+"){
        add();
    }
    if(event.key === "-"){
        subtract();
    }
    if(event.key === "*"){
        multiply();
    }
    if(event.key === "/"){
        divide();
    }
    if(event.key === "="){
        calc();
    }
    if(event.key === "Enter"){
        calc();
    }
    if(event.key === ","){
        comma();
    }
    if(event.key === "Backspace"){
        ac();
    }
});

function zero() {
    if(nDisplay != "0" && acceptInput){
        nDisplay = nDisplay + "0";
        manageDisplay(nDisplay);
    }
}

function one() {
    if(acceptInput){
        if(nDisplay == "0"){
            nDisplay = "1";
        }
        else if(nDisplay == "-0"){
            nDisplay = "-1";
        }
        else{
            nDisplay = nDisplay + "1";
        }
        manageDisplay(nDisplay);
    }
}

function two() {
    if(acceptInput){
        if(nDisplay == "0"){
            nDisplay = "2";
        }
        else if(nDisplay == "-0"){
            nDisplay = "-2";
        }
        else{
            nDisplay = nDisplay + "2";
        }
        manageDisplay(nDisplay);
    }
}

function three() {
    if(acceptInput){
        if(nDisplay == "0"){
            nDisplay = "3";
        }
        else if(nDisplay == "-0"){
            nDisplay = "-3";
        }
        else{
            nDisplay = nDisplay + "3";
        }
        manageDisplay(nDisplay);
    }
}

function four() {
    if(acceptInput){
        if(nDisplay == "0"){
            nDisplay = "4";
        }
        else if(nDisplay == "-0"){
            nDisplay = "-4";
        }
        else{
            nDisplay = nDisplay + "4";
        }
        manageDisplay(nDisplay);
    }
}

function five() {
    if(acceptInput){
        if(nDisplay == "0"){
            nDisplay = "5";
        }
        else if(nDisplay == "-0"){
            nDisplay = "-5";
        }
        else{
            nDisplay = nDisplay + "5";
        }
        manageDisplay(nDisplay);
    }
}

function six() {
    if(acceptInput){
        if(nDisplay == "0"){
            nDisplay = "6";
        }
        else if(nDisplay == "-0"){
            nDisplay = "-6";
        }
        else{
            nDisplay = nDisplay + "6";
        }
        manageDisplay(nDisplay);
    }
}

function seven() {
    if(acceptInput){
        if(nDisplay == "0"){
            nDisplay = "7";
        }
        else if(nDisplay == "-0"){
            nDisplay = "-7";
        }
        else{
            nDisplay = nDisplay + "7";
        }
        manageDisplay(nDisplay);
    }
}

function eight() {
    if(acceptInput){
        if(nDisplay == "0"){
            nDisplay = "8";
        }
        else if(nDisplay == "-0"){
            nDisplay = "-8";
        }
        else{
            nDisplay = nDisplay + "8";
        }
        manageDisplay(nDisplay);
    }
}

function nine() {
    if(acceptInput){
        if(nDisplay == "0"){
            nDisplay = "9";
        }
        else if(nDisplay == "-0"){
            nDisplay = "-9";
        }
        else{
            nDisplay = nDisplay + "9";
        }
        manageDisplay(nDisplay);
    }
}

function ac() {
    n = 0;
    nDisplay = "0";
    manageDisplay(nDisplay);
}

function inverse() {
    if(nDisplay.includes("-")){
        nDisplay = nDisplay.slice(1)
    }
    else{
        nDisplay = "-" + nDisplay;
    }
    manageDisplay(nDisplay);
}

function percent() {
    if(n != 0){
        if(calcType == "+"){
            nDisplay = n + nDisplay%n;
        }
        else if(calcType == "-"){
            nDisplay = n - nDisplay%n;
        }
        else if(calcType == "*"){
            nDisplay = n * nDisplay%n;
        }
        else if(calcType == "/"){
            nDisplay = n / nDisplay%n;
        }
        manageDisplay(nDisplay);
        acceptInput = false;
    }
}

function add() {
    n = convert(nDisplay);
    nDisplay = "0";
    calcType = "+";
    acceptInput = true;
}

function subtract() {
    n = convert(nDisplay);
    nDisplay = "0";
    calcType = "-";
    acceptInput = true;
}

function multiply() {
    n = convert(nDisplay);
    nDisplay = "0";
    calcType = "*";
    acceptInput = true;
}

function divide() {
    n = convert(nDisplay);
    nDisplay = "0";
    calcType = "/";
    acceptInput = true;
}

function calc() {
    if(n == 0){
        n = convert(nDisplay);
    }
    else if(calcType == "+"){
        n = n + convert(nDisplay);
    }
    else if(calcType == "-"){
        n = n - convert(nDisplay);
    }
    else if(calcType == "*"){
        n = n * convert(nDisplay);
    }
    else if(calcType == "/"){
        n = n / convert(nDisplay);
    }
    nDisplay = n.toString();
    nDisplay = nDisplay.replace(".", ",");
    manageDisplay(nDisplay);
    n = 0;
    acceptInput = false;
}

function comma() {
    nDisplay = nDisplay + ",";
    manageDisplay(nDisplay);
}

function convert(i) {
    i = i.replace(",", ".");
    return(parseFloat(i));
}

function manageDisplay(d) {
    if(d.length >= 37){
        for (let i = 36; i < d.length;) {
            d = d.slice(0, -1);
        }
    }
    else if(d.length >= 15){
        document.getElementById("input").style.fontSize = "20px";
    }
    else if(d.length >= 9){
        document.getElementById("input").style.fontSize = "50px";
    }
    else{
        document.getElementById("input").style.fontSize = "90px";
    }
    nDisplay = d;
    document.getElementById("input").innerHTML = nDisplay;
}