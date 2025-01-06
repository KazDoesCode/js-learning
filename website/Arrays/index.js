const p = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")
const p4 = document.getElementById("p3")


alphabets = ["A","B","C"]
alphabets[3] = "D"

alphabets.unshift("0") // adds to the start
alphabets.push("E")   //adds to the end 
alphabets.pop()    // removes last element
alphabets.shift()  // removes from the end
alphabets.sort().reverse()  // sort in reverse from last to first
let index = alphabets.indexOf("B")

p.textContent = `${alphabets} and the lenght is ${alphabets.length} and the position of B is ${index}`  //array.length gives la taille de l'array
 // if the index returns value of -1 it means its not found (useful in if conditions)


 for (let i = 0; i < alphabets.length; i++) {
    p2.textContent=alphabets[i];    // in this case the result will be overwrited each time so at the end it will only show the last element
 }

 for (alpha in alphabets) {
    p3.textContent = `P3 is ${alphabets[alpha]}`

 }

 let phrase = "This is a phrase"
 let letters = [...phrase]      /// the ... is like extracting a winrar it's gives each element out
 letters = letters.join("-")   // this will join caracters to each other and use the "-" between them
 // if unpacking used on an array, it will simply give out each element
 //p4.textContent = letters

 let First_names = ["John","Ronaldo","Bale"]
 let Last_names = ["Johness","Cristiano"]
let full_name = [...First_names,...Last_names]
 p4.textContent = full_name.join("--")

 function combineStrings(...strings){     // REST parametres to be used on functions to add elements to the array
   return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);