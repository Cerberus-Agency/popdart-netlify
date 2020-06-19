
 // (function($) {



  /*******  SMOOTH SCROLLING  *******/

// Select all links with hashes
jQuery('a[href*="#"]')
  // Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
	console.log("link clicked");
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = jQuery(this.hash);
    target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      jQuery('html, body').animate({
        scrollTop: target.offset().top
      }, 1500, function() {
        // Callback after animation
        // Must change focus!
        var $target = jQuery(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});


/*******  SLICK SLIDER  *******/

jQuery(document).ready(function(){
  jQuery('#instructions-slider').slick({
    respondTo : 'window',
    mobileFirst : true,
    infinite: true,
    arrows: true,
    autoplay: false
  });
});

jQuery(document).ready(function(){
  jQuery('#inspiration-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

/*******  HAMBURGER MENU  *******/

 var $hamburger = jQuery('.hamburger');
  $hamburger.on('click', function(e) {
    $hamburger.toggleClass('is-active');
    jQuery('.menu-primary-container').toggleClass('is-active');
  });

// })( jQuery );

