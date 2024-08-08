let ratingButtons = document.querySelectorAll(".scoreBtn");
let valElement = document.querySelector("#val");
let ratingCard = document.querySelector("#rating-card");
let successMsg = document.querySelector("#success-msg");
let submit = document.querySelector("#submit");
let error = document.getElementById("error");

let selectedRating = null;

// Set up event listeners for the rating buttons
ratingButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        selectedRating = e.target.textContent;
        valElement.textContent = selectedRating;
        error.style.display = "none"; // Hide the error message when a rating is selected
    });
});

// Handle outside clicks to reset selection
document.addEventListener("click", (e) => {
    if (!e.target.closest(".scoreBtn") && !e.target.closest("#submit")) {
        selectedRating = null;
          }
});

submit.addEventListener("click", () => {
    if (selectedRating === null) {
        error.textContent = "Please put a valid rating";
        error.style.display = "block"; // Show the error message if no rating is selected
    } else {
        ratingCard.style.display = "none";
        successMsg.style.display = "flex";
    }
});
