const body = document.getElementById("body");
const bulb = document.getElementById("bulb");
const button = document.getElementById("toggleButton");
const statusText = document.getElementById("status");

button.addEventListener('click', () => {
    if (bulb.classList.contains('off')) {
        bulb.classList.remove('off');
        body.style.backgroundColor = "#2b2b2b";
        body.style.color = "#fff";
        button.innerText = "Turn Off";
        statusText.innerText = "Status: On";
    } else {
        bulb.classList.add('off');
        body.style.backgroundColor = null;
        body.style.color = "#000";
        button.innerText = "Turn On";
        statusText.innerText = "Status: Off";
    }
})