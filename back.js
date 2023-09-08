var h3 = document.querySelector("h3");

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right, "+ color1.value + ", " +color2.value + ")";
    h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

color1.addEventListener("input", setGradient());
color1.addEventListener("input", setGradient());

var button = document.createElement("button");
button.appendChild(document.createTextNode("Select Random Color"));
body.appendChild(button);

button.addEventListener("click", getRandomColor);

function randomColor() {
    var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ','
     + (Math.floor(Math.random() * 256)) +')';
    return color;
}

function getRandomColor() {
    var rndcolor1 = randomColor();
    var rndcolor2 = randomColor();

    body.style.background = "linear-gradient(to right, "+ rndcolor1 +", "+ rndcolor2 +")";
    h3.textContent = body.style.background +";";
}