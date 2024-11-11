// Function to show the contact form
function showContactForm() {
    document.getElementById('contactForm').classList.toggle('hidden');
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    // Reset the form
    document.getElementById('contactForm').reset();
}
