document.getElementById("button-1").onclick = () => {
    let topPos = Math.floor(Math.random() * 50);
    let leftPos = Math.floor(Math.random() * 50);  
    const leftMove = leftPos + "%";
    const topMove = topPos + "%";

    setTimeout(() => {
        document.getElementById("options").style.left = topMove;
        document.getElementById("options").style.top = topMove;
        
        document.getElementById("position-text").innerHTML = "Position: " + topMove + ", " + leftMove;
    }, 100);
}

document.getElementById("button-2").onclick = () => {
    let scaleValue = Math.floor(Math.random() * 200);

    if (scaleValue < 45) {
        scaleValue = Math.round(scaleValue * 2.5);
    }

    const scaleMove = scaleValue + "%";

    setTimeout(() => {
        document.getElementById("options").style.scale = scaleMove;

        document.getElementById("scale-text").innerHTML = "Scale: " + scaleMove;
    }, 100);
}

document.getElementById("reset-button").onclick = () => {
    resetImage();

    document.getElementById("position-text").innerHTML = "Position: Default";
    document.getElementById("scale-text").innerHTML = "Scale: Default";
}

function resetImage() {
    setTimeout(() => {
        document.getElementById("options").style.top = 25 + "%";
        document.getElementById("options").style.left = 33 + "%";
        document.getElementById("options").style.scale = 100 + "%";
    }, 100);
}

document.getElementById("background-button").onclick = () => {
    const link = prompt("Put in a URL for a background image.");

    console.log(link);

    setTimeout(() => {
        document.getElementById("background").style.backgroundImage = `url('${link}')`;
    }, 100)
}