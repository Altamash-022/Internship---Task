
// Welcome Message


console.log("Welcome to My Personal Introduction Website!");


// Select Elements


const themeButton = document.getElementById("themeButton");

const message = document.getElementById("message");

const characterCount = document.getElementById("characterCount");

const contactForm = document.querySelector("form");


// Dark Mode

if (themeButton) {
    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "Light Mode";
        } else {
            themeButton.textContent = "Dark Mode";
        }

    });
}

// Character Counter

if (message && characterCount) {

    message.addEventListener("input", function () {

        let totalCharacters = message.value.length;

        characterCount.textContent = "Characters: " + totalCharacters;

    });

}


// Form Validation


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    try {

        alert("Your message has been submitted successfully!");

        contactForm.reset();

        characterCount.textContent = "Characters: 0";

    } catch (error) {

        console.error("Operation failed:", error);

        alert("Something went wrong.");

    }

});