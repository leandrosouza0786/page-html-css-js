$(document).ready(function () {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collpase');
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // carrousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        nav: true,
        navText: [$('.owl-navegation .owl-nav-prev'),$('.owl-navegation .owl-nav-next')]
    });

});
