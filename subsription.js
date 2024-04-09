
function handleSubscription(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();


    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }
    saveSubscription(email);
    alert('Thank you for subscribing!');
}

function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}


function saveSubscription(email) {
    let subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
    subscribedEmails.push(email);
    localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
}

document.getElementById('newsletterForm').addEventListener('submit', handleSubscription);


