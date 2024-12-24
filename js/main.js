document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('#subheading', {
        duration: 2000,
        origin: 'left',
        distance: '10px',
        easing: 'ease-in-out',
        reset: true // Elemen akan muncul lagi saat di-scroll kembali
    });

    ScrollReveal().reveal('#heading', {
        duration: 2000,
        origin: 'right',
        distance: '10px',
        easing: 'ease-in-out',
        delay: 500,
        reset: true
    });

    ScrollReveal().reveal('#cta', {
        duration: 1500,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-in-out',
        delay: 1000,
        scale: 1.2, // Membesar saat muncul
        reset: true
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Header Animasi
    ScrollReveal().reveal('#services-header', {
        duration: 1500,
        origin: 'top',
        distance: '50px',
        easing: 'ease-in-out',
        reset: true
    });

    // Service 1 Animasi
    ScrollReveal().reveal('#service-1', {
        duration: 2000,
        origin: 'left',
        distance: '10px',
        easing: 'ease-in-out',
        reset: true
    });

    // Service 2 Animasi
    ScrollReveal().reveal('#service-2', {
        duration: 2000,
        origin: 'bottom',
        distance: '100px',
        easing: 'ease-in-out',
        delay: 300,
        reset: true
    });

    // Service 3 Animasi
    ScrollReveal().reveal('#service-3', {
        duration: 2000,
        origin: 'right',
        distance: '10px',
        easing: 'ease-in-out',
        delay: 600,
        reset: true
    });
});

    
    document.addEventListener("DOMContentLoaded", function () {
        ScrollReveal().reveal('#team-heading', {
            duration: 1500,
            origin: 'top',
            distance: '50px',
            easing: 'ease-in-out',
            reset: true
        });
    
        ScrollReveal().reveal('#team-subheading', {
            duration: 1500,
            origin: 'bottom',
            distance: '50px',
            delay: 300,
            easing: 'ease-in-out',
            reset: true
        });
    
        ScrollReveal().reveal('#team-member-1', {
            duration: 2000,
            origin: 'left',
            distance: '10px',
            easing: 'ease-in-out',
            reset: true
        });
    
        ScrollReveal().reveal('#team-member-2', {
            duration: 2000,
            origin: 'top',
            distance: '100px',
            easing: 'ease-in-out',
            delay: 500,
            reset: true
        });
    
        ScrollReveal().reveal('#team-footer', {
            duration: 1500,
            origin: 'bottom',
            distance: '50px',
            delay: 700,
            easing: 'ease-in-out',
            reset: true
        });
    });
    