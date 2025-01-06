const p = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")

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