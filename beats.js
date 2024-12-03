document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const beatCards = document.querySelectorAll('.beat-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const genre = button.getAttribute('data-genre');
            
            beatCards.forEach(card => {
                if (genre === 'all' || card.getAttribute('data-genre') === genre) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Play button functionality
    const playButtons = document.querySelectorAll('.play-btn');
    let currentlyPlaying = null;

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const icon = button.querySelector('i');
            
            if (currentlyPlaying && currentlyPlaying !== button) {
                // Stop other playing beats
                currentlyPlaying.querySelector('i').classList.replace('fa-pause', 'fa-play');
            }

            if (icon.classList.contains('fa-play')) {
                icon.classList.replace('fa-play', 'fa-pause');
                currentlyPlaying = button;
                // Add actual audio playing functionality here
            } else {
                icon.classList.replace('fa-pause', 'fa-play');
                currentlyPlaying = null;
                // Add actual audio pause functionality here
            }
        });
    });

    // Purchase button functionality
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.beat-card');
            const beatName = card.querySelector('h3').textContent;
            const licenseSelect = card.querySelector('select');
            const selectedLicense = licenseSelect.options[licenseSelect.selectedIndex].text;
            
            // Here you would typically integrate with a payment processor
            alert(`Processing purchase for "${beatName}" with ${selectedLicense}`);
        });
    });
});
