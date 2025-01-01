// IF STATEMENTS = if a condition is true, execute some code
//                                   if not, do something else

const myText = document.getElementById("input");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Math.round(Number(age)); 
    
    if(age >= 65){
        resultElement.textContent = `Senior ticket 15$`;
    }
    else if(age >= 0 && age <= 5){
        resultElement.textContent = `Free entry for kids under 6.`
    }
    else if(age >= 6 && age <= 17){
        resultElement.textContent = `Child ticket: $10.`
    }
    else if(age >= 18 && age <= 64){
        resultElement.textContent = `Adult ticket: $20.`
    }

    else{
        resultElement.textContent = `Your age can't be negative`;
    }
}

//Use of Number() to Convert Input: Ensuring the input is treated as a number is good practice.
