let finalColor = document.querySelector("h3"),
    color1 = document.querySelector(".color1"), 
    color2 = document.querySelector(".color2"),
    body = document.getElementById("linearGradient"),
    button = document.querySelector("button");

// console.log(css, color1, color2, body);

function setBackground() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    finalColor.textContent = body.style.background + ";";
}

function randomColor() {
    return Math.floor(Math.random() * 256) 
}

function setRandomBackground() {
    let randomColor1 = 'rgb(' + randomColor() + "," + randomColor() + "," + randomColor() + ')';
    let randomColor2 = 'rgb(' + randomColor() + "," + randomColor() + "," + randomColor() + ')';
    body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
    finalColor.textContent = body.style.background + ";";
}

color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);
button.addEventListener("click", setRandomBackground);