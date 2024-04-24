const colorsHex = ["0", "1", "2", "3", "4", "5", "6", "7" , "8", "9", "A", "B", "C", "D" , "E", "F"];

const btn = document.getElementById("btn");
const bg = document.querySelector(".bg");
const color = document.querySelector(".color");

btn.addEventListener("click" , function(){
    let hashtag = "#";
    for (let i = 0; i < 6; i++) {
        hashtag += colorsHex[hexRandom()];
        document.body.style.background = hashtag;
        color.textContent = hashtag;
        color.style.color = hashtag;
        bg.style.color = hashtag;
    }
});

function hexRandom(){
    return Math.floor(Math.random() * colorsHex.length);
}