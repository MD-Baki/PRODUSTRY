$(document).ready(function (){
    
    // Pre-Loder Js Start
    $(window).on("load", function () {
        $('#pre_loder').fadeOut(300);
    })
    // ||Pre-Loder Js End||

    // Nav Js Start
    $('.toggler_btn').on('click', function () {
        $('#main_menu ul, nav .navbar-brand').toggleClass('active')
    })
    // Nav-Fixd Js Start
    $(window).on('scroll', function () {
        var scrollSize = $(this).scrollTop();
    
        if (scrollSize > 150) {
            $('nav').addClass('animate')
        } else {
            $('nav').removeClass('animate')
        }        
    })
    // ||Nav Js End||

    // Banner Slider Js Start
    $('.banner_slider').slick({
        prevArrow:'<div class="banner_arrow"><li><a href="#"><i class="fa-solid fa-angle-left"></i></a></li></div>',
        nextArrow:'<div class="banner_arrow arrow_right"><li><a href="#"><i class="fa-solid fa-angle-right"></i></a></li></div>',
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                  }
            }
        ]
    })
    // ||Banner Slider Js End||

    // services slider Js Start
    $('.services_slider').slick({
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                  }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                  }
            }
        ]
    })
    // ||services slider Js End||

    // Portfolio Slider Js Start
    $('.portfolio_slider').slick({
        arrows: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                  }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                  }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                  }
            },
        ]
    })
    // ||Portfolio Slider Js End||
    
    // Counter UP Js Start
    'use strict';
    $('.count-num').rCounter({
        duration: 50
    });
    // ||Counter UP Js End||

    // Blog Slider Js Start
    $('.blog_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        prevArrow:$('.left_btn'),
        nextArrow:$('.right_btn'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                  }
            }
        ]
    })
    // ||Blog Slider Js End||

    // Testimonial Slider Js Start
    $('.testimonial_review').slick({
        arrows: false,
        fade: true,
        asNavFor: '.testimonial_review_nav',
    })
    $('.testimonial_review_nav').slick({
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        asNavFor: '.testimonial_review',
        prevArrow:$('.testimonial_left_btn'),
        nextArrow:$('.testimonial_right_btn'),
    })
    // ||Testimonial Slider Js End||

    // Sponsor Slider Js Start
    $('.sponsor_slider').slick({
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
        prevArrow:$('.sponsor_left_btn'),
        nextArrow:$('.sponsor_right_btn'),
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                  }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                  }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    
                  }
            },
        ]
    })
    // ||Sponsor Slider Js End||

    

    // Back-To-Top Js Start
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        
        if (scrollTop > 600) {
            $('#top').fadeIn(200)
        } else {
            $('#top').fadeOut(200)
        }
    })

    $('#top').on('click', function () {
        $("html, body").animate({
            scrollTop:0
        },100)
    })
    // ||Back-To-Top Js End||
})