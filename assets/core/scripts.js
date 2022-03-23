/**
 * LinguistPro
 * script.js
 * corew
 */

// Scrolling | Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
window.addEventListener('DOMContentLoaded', function () {
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#navMenu');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#navMenu',
            offset: 74,
        });
    }
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

