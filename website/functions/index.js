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


