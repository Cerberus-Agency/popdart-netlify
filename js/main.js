
(function($) {

$('#site-navigation').on('click', '.link-history:not(.clicked)', function(event){
	console.log(this);
	$('#history').addClass('slideToTop');

	$('.link-history').addClass('clicked');
	event.preventDefault();
});

$('#site-navigation').on('click', '.link-instructions:not(.clicked)', function(event){

	$('#history').removeClass('slideToBottom').addClass('slideToTop');
	$('#instructions').removeClass('slideToBottom').addClass('slideToTop');

	$('.link-history').addClass('clicked');
	$('.link-instructions').addClass('clicked');
	event.preventDefault();
});

$('#site-navigation').not('.clicked').on('click', '.link-inspiration:not(.clicked)', function(event){

	$('#history').removeClass('slideToBottom').addClass('slideToTop');
	$('#instructions').removeClass('slideToBottom').addClass('slideToTop');
	$('#inspiration').removeClass('slideToBottom').addClass('slideToTop');

	$('.link-history').addClass('clicked');
	$('.link-instructions').addClass('clicked');
	$('.link-inspiration').addClass('clicked');
	event.preventDefault();
});

$('#site-navigation').on('click', '.link-contact:not(.clicked)', function(event){

	$('#history').removeClass('slideToBottom').addClass('slideToTop');
	$('#instructions').removeClass('slideToBottom').addClass('slideToTop');
	$('#inspiration').removeClass('slideToBottom').addClass('slideToTop');
	$('#contact').removeClass('slideToBottom').addClass('slideToTop');

	$('.link-history').addClass('clicked');
	$('.link-instructions').addClass('clicked');
	$('.link-inspiration').addClass('clicked');	
	$('.link-contact').addClass('clicked');
	event.preventDefault();
});

$('.site-header').on('click', '.site-title', function(event){

	$('#history').removeClass('slideToTop').addClass('slideToBottom');
	$('#instructions').removeClass('slideToTop').addClass('slideToBottom');
	$('#inspiration').removeClass('slideToTop').addClass('slideToBottom');
	$('#contact').removeClass('slideToTop').addClass('slideToBottom');

	$('.link-history.clicked').removeClass('clicked');
	$('.link-instructions.clicked').removeClass('clicked');
	$('.link-inspiration.clicked').removeClass('clicked');
	$('.link-contact.clicked').removeClass('clicked');
	event.preventDefault();
});

$('#site-navigation').on('click','.link-history.clicked', function(event){

	$('#instructions.slideToTop').removeClass('slideToTop').addClass('slideToBottom');
	$('#inspiration.slideToTop').removeClass('slideToTop').addClass('slideToBottom');
	$('#contact.slideToTop').removeClass('slideToTop').addClass('slideToBottom');
	
	$('#history.slideToBottom').removeClass('slideToBottom').addClass('slideToTop');


	$('.link-history.clicked').removeClass('clicked');
	$('.link-instructions.clicked').removeClass('clicked');
	$('.link-inspiration.clicked').removeClass('clicked');
	$('.link-contact.clicked').removeClass('clicked');
	event.preventDefault();
});

$('#site-navigation').on('click', '.link-instructions.clicked', function(event){

	$('#inspiration.slideToTop').removeClass('slideToTop').addClass('slideToBottom');
	$('#contact.slideToTop').removeClass('slideToTop').addClass('slideToBottom');
	
	$('#history.slideToBottom').removeClass('slideToBottom').addClass('slideToTop');
	$('#instructions.slideToBottom').removeClass('slideToBottom').addClass('slideToTop');

	$('.link-instructions.clicked').removeClass('clicked');
	$('.link-inspiration.clicked').removeClass('clicked');
	$('.link-contact.clicked').removeClass('clicked');
	event.preventDefault();
});

$('#site-navigation').on('click', '.link-inspiration.clicked', function(event){

	$('#contact.slideToTop').removeClass('slideToTop').addClass('slideToBottom');
	
	$('#history.slideToBottom').removeClass('slideToBottom').addClass('slideToTop');
	$('#instructions.slideToBottom').removeClass('slideToBottom').addClass('slideToTop');
	$('#inpiration.slideToBottom').removeClass('slideToBottom').addClass('slideToTop');

	$('.link-inspiration.clicked').removeClass('clicked');
	$('.link-contact.clicked').removeClass('clicked');
	event.preventDefault();
});

$('#site-navigation').on('click', '.link-contact.clicked', function(event){

	// $('#contact.slideToTop').removeClass('slideToTop').addClass('slideToBottom');

	$('#history.slideToBottom').removeClass('slideToBottom').addClass('slideToTop');
	$('#instructions.slideToBottom').removeClass('slideToBottom').addClass('slideToTop');
	$('#inpiration.slideToBottom').removeClass('slideToBottom').addClass('slideToTop');
	$('#contact.slideToBottom').removeClass('slideToBottom').addClass('slideToTop');

	$('.link-contact.clicked').removeClass('clicked');
	event.preventDefault();
});

/*******  SLICK SLIDER  *******/

$(document).ready(function(){
  $('#instructions-slider').slick({
    respondTo : 'window',
    mobileFirst : true,
    infinite: false,
    arrows: true,
    autoplay: false
  });
});

$(document).ready(function(){
  $('#instructions-mobile-slider').slick({
    respondTo : 'window',
    mobileFirst : true,
    infinite: false,
    arrows: true,
    autoplay: false
  });
});

$(document).ready(function(){
  $('#inspiration-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    autoplay: false,
    variableWidth: true,
    responsive: [
	{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
});

/*******  HAMBURGER MENU  *******/

var $hamburger = $('.hamburger');
	$hamburger.on('click', function(e) {
	$hamburger.toggleClass('is-active');
	$('.menu-primary-container').toggleClass('is-active');
});

$( '.menu a' ).on("click", function(){
  	$('.hamburger').toggleClass('is-active');
	$('.menu-primary-container').toggleClass('is-active');
});

/*******  TABS  *******/

$('.tab').on('click', function(e) {
	$('.tab').toggleClass('active');
	$('.tab-content').toggleClass('active');
});

})( jQuery );