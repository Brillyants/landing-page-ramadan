const cards = document.querySelectorAll('.how-to-join-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('selected'));

        card.classList.add('selected');
    });
});

cards.forEach(card => {
    card.addEventListener('click', () => {
        const stepId = card.id;

        const allContents = document.querySelectorAll('.step-content');
        allContents.forEach(content => {
            content.style.display = 'none';
        });

        const contentToShow = document.getElementById('content-' + stepId);
        if (contentToShow) {
            contentToShow.style.display = 'block';
        }
    });
});
