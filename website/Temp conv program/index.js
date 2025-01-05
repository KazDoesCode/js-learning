const input1 = document.getElementById("input1")
const toF = document.getElementById("toF")
const toC = document.getElementById("toC")
const but1 = document.getElementById("but1")
const result = document.getElementById("p1")

// Optimisation can only check one box
let temp; // the number we get from the input is gonna get stored in temp to be used in convert() function

function convert(){
    if (toF.checked) {
       temp = Number(textContent.value)
       temp = temp * 9 / 5 + 32
       result.textContent = temp.toFixed(1) + "°F" 
    }

    else if (toC.checked) {
        temp = Number(textContent.value)
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
        
    }
    
    else {

        result.textContent = "Please select a unit"
        
    }
}