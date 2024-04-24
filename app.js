const colors = ["yellow", "orange", "gray", "purple"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const bg = document.querySelector(".bg");


btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
    bg.style.color = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}