var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var path1 = "images/dice" + randomNumber1 + ".png";
var path2 = "images/dice" + randomNumber2 + ".png";


document.querySelector(".dice .img1").setAttribute("src", path1);
document.querySelector(".dice .img2").setAttribute("src", path2);


console.log(randomNumber1);
console.log(randomNumber2);

if(randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML = "Player 1 wins!"
}

else if(randomNumber1 < randomNumber2){

    document.querySelector("h1").innerHTML = "Player 2 wins!"
}

else{

    document.querySelector("h1").innerHTML = "Draw!"
}