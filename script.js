var aboutBtn = document.querySelector(".about-btn");
var eduBtn = document.querySelector(".edu-btn");
var skillBtn = document.querySelector(".skill-btn");
var expBtn = document.querySelector(".exp-btn");
var aboutCard = document.querySelector(".about-card");
var eduCard = document.querySelector(".edu-card");
var skillCard = document.querySelector(".skill-card");
var expCard = document.querySelector(".exp-card");
var aboutToggle = 0;
var eduToggle = 0;
var skillToggle = 0;
var expToggle = 0;
aboutBtn.addEventListener("click", function () {
    if (aboutToggle === 0) {
        aboutCard.style.display = "block";
        aboutToggle = 1;
    }
    else {
        aboutCard.style.display = "none";
        aboutToggle = 0;
    }
});
eduBtn.addEventListener("click", function () {
    if (eduToggle === 0) {
        eduCard.style.display = "block";
        eduToggle = 1;
    }
    else {
        eduCard.style.display = "none";
        eduToggle = 0;
    }
});
skillBtn.addEventListener("click", function () {
    if (skillToggle === 0) {
        skillCard.style.display = "block";
        skillToggle = 1;
    }
    else {
        skillCard.style.display = "none";
        skillToggle = 0;
    }
});
expBtn.addEventListener("click", function () {
    if (expToggle === 0) {
        expCard.style.display = "block";
        expToggle = 1;
    }
    else {
        expCard.style.display = "none";
        expToggle = 0;
    }
});
// Get form elements
var form = document.querySelector(".form-container form");
var fullNameInput = document.querySelector("#full-name");
var emailInput = document.querySelector("#email");
var phoneInput = document.querySelector("#phone");
var educationInput = document.querySelector("#education");
var skillsInput = document.querySelector("#skills");
var experienceInput = document.querySelector("#experience");
// Function to validate form data
var validateForm = function () {
    // Simple validation: check if required fields are not empty
    if (!(fullNameInput === null || fullNameInput === void 0 ? void 0 : fullNameInput.value) ||
        !(emailInput === null || emailInput === void 0 ? void 0 : emailInput.value) ||
        !(phoneInput === null || phoneInput === void 0 ? void 0 : phoneInput.value) ||
        !(educationInput === null || educationInput === void 0 ? void 0 : educationInput.value) ||
        !(skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.value) ||
        !(experienceInput === null || experienceInput === void 0 ? void 0 : experienceInput.value)) {
        alert("Please fill out all fields.");
        return false;
    }
    // Optional: You can add more complex validation here (e.g., email format, phone number format)
    return true;
};
// Function to handle form submission
var handleFormSubmit = function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    // Validate form
    if (!validateForm())
        return;
    // Gather form data
    var resumeData = {
        fullName: fullNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        education: educationInput.value,
        skills: skillsInput.value,
        experience: experienceInput.value,
    };
    // Display the resume preview
    displayResumePreview(resumeData);
};
// Function to display the resume preview
var displayResumePreview = function (data) {
    var previewContainer = document.querySelector("#resume-preview");
    if (previewContainer) {
        previewContainer.innerHTML = "\n            <h2>".concat(data.fullName, "'s Resume</h2>\n            <p><strong>Email:</strong> ").concat(data.email, "</p>\n            <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n            <p><strong>Education:</strong> ").concat(data.education, "</p>\n            <p><strong>Skills:</strong> ").concat(data.skills.replace(/\n/g, "<br>"), "</p>\n            <p><strong>Experience:</strong> ").concat(data.experience.replace(/\n/g, "<br>"), "</p>\n        ");
    }
};
// Add event listener for form submission
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleFormSubmit);
