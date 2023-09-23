const signupPage = document.getElementById("signup-page");
const profilePage = document.getElementById("profile-page");
const continueButton = document.getElementById("continue-btn");
const errorMessage = document.getElementById("signup-error-message");
const successMessage = document.getElementById("signup-success-message");

const profileName = document.getElementById("profile-name");
const profileEmail = document.getElementById("profile-email");
const profilePassword = document.getElementById("profile-password");

const signupName = document.getElementById("signup-name");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");

const logoutButton = document.getElementById("logout-btn");

// Function to show the profile page and populate user details
function showProfilePage() {
    signupPage.style.display = "none";
    profilePage.style.display = "block";

    const name = signupName.value;
    const email = signupEmail.value;
    const password = signupPassword.value;

    profileName.textContent = name;
    profileEmail.textContent = email;
    profilePassword.textContent = password;
}

// Function to handle form submission and display messages
continueButton.addEventListener("click", function () {
    const name = signupName.value;
    const email = signupEmail.value;
    const password = signupPassword.value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;

    if (!name || !email || !password || !confirmPassword) {
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    } else if (password !== confirmPassword) {
        errorMessage.textContent = "Error: Passwords do not match!";
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    } else {
        // Signup successful
        errorMessage.style.display = "none";
        successMessage.style.display = "block";
        showProfilePage();
    }
});

// Handle logout button
logoutButton.addEventListener("click", function () {
    // Redirect to the signup page
    window.location.href = "index.html";
});




