document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('scroll-container');
    const scrollRightButton = document.getElementById('scroll-right');
    const scrollLeftButton = document.getElementById('scroll-left');

    let currentScrollPosition = 0;
    const scrollAmount = scrollContainer.clientWidth / 3;
    const itemsToScroll = 3;

    function scrollRight() {
        if (currentScrollPosition < (scrollContainer.scrollWidth - scrollAmount * itemsToScroll)) {
            currentScrollPosition += scrollAmount;
        } else {
            currentScrollPosition = 0;
            scrollContainer.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto'
            });
            setTimeout(() => {
                currentScrollPosition += scrollAmount;
                scrollContainer.scrollTo({
                    top: 0,
                    left: currentScrollPosition,
                    behavior: 'smooth'
                });
            }, 0);
            return;
        }
        scrollContainer.scrollTo({
            top: 0,
            left: currentScrollPosition,
            behavior: 'smooth'
        });
    }

    function scrollLeft() {
        if (currentScrollPosition > 0) {
            currentScrollPosition -= scrollAmount;
        } else {
            currentScrollPosition = scrollContainer.scrollWidth - scrollAmount * itemsToScroll;
            scrollContainer.scrollTo({
                top: 0,
                left: currentScrollPosition,
                behavior: 'auto'
            });
            setTimeout(() => {
                currentScrollPosition -= scrollAmount;
                scrollContainer.scrollTo({
                    top: 0,
                    left: currentScrollPosition,
                    behavior: 'smooth'
                });
            }, 0);
            return;
        }
        scrollContainer.scrollTo({
            top: 0,
            left: currentScrollPosition,
            behavior: 'smooth'
        });
    }

    scrollRightButton.addEventListener('click', scrollRight);
    scrollLeftButton.addEventListener('click', scrollLeft);

    setInterval(scrollRight, 5000); 
});
