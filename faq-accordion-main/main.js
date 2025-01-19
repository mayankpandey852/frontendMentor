// Get all FAQ items and their corresponding icons
let faqItems = document.querySelectorAll('.faq');

// Handle the initial state
faqItems.forEach((item, index) => {
    const content = item.children[1];
    const iconImg = item.children[0].querySelector('.icon img');
    
    if (index === 0) { // For the first FAQ item
        content.classList.add('active'); // Ensure it starts active
        iconImg.setAttribute('src', "./assets/images/icon-minus.svg"); // Set to 'minus'
    } else {
        content.classList.remove('active'); // Ensure others are inactive
        iconImg.setAttribute('src', "./assets/images/icon-plus.svg"); // Set to 'plus'
    }
});

// Add click event listeners for toggling
faqItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Check if the clicked item's content is already active
        const isActive = item.children[1].classList.contains('active');

        // Reset all items: remove 'active' and reset the icon to 'plus'
        faqItems.forEach((faq) => {
            faq.children[1].classList.remove('active');
            faq.children[0].querySelector('.icon img').setAttribute('src', "./assets/images/icon-plus.svg");
        });

        // If the clicked item wasn't active, activate it and set the icon to 'minus'
        if (!isActive) {
            item.children[1].classList.add('active');
            item.children[0].querySelector('.icon img').setAttribute('src', "./assets/images/icon-minus.svg");
        }
    });
});
