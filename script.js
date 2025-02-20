document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav a'); // Selects all links inside .mobile-nav

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });

    

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobile_menu.classList.remove("is-active"); // Closes the mobile menu
            menu_btn.classList.remove("is-active"); // Resets the hamburger icon
        });
    });
});
function scrollToTop() {
	document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
}

