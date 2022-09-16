const colors = [
  "green",
  "red",
  "DarkBlue",
  "Cyan",
  "Blue",
  "LightBlue",
  "Purple",
  "Yellow",
  "Magenta",
  "Silver",
  "Gray or Grey",
  "Black",
  "Orange",
  "Brown",
  "Maroon",
  "Green",
];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
const mainHeading = document.getElementById("mainHeading");
const mainSubText = document.getElementById("mainSubText");
const navSubOne = document.querySelector(".navSubOne")
const navSubTwo = document.querySelector(".navSubTwo")
const navTitle = document.getElementById("navTitle");

btn.addEventListener("click", function () {
    //get random number between 0 - 3
    const randomNumber = getRandomNumber()
    document.body.style.background = colors[randomNumber]
    mainHeading.style.color = colors[randomNumber]
    navSubOne.style.color = colors[randomNumber]
    navSubTwo.style.color = colors[randomNumber]
    navTitle.style.color = colors[randomNumber]
    mainSubText.style.color = colors[randomNumber];
    color.textContent = colors[randomNumber]

})

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}
