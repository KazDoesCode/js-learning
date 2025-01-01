
const myP = document.getElementById("myP");
const input = document.getElementById("input");
const but = document.getElementById("but");

let user;


but.onclick = function(){
    user = input.value;
    if (user === "") {
        console.log("You need to enter a username");
        myP.textContent = "You need to enter a username";
    }
    else {
         console.log(`Welcome ${user}`);
         myP.textContent = `Welcome ${user}`;
    }
}

// lesson learned : `` is to be used when we want to use the ${variable}
// check the event
// Always use curly braces {} for if and else blocks if they have more than one statement.

