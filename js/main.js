$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        // прокрутка карусели бесконечно
        loop:true,
        margin: 11,
        // есть навигация
        nav:true,
        navClass: ["slider__nav--left", "slider__nav--right"],
        // адаптив
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
});