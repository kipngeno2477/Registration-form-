// Registration Form Submission
document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    const response = document.getElementById("regResponse");
  
    if (name && email && password.length >= 6) {
      response.textContent = `Thanks for registering, ${name}!`;
      this.reset();
    } else {
      response.textContent = "Please fill all fields correctly.";
      response.style.color = "red";
    }
  });
  
  // Contact Form Submission
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();
    const response = document.getElementById("contactResponse");
  
    if (name && email && message) {
      response.textContent = `Thank you, ${name}, we will get back to you!`;
      this.reset();
    } else {
      response.textContent = "Please complete all contact fields.";
      response.style.color = "red";
    }
  });
  