window.addEventListener("keydown", (keyInput) => {
    document.getElementById("result").innerHTML = `The key pressed is <span>${keyInput.key}</span>
    Key code:<span>${keyInput.keyCode}</span>`;
});