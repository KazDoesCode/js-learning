

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
        return "You need atleast one activated"
    }

    for(let i = 0 ; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedchars.length)
        password += allowedchars[randomIndex]
    }


    return password
}
const passlen = 12;
const includeLowercase = true;
const includeNumbers = true;
const includeUppercase = true;
const includeSymbols = true;

const password = generatepassword(passlen, includeLowercase, includeUppercase, includeSymbols, includeNumbers)

console.log(`Password generated is ${password}`)