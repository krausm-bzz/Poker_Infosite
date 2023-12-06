let currentIndex = 0;
const totalQuotes = document.querySelectorAll('.quote').length;
const quoteContainer = document.getElementById('quote-container');

function updateCarousel(direction) {
    currentIndex = (currentIndex + direction + totalQuotes) % totalQuotes;
    const translateValue = -currentIndex * 100; // Adjust for quote width
    quoteContainer.style.transform = `translateX(${translateValue}px)`;
}