let targetnum= parseInt(prompt("ENTER THE MAX NUMBER:"));
if(!targetnum){
    targetnum=parseInt(prompt("PLEASE ENTER VALID NUMBER!"));
}
let lottery = Math.floor(Math.random() * targetnum)+1;
console.log(lottery);

let guess = parseInt(prompt("GUESS THE LOTTERY NUMBER"));

while(parseInt(guess)!== lottery) 
//it will keep running if the guess is not equal to lottery but if it equal then code will move to line 22
{
    guess = parseInt(guess);
  if(guess > lottery)
    {
   guess = prompt("TOO HIGH!");
}
else{
   guess = prompt("TOO LOW!");
}

if(guess==='q') break;

}


if(guess ==='q'){
    console.log("PLAYER QUIT THE GAME");
}
else{
console.log("YAY YOU WON!!!");
}