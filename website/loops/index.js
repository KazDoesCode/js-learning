const p1 = document.getElementById("p1");
const input1 = document.getElementById("input1");
const but1 = document.getElementById("but1");

let user1;


but1.onclick = function() {
    user1 = input1.value;

    while(user1 === "" || user1 === null){          // null added cuz when we click on cancel on window prompt it prints Welcome null
        p1.textContent="Please enter a username";
        user1 = window.prompt("Enter something a si khouna");
    }
p1.textContent=`Welcome to the party ${user1}`;   
}

// This part is asking for my loggings in order for me to access the page using the while loop
/*
let logged = false;
let username;
let password;

while(!logged){
    username = window.prompt(`enter username`);
    password = window.prompt(`enter password`);
    if(username === "zak" && password === "0000") {
        window.alert(`Welcome ${username} to the hood`)
        logged = true;
    }
    else window.alert(`Wrong !`);
}
*/



// This part is asking for my loggings in order for me to access the page using the do while loop

let logged = false;
let username;
let password;

do{
    username = window.prompt(`enter username`);
    password = window.prompt(`enter password`);
    if(username === "zak" && password === "0000") {
        window.alert(`Welcome ${username} to the hood`)
        logged = true;
    }
    else window.alert(`Wrong !`);
} while(!logged);