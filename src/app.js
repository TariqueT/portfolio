/* Function to send email to my email address in the contact form */
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "tariqueportfolio@gmail.com",
    Password: "5D2E4EB25614B73EA6FFE6C5E4557DDF7696",
    From: "tariqueportfolio@gmail.com",
    To: "tariqueportfolio@gmail.com",
    ReplyFrom: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone: " +
      document.getElementById("message").value,
  }).then((message) => alert(message));
}

/* Function to show and hide menu list */
const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
}

/*Attach toggleButton function to the button event listener  */
hamburgerButton.addEventListener("click", toggleButton);
