document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-promo");
    const arrowBtns = document.querySelectorAll(".promo-slider-section i");
    const wrapper = document.querySelector(".promo-slider-section");

    const firstCard = carousel.querySelector(".card-promo");
    const firstCardWidth = firstCard.offsetWidth;

    let isDragging = false,
        startX,
        startScrollLeft,
        timeoutId;

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
        const newScrollLeft = startScrollLeft - (e.pageX - startX);

        if (newScrollLeft <= 0 || newScrollLeft >=
            carousel.scrollWidth - carousel.offsetWidth) {
            isDragging = false;
            return;
        }

        carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    const autoPlay = () => {
        if (window.innerWidth < 800) return;

        const totalCardWidth = carousel.scrollWidth;

        const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

        if (carousel.scrollLeft >= maxScrollLeft) return;

        timeoutId = setTimeout(() =>
            carousel.scrollLeft += firstCardWidth, 2500);
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    wrapper.addEventListener("mouseenter", () =>
        clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left-nav-promo" ?
                -firstCardWidth : firstCardWidth;
        });
    });
});
