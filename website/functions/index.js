function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function division(a,b) {
    return a / b;
}

function mult(a,b) {
    return a * b;
}

function isEven(a) {
    if(a % 2 === 0) {
        return true;
    }

    else return false;
}

function email(a) {
    if(a.includes("@")){
        return true
    }
    else return false
}


const input = document.getElementById("input1");
const but = document.getElementById("but1")
const res = document.getElementById("p1")
let number

but.onclick = function() {
    
    number = input.value;
    number = Number(number)  
    isEven(number)
    res.textContent = `The number ${number} is even? ==> ${isEven(number)} ` 
    
}

const input2 = document.getElementById("input2")
const but2 = document.getElementById("but2")
const res2 = document.getElementById("p2")
let mail

but2.onclick = function() {
    mail = input2.value
    email(mail)
    res2.textContent = `The mail you entered was valid ? ==> ${email(mail)}` 
}


