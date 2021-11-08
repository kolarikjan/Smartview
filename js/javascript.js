$(document).ready(function () {
    $('.owl-home').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<img src='img/slider-arrow-l.svg' alt='arrow'>","<img src='img/slider-arrow-r.svg' alt='arrow'>"],
        dots: true,
        items:1
    });
    $('.owl-products').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<div class='carousel-nav-l'></div>","<div class='carousel-nav-r'></div>"],
        dots: false,
        items:1
    });
    $('.partners-carousel').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<div class='carousel-nav-l'></div>","<div class='carousel-nav-r'></div>"],
        items:4,
        responsive:{
            0:{
                items:1
            },
            576: {
                items:2
            },
            768:{
                items:3
            },
            993:{
                items:4
            },
            1300:{
                items:5
            }
        }
    });
    $('.products-carousel').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<div class='carousel-nav-l'></div>","<div class='carousel-nav-r'></div>"],
        items:4,
        responsive:{
            0:{
                items:1
            },
            576: {
                items:2
            },
            768:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    $(".contacts-click .clickable .main").click(function (e) { 
        e.preventDefault();
        if ($(this).parent(".clickable").children(".hide").css("display") == "none") {
            $(this).parent(".clickable").addClass("show");
        } else {
            $(this).parent(".clickable").removeClass("show");
        }
    });
});