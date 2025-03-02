const mainHeading = document.getElementById("mainHeading");

const redBtn = document.getElementById("redButton");
const greenBtn = document.getElementById("greenButton");
const blueBtn = document.getElementById("blueButton");
const purpleBtn = document.getElementById("purpleButton");
const resetBtn = document.getElementById("resetButton");

redBtn.addEventListener('click', () => {
    mainHeading.style.color = window.getComputedStyle(redBtn).backgroundColor;
});

greenBtn.addEventListener('click', () => {
    mainHeading.style.color = window.getComputedStyle(greenBtn).backgroundColor;
});

blueBtn.addEventListener('click', () => {
    mainHeading.style.color = window.getComputedStyle(blueBtn).backgroundColor;
});

purpleBtn.addEventListener('click', () => {
    mainHeading.style.color = window.getComputedStyle(purpleBtn).backgroundColor;
});

resetBtn.addEventListener('click', () => {
    mainHeading.style.color = null;
})
