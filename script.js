// Check if the name and email are already saved in localStorage
if (!localStorage.getItem("userName") || !localStorage.getItem("userEmail")) {
    // If not, ask for the name and email
    let userName = prompt("Enter your name:");
    let userEmail = prompt("Enter your email address:");

    // Save the name and email to localStorage
    if (userName && userEmail) {
        localStorage.setItem("userName", userName);
        localStorage.setItem("userEmail", userEmail);
    } else {
        alert("Please provide both your name and email.");
    }
} else {
    // Retrieve the saved name and email from localStorage
    var userName = localStorage.getItem("userName");
    var userEmail = localStorage.getItem("userEmail");
}

// Retrieve the saved checkbox states from localStorage
document.querySelectorAll('.checkbox').forEach(function(checkbox, index) {
    // Set the checkbox state based on localStorage
    if (localStorage.getItem('checkboxState_' + index) === 'true') {
        checkbox.checked = true;
    }

    // Save the checkbox state when it's clicked
    checkbox.addEventListener('click', function() {
        localStorage.setItem('checkboxState_' + index, checkbox.checked);
    });
});

// Function to send email when checkbox is clicked
document.querySelectorAll('.checkbox').forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        let marathonName = this.parentElement.querySelector('strong').textContent;
        let marathonDate = this.parentElement.querySelector('p').textContent;

        // Send email using EmailJS
        emailjs.send("gmail", "template_f34h149", {
            to_name: userName,
            from_name: "Marathon Morocco",
            message: `You have a marathon coming up: ${marathonName}. Date: ${marathonDate}`,
            to_email: userEmail
        })
        .then(function(response) {
            alert("Email sent successfully!");
        }, function(error) {
            alert("Failed to send email: " + error.text);
        });
    });
});
