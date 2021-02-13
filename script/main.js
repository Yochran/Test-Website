document.getElementById("button-1").onclick = () => {
    let topPos = Math.floor(Math.random() * 50);
    let leftPos = Math.floor(Math.random() * 50);  
    const leftMove = leftPos + "%";
    const topMove = topPos + "%";

    setTimeout(() => {
        document.getElementById("image").style.left = topMove;
        document.getElementById("image").style.top = topMove;
        
        document.getElementById("position-text").innerHTML = "Image Position: " + topMove + ", " + leftMove;
    }, 100);
}

document.getElementById("button-2").onclick = () => {
    let scaleValue = Math.floor(Math.random() * 150);
    const scaleMove = scaleValue + "%";

    setTimeout(() => {
        document.getElementById("image").style.scale = scaleMove;

        document.getElementById("scale-text").innerHTML = "Image Scale: " + scaleMove;
    }, 100);
}

document.getElementById("reset-button").onclick = () => {
    resetImage();

    document.getElementById("position-text").innerHTML = "Image Position: Default";
    document.getElementById("scale-text").innerHTML = "Image Scale: Default";
}

function resetImage() {
    setTimeout(() => {
        document.getElementById("image").style.top = 35 + "%";
        document.getElementById("image").style.left = 31 + "%";
        document.getElementById("image").style.scale = 50 + "%";
    }, 100);
}

document.getElementById("background-button").onclick = () => {
    const link = prompt("Put in a URL for a background image.");

    console.log(link);

    setTimeout(() => {
        document.getElementById("background").style.backgroundImage = `url('${link}')`;
    }, 100)
}