document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, document.querySelector('.anfang').offsetTop);
});

let sections = Array.from(document.querySelectorAll('section'));
let currentSectionIndex = 0;
let isScrolling = false;

window.addEventListener('wheel', function(e) {
    e.preventDefault();

    if (isScrolling) return;
    isScrolling = true;

    setTimeout(function() {
        isScrolling = false;
    }, 1000);

    let currentSection = sections[currentSectionIndex];
    let nextSection = sections[currentSectionIndex + 1];
    let prevSection = sections[currentSectionIndex - 1];

    if (e.deltaY > 0) {
        // Scrolling down
        if (nextSection) {
            currentSectionIndex++;
            let scrollDestination = nextSection.offsetTop - window.innerHeight + nextSection.offsetHeight;
            window.scroll({ top: scrollDestination, behavior: 'smooth' });
        }
    } else {
        // Scrolling up
        if (prevSection && window.scrollY > prevSection.offsetTop + prevSection.offsetHeight) {
            currentSectionIndex--;
            let scrollDestination = prevSection.offsetTop;
            window.scroll({ top: scrollDestination, behavior: 'smooth' });
        } else if (currentSectionIndex > 0) {
            currentSectionIndex--;
            sections[currentSectionIndex].scrollIntoView({behavior: "smooth"});
        }
    }
}, { passive: false });

