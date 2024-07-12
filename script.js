// Example JavaScript for form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Example: Send form data to a server using fetch API
    const formData = new FormData(this);
    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        this.reset(); // Reset form fields after successful submission
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an issue sending your message. Please try again later.');
    });
});

