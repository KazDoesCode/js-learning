

function generatepassword(length, includeLowercase, includeUppercase, includeSymbols, includeNumbers)
{
    
    const LowerCase = "abcdefghijklmnopqrstuvwxyz"
    const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    let allowedchars = ""
    let password = ""

    allowedchars += includeLowercase ? LowerCase : ""
    allowedchars += includeNumbers ? numberChars : ""
    allowedchars += includeSymbols ? specialChars : ""
    allowedchars += includeUppercase ? UpperCase : ""

    if (length <= 0 ) { return "Password must be atleast one character !"   }
    
    if (allowedchars.length === 0 ) {
        return console.log("You need atleast one activated")
    }

    for(let i = 0 ; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedchars.length)
        password += allowedchars[randomIndex]
    }


    return password
}

document.getElementById("PassGen").addEventListener("click", () => {

        const passlen = document.getElementById("len-input").value;

        const includeLowercase = document.getElementById("Lowercase").checked;
        const includeNumbers = document.getElementById("numbers").checked;
        const includeUppercase = document.getElementById("Uppercase").checked;
        const includeSymbols = document.getElementById("symbols").checked;


        const password = generatepassword(passlen, includeLowercase, includeUppercase, includeSymbols, includeNumbers)

        console.log(`Password generated is ${password}`)

        document.getElementById("resultElement").textContent = password

})
