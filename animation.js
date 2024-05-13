document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, document.querySelector('.anfang').offsetTop);
  });
  
  let sections = Array.from(document.querySelectorAll('section'));
  let currentSectionIndex = 0;
  
  window.addEventListener('wheel', function(e) {
    e.preventDefault();
  
    // Throttle scrolling events to prevent excessive computations
    if (isScrolling) return;
    isScrolling = true;
  
    setTimeout(function() {
      isScrolling = false;
    }, 1000); // Consider adjusting throttle delay based on performance
  
    let currentSection = sections[currentSectionIndex];
    let nextSection = sections[currentSectionIndex + 1];
    let prevSection = sections[currentSectionIndex - 1];
  
    const scrollBehavior = 'smooth'; // Consistent scroll behavior for readability
  
    if (e.deltaY > 0) {
      // Scrolling down
      if (nextSection) {
        currentSectionIndex++;
        const scrollDestination = nextSection.offsetTop - window.innerHeight + nextSection.offsetHeight;
        window.scroll({ top: scrollDestination, behavior: scrollBehavior });
      }
    } else {
      // Scrolling up
      if (prevSection && window.scrollY > prevSection.offsetTop + prevSection.offsetHeight) {
        currentSectionIndex--;
        const scrollDestination = prevSection.offsetTop;
        window.scroll({ top: scrollDestination, behavior: scrollBehavior });
      } else if (currentSectionIndex > 0) {
        currentSectionIndex--;
        sections[currentSectionIndex].scrollIntoView({ behavior: scrollBehavior });
      }
    }
  });
  