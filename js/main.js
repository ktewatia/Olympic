//==================== Nav Menu ========================//
$(window).scroll(function() {
    if ($(".navbar").offset().top > 150) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//==================== Smooth Page Scroll ========================//
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//==================== Intro Text Slider ========================//
$(document).ready(function(){
	  $('#intro-slider').flexslider({
	    animation: "fade",
	    controlNav: false,
	    DirectionNav: false,
	   slideshowSpeed: 4000,        
	    animationSpeed: 600  
	  });
});

//==================== Testimonials Slider ========================//
$(document).ready(function(){
	  $('#quote-slider').flexslider({
	    animation: "slide",
	    controlNav: "thumbnails",
	    DirectionNav: "true"
	  });
});

//==================== Project Slider ========================//
$(document).ready(function(){
	  $('#project-slider').flexslider({
	    animation: "slide",
	    controlNav: "false",
	    DirectionNav: "true"
	  });
});

//==================== Animated Facts ========================//
// jQuery(document).ready(function($) {
//   "use strict";
// 	$('.facts-content').appear(function() {
// 	$('#lines').animateNumber({ number: 75 }, 2000 );
// 	$('#lines1').animateNumber({ number: 25 }, 2000 );
// 	$('#lines2').animateNumber({ number: 100 }, 2000 );
// 	$('#lines3').animateNumber({ number: 150 }, 2000 );
// 	},{accX: 0, accY: -50});
// });

//==================== Portfolio ========================//
$(function () {
	var filterList = {
		init: function () {
			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixitup({
				targetSelector: '.portfolio',
				filterSelector: '.filter',
				effects: ['fade'],
				easing: 'snap',
				// call the hover effect
				onMixEnd: filterList.hoverEffect()
			});				
		},
		hoverEffect: function () {
		}
	};
	// Run the show!
	filterList.init();
});	

//==================== Parallax ========================//
jQuery(document).ready(function ($) {

    $.stellar({
		horizontalOffset: 50
    });

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }

});
