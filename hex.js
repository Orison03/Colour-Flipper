const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.querySelector(".btn")
const color = document.querySelector(".color")
const mainHeading = document.getElementById("mainHeading");
const mainSubText = document.getElementById("mainSubText");
const navSubOne = document.querySelector(".navSubOne");
const navSubTwo = document.querySelector(".navSubTwo");
const navTitle = document.getElementById("navTitle");

btn.addEventListener("click", function () {
    let hexColor = "#"
    for (let i =0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
    }
    document.body.style.background = hexColor;
    color.textContent = hexColor
    mainHeading.style.color = hexColor;
    mainSubText.style.color = hexColor
    navSubOne.style.color = hexColor;
    navSubTwo.style.color = hexColor;
    navTitle.style.color = hexColor;   
})

function getRandomNumber () {
    return (
        Math.floor(Math.random() * hex.length)  
    )
}
