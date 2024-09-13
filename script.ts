const aboutBtn:any = document.querySelector(".about-btn")
const eduBtn:any = document.querySelector(".edu-btn")
const skillBtn:any = document.querySelector(".skill-btn")
const expBtn:any = document.querySelector(".exp-btn")

const aboutCard:any = document.querySelector(".about-card")
const eduCard:any = document.querySelector(".edu-card")
const skillCard:any = document.querySelector(".skill-card")
const expCard:any = document.querySelector(".exp-card")

let aboutToggle = 0;
let eduToggle = 0;
let skillToggle = 0;
let expToggle = 0;

aboutBtn.addEventListener("click", ()=>{
    if(aboutToggle === 0){
        aboutCard.style.display = "block"
        aboutToggle = 1
    }
    else{
        aboutCard.style.display = "none"
        aboutToggle = 0
    }
})

eduBtn.addEventListener("click", ()=>{
    if(eduToggle === 0){
        eduCard.style.display = "block"
        eduToggle = 1
    }
    else{
        eduCard.style.display = "none"
        eduToggle = 0
    }
})

skillBtn.addEventListener("click", ()=>{
    if(skillToggle === 0){
        skillCard.style.display = "block"
        skillToggle = 1
    }
    else{
        skillCard.style.display = "none"
        skillToggle = 0
    }
})

expBtn.addEventListener("click", ()=>{
    if(expToggle === 0){
        expCard.style.display = "block"
        expToggle = 1
    }
    else{
        expCard.style.display = "none"
        expToggle = 0
    }
})

// Get form elements
const form = document.querySelector<HTMLFormElement>(".form-container form");
const fullNameInput = document.querySelector<HTMLInputElement>("#full-name");
const emailInput = document.querySelector<HTMLInputElement>("#email");
const phoneInput = document.querySelector<HTMLInputElement>("#phone");
const educationInput = document.querySelector<HTMLInputElement>("#education");
const skillsInput = document.querySelector<HTMLTextAreaElement>("#skills");
const experienceInput = document.querySelector<HTMLTextAreaElement>("#experience");

// Create an interface for Resume data
interface ResumeData {
    fullName: string;
    email: string;
    phone: string;
    education: string;
    skills: string;
    experience: string;
}

// Function to validate form data
const validateForm = (): boolean => {
    // Simple validation: check if required fields are not empty
    if (
        !fullNameInput?.value ||
        !emailInput?.value ||
        !phoneInput?.value ||
        !educationInput?.value ||
        !skillsInput?.value ||
        !experienceInput?.value
    ) {
        alert("Please fill out all fields.");
        return false;
    }

    // Optional: You can add more complex validation here (e.g., email format, phone number format)
    return true;
};

// Function to handle form submission
const handleFormSubmit = (event: Event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Validate form
    if (!validateForm()) return;

    // Gather form data
    const resumeData: ResumeData = {
        fullName: fullNameInput!.value,
        email: emailInput!.value,
        phone: phoneInput!.value,
        education: educationInput!.value,
        skills: skillsInput!.value,
        experience: experienceInput!.value,
    };

    // Display the resume preview
    displayResumePreview(resumeData);
};

// Function to display the resume preview
const displayResumePreview = (data: ResumeData) => {
    const previewContainer = document.querySelector<HTMLDivElement>("#resume-preview");

    if (previewContainer) {
        previewContainer.innerHTML = `
            <h2>${data.fullName}'s Resume</h2>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Education:</strong> ${data.education}</p>
            <p><strong>Skills:</strong> ${data.skills.replace(/\n/g, "<br>")}</p>
            <p><strong>Experience:</strong> ${data.experience.replace(/\n/g, "<br>")}</p>
        `;
    }
};

// Add event listener for form submission
form?.addEventListener("submit", handleFormSubmit);
