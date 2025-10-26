var typed = new Typed(".text", {
    strings: ["Pelajar SMK", "Dari kelas XI TKJ", "Programmer Pemula"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

    // === MENU TITIK TIGA ===
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
        });
    }
