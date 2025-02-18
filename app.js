function darkMode() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Check for saved dark mode preference when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var splash = document.getElementById('splash');
    var preloader = document.getElementById('preloader');

    if (splash) {
        setTimeout(function() {
            splash.style.display = 'none';
        }, 2500);        
    }

    if (preloader) {
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 1300);
    }
});

window.addEventListener('load', function() {
    setTimeout(function() {
        var preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
        preloader.classList.remove('custom-cursor');
    }, 1300);
});
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var banner = document.querySelector('.banner');
    var containerRect = document.querySelector('.banner-container').getBoundingClientRect();
    
    if (containerRect.top <= window.innerHeight && containerRect.bottom >= 0) {
      var progress = (window.innerHeight - containerRect.top) / window.innerHeight;
      banner.style.left = (progress * window.innerWidth) + 'px';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollingText = document.querySelector('.scrolling-text');
    const nameMoveContainer = document.querySelector('.nameMovecontainer');
  
    function updateTextPosition() {
      const containerRect = nameMoveContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      if (containerRect.top < windowHeight * 0.8 && containerRect.bottom > 0) {
        const progress = (windowHeight * 0.8 - containerRect.top) / (windowHeight * 0.8 + containerRect.height);
        const movement = Math.min(400, Math.max(0, progress * 500));
        scrollingText.style.transform = `translateX(${movement - 140}%)`;
      }
    }
  
    window.addEventListener('scroll', updateTextPosition);
    window.addEventListener('resize', updateTextPosition);
  
    updateTextPosition();
});


document.addEventListener('mousemove', (e) => {
    const movingText = document.querySelector('.moving-text');
    const container = document.querySelector('.blockwords');

    if (!movingText || !container) {
        console.error('Elements not found! Check your classes.');
        return;
    }

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const shadowX = deltaX / 30;
    const shadowY = deltaY / 30;

    movingText.style.textShadow = `${shadowX}px ${shadowY}px 7px rgba(84, 84, 84, 0.7)`;
});

document.addEventListener('mousemove', (e) => {
    const movingText = document.querySelector('.moving-text-header');
    const container = document.querySelector('.pageheader');

    if (!movingText || !container) {
        console.error('Elements not found! Check your classes.');
        return;
    }

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const shadowX = deltaX / 20;
    const shadowY = deltaY / 20;

    movingText.style.textShadow = `${shadowX}px ${shadowY}px 15px rgba(144, 144, 144, 0.7)`;
});

// hover box

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.classList.add('active');
    });
});