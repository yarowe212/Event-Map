
function showCard(cardType) {
    const cardImage = document.getElementById('card-image');
    if (cardType === 'checkin') {
        cardImage.src = 'Check In.png';
    } else if (cardType === 'velocity') {
        cardImage.src = 'Velocity Booth.png';
    } else if (cardType === 'future') {
        cardImage.src = 'Future Cities Card.png';
    }
}
