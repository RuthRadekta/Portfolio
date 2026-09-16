document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link-custom");

    // 1. Logika Navigasi Aktif saat Scrolling
    window.addEventListener("scroll", function () {
        let current = "";
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    // 2. Logika Efek Gradasi (Spotlight) Mengikuti Kursor
    document.addEventListener("mousemove", function (e) {
        // Mengambil koordinat X dan Y dari pergerakan mouse
        const x = e.clientX;
        const y = e.clientY;
        
        // Mengatur properti CSS root dengan koordinat tersebut
        document.documentElement.style.setProperty('--mouse-x', `${x}px`);
        document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    });
});
