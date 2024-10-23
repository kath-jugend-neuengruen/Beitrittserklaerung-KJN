// Einfaches JavaScript zur Validierung des Kontaktformulars
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Verhindert das normale Absenden

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Vielen Dank für Ihre Nachricht, ' + name + '! Wir melden uns bald bei Ihnen.');
    } else {
        alert('Bitte füllen Sie alle Felder aus.');
    }
});
