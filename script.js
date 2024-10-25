document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = document.getElementById('amount').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message');
    
    message.textContent = `Gracias, ${name}, por tu donación de $${amount}!`;
    message.style.color = 'green';
    
    // Limpiar el formulario
    document.getElementById('donationForm').reset();
});
