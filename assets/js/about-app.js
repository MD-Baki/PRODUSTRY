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
    
    // Our Team Slider Js Start
    $('.team_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        prevArrow:$('.team_left_btn'),
        nextArrow:$('.team_right_btn'),
    })
    // ||Our Team Slider Js End||

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