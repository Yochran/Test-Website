// Variables \\
var infoLoaded = false;
var contentLoaded = false;
var currentTheme = "LIGHT";

// Events \\
document.onreadystatechange = () => { loadInfo(infoLoaded, contentLoaded); }
document.getElementById("info-button").onclick = () => { openAlert("I made this at school because I was bored and wanted to waste some time.") }
document.getElementById("load-content").onclick = () => { loadContent(contentLoaded, infoLoaded); }
document.getElementById("load-info").onclick = () => { loadInfo(infoLoaded, contentLoaded); }
document.getElementById("theme-button").onclick = () => { switchTheme(); }

// Utility \\
function logMessage(content) {
    const time = getTime();
    console.log(`(${time}) ${content}`)
}

function openAlert(content) {
    try {
        alert(content);
        logMessage("Alert opened successfully.");
    } catch (err) {
        logMessage(`Couldn't open alert. (${err})`);
    }
}

function getTime() {
    const date = new Date();

    const hour = date.getHours();
    const minute = date.getMinutes();

    const time = `${hour}:${minute}`;

    return time;
}

// Functions \\
function loadInfo() {
    const websiteInfo = document.getElementById("info-box");
    const websiteContent = document.getElementById("content-box");

    const loadingText = document.getElementById("loading-text");

    setTimeout(() => {
        loadingText.style.opacity = "0%";
    }, 250);

    websiteContent.style.left = "-125%";
    contentLoaded = false;

    setTimeout(() => {
        websiteInfo.style.left = "40%";
        infoLoaded = true;
    }, 500);
}

function loadContent() {
    const websiteContent = document.getElementById("content-box");
    const websiteInfo = document.getElementById("info");

    websiteInfo.style.left = "125%";
    infoLoaded = false;

    setTimeout(() => {
        websiteContent.style.left = "40%";
        contentLoaded = true;
    }, 500);
}

function switchTheme() {
    const themeButton = document.getElementById("theme-button");
    const loadInfoButton = document.getElementById("load-info");
    const loadcontentButton = document.getElementById("load-content");
    const infoButton = document.getElementById("info-button");

    const bodyStyle = document.body.style;
    if (currentTheme === "LIGHT") {
        currentTheme = "DARK";

        bodyStyle.backgroundColor = "#222222";
        bodyStyle.color = "#ffffff";

        themeButton.style.color = "#ffffff";
        themeButton.style.border = "2px solid #ffffff";
        loadInfoButton.style.color = "#ffffff";
        loadInfoButton.style.border = "2px solid #ffffff";
        loadcontentButton.style.color = "#ffffff";
        loadcontentButton.style.border = "2px solid #ffffff";
        infoButton.style.color = "#ffffff";
        infoButton.style.border = "2px solid #ffffff";

        themeButton.innerHTML = "Click to enable light theme.";
    } else {
        currentTheme = "LIGHT";

        bodyStyle.backgroundColor = "#ffffff";
        bodyStyle.color = "#000000";

        themeButton.style.color = "#000000";
        themeButton.style.border = "2px solid #000000";
        loadInfoButton.style.color = "#000000";
        loadInfoButton.style.border = "2px solid #000000";
        loadcontentButton.style.color = "#000000";
        loadcontentButton.style.border = "2px solid #000000";
        infoButton.style.color = "#000000";
        infoButton.style.border = "2px solid #000000";

        themeButton.innerHTML = "Click to enable dark theme.";
    }
}
