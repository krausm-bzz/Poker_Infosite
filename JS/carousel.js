let currentIndex = 0;
const totalQuotes = document.querySelectorAll('.quote').length;
const quoteContainer = document.getElementById('quote-container');

function updateCarousel(direction) {
    currentIndex = (currentIndex + direction + totalQuotes) % totalQuotes;
    const translateValue = -currentIndex * 11.111111111;
    quoteContainer.style.transform = `translateX(${translateValue}%)`;
}