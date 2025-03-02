const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");

const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");

nameInput.addEventListener('input', function () {
    nameDisplay.textContent = this.value || "Not provided";
})
jobInput.addEventListener('input', function () {
    jobDisplay.textContent = this.value || "Not provided";
})
ageInput.addEventListener('input', function () {
    ageDisplay.textContent = this.value || "Not provided";
})
bioInput.addEventListener('input', function () {
    bioDisplay.textContent = this.value || "Not provided";
})

/**
 * Regular Function (function() {})	this refers to the input element (nameInput)	✅ Works	Use this.value
Arrow Function (() => {})	this refers to the outer scope (window)	❌ Fails	Use event.target.value
 * 
 */

