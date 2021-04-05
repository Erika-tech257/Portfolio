// Jquery for menu

 $(document).ready(function () {
     $('.menu-toggler').on('click' , function () {
         $(this).toggleClass('open');
         $('.top-nav').toggleClass('open');
     });

     $('.top-nav .nav-link').on('click', function () {
         $('.menu-toggler').removeClass('open');
         $('.top-nav').removeClass('open');
     });

     $('nav a[href*="#"]').on('click', function (){
        $('html, body').animate({
            scrollTop: $($(this).attribute('href')).offset().top - 100
        }, 4000);
    });

    $('#up').on('click' , function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    // Animate webpage

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
 });