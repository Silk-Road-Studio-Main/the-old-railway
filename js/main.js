// Owl Carousel
$('.owl-carousel').owlCarousel({
    margin:10,
    responsiveClass:true,
    autoplay:true,
    loop:true,
    dots:false,
    navElement:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})