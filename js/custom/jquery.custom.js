"use strict";
//Preloader
var rotate = 1;
function hide_preloader() {
    rotate = 0;
    $("#preloader").addClass('preloader-ef');
}

function mobilecheck() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return false;
    }
    return true;
}

$(function ($) {
    var colorCode = '#ff2b42',
        mapMarker = 'images/colors/red/icon-location.png';

    

    $("#owl-banner").owlCarousel({
        autoPlay: 4000,
        slideSpeed: 1000,
        navigation: false,
        pagination: false,
        singleItem: true,
        transitionStyle: "goUp"
    });


    $("#owl-swot").owlCarousel({
        autoPlay: 10000,
        items: 4,
        slideSpeed: 1000,
        navigation: true,
        pagination: false,
        navigationText: ["&#xf104;", "&#xf105;"]
    });

    $("#owl-ui").owlCarousel({
        autoPlay: 10000,
        items: 3,
        slideSpeed: 1000,
        navigation: true,
        pagination: false,
        navigationText: ["&#xf104;", "&#xf105;"]
    });


    // Funfacts
    $('#funfacts .item p').appear(function () {
        var count_element = $('.countup', this).html();
        $(".countup", this).countTo({
            from: 0,
            to: count_element,
            speed: 2000,
            refreshInterval: 50,
        });
    });

    //Scroll about
    $(".icon-banner").click(function(){
        $("html,body").animate({scrollTop:$("#about").offset().top},"slow");
        return false;
    });
    //Scroll contact
    $(".scroll-contact").click(function(){
        $("html,body").animate({scrollTop:$("#contact").offset().top},"slow");
        return false;
    });

    //Banner fix height
    var dh = $(window).height();
    $('#banner').css('height', dh + 'px');

    // history
    calculator_height_history();

    // Scroll Top
    $('#scroll-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    // Close Menu
    $('#button-menu').click(function () {
        $('#nav-menu, #nav-menu ul').toggleClass('nav-menu-ef');
    })
    $('#close-menu, .menu-nav li a').click(function () {
        $('#nav-menu, #nav-menu ul').removeClass('nav-menu-ef');
    });

    
    // user
    $('.chart').appear(function (index, el) {
        $(this).easyPieChart({
            barColor: colorCode,
            trackColor: 'rgba(225,225,225,0.5)',
            scaleColor: 'transparent',
            scaleLength: 5,
            lineCap: 'butt',
            lineWidth: 6,
            size: 150,
            rotate: 0,
            easing: 'easeOutBounce',
            delay: 1000,
            animate: {
                duration: 2000,
                enabled: true
            },
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });
    });

    if (mobilecheck()) {
        //Wow js animation
        new WOW().init();
    }


});


//Foreground parralax
function parallaxInit() {
    $('#home').parallax("50%", 0.3);
    $('#swot').parallax("50%", 0.3);
    $('#user').parallax("50%", 0.3);
    $('#twitter').parallax("50%", 0.3);
    $('#ui').parallax("50%", 0.3);
    $('#testimonial').parallax("50%", 0.3);
    $('#blog-banner').parallax("50%", 0.3);
    //$('#contact-panel').parralax("90%", 0.3);
}
//Background parallax
if ($(window).width() > 992) {

    $(window).bind('load', function () {
        parallaxInit();
    });
}


//iphone Panel Scroll functionality
$(window).scroll(function () {
    //iohone iframe
    $('#about .about-img iframe').css({
        'top': -($(this).scrollTop() / 2) + "px"
    });
});

//Height join for History Panel
function calculator_height_history() {
    var height_item = $('#history .item').outerHeight(false);
    $('#history .join-history').height(height_item);
}

$(window).bind('load', function () {
    calculator_height_history();
});
$(window).bind('resize', function () {
    calculator_height_history();

    //Banner fix height
    var dh = $(window).height();
    $('#banner').css('height', dh + 'px');

    if ($(window).height() < $('.menu-nav').height() + 100) {
        $('#nav-menu').css('overflow-y', 'scroll');
    } else {
        $('#nav-menu').css('overflow-y', 'visible');
    }

});

//BLUR

    
/*
$('#footer').blurjs({
	source: '#ui',
	radius: 7,
	overlay: 'rgba(0,0,0,0.4)'
});;
	
*/
