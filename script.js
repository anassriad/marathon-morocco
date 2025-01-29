// Initialize EmailJS with your User ID (found in EmailJS dashboard)
(function() {
  emailjs.init("user_YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

// Function to send email
function sendEmail(to_name, from_name, message) {
  const templateParams = {
    to_name: to_name,
    from_name: from_name,
    message: message
  };

  emailjs.send("service_e40nti5", "template_f34h149", templateParams)
    .then((response) => {
      console.log("Email sent successfully:", response);
    })
    .catch((error) => {
      console.log("Error sending email:", error);
    });
}

// Function to check when the marathon checkbox is clicked
function checkMarathon(marathonId) {
  const marathons = {
    1: 'Fez Spiritual Marathon',
    2: 'Marathon International de Rabat',
    3: 'Marathon International de Casablanca',
    4: 'Marathon des Sables',
    5: 'Marathon de Marrakech'
  };
  
  const marathonName = marathons[marathonId];
  const userName = prompt("Enter your name:");
  const message = `Hi ${userName},\n\nThe ${marathonName} is approaching! Please check your preparation and training.`;

  sendEmail(userName, marathonName, message);
}
