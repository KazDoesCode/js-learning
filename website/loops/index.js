// Number guessing tuto with While loop

let min = 1;
let max = 100;


let answer = Math.floor(Math.random() * (max - min + 1)) + min;

console.log("The answer was !",answer);

let attempts = 0;
let guess;
let run = true;
 
while(run) {                // The condition MUST be TRUE in order to be in the while condition 

    guess = window.prompt("Enter your guess");
    guess = Number(guess);                // Very usefull to convert whatever I have into a number !
    console.log(typeof guess, guess);     // Check the type of my variable
    if(guess === answer) {
        console.log("THAT's right !!!!");
        run = false;  // HERE we got the right answer and this is where we wanna exit the loop
    }

    else if (guess != answer) {
        console.log("WRONG ! Repeat");   

    }

    
}



/*
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
/*
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
*/


// for loop while using continue and break

/*
for(let i = 1; i<= 10; i++) {
    if(i==7){
        continue; //here continue will skip number 13 and will only print 1-2-3-4-5-6-8-9-10
        // break; // here break will get us out the loop when it reaches 7, it will print 1-2-3-4-5-6
    
    }
    else console.log(i);
    
}

console.log('GOOOOOO');
*/