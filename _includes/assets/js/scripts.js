
 // (function($) {

/*******  FULLPAGE.JS  *******/

  new fullpage('#primary', {
  //options here
  licenseKey: 'C187391A-7560499B-A47868C3-9C98F131',
  menu: '#site-navigation',
  lockAnchors: false,
  anchors:['intro', 'hist', 'inst', 'insp', 'cont'],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['introduction', 'history', 'instructions', 'inspiration', 'contact'],
  showActiveTooltip: true,
  slidesNavigation: true,
  slidesNavPosition: 'right',

  //Scrolling
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: true,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  interlockedSlides: true,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  //normalScrollElements: '#element1, .element2',
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  bigSectionsDestination: null,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //Design
  controlArrows: true,
  verticalCentered: true,
  // sectionsColor : ['#cc3366', '#ffcc33', '#99cc66', '#6699cc', '#ffffff' ],
  paddingTop: '100', /* add this in css, it's different from piece to piece -DRR */
  paddingBottom: '100',
  fixedElements: '#header, .footer',
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: true,
  parallax: true,
  parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},


  //Custom selectors
  sectionSelector: '.section',
  slideSelector: '.slide',

  lazyLoading: true,

  //events
  onLeave: function(origin, destination, direction){},
  afterLoad: function(origin, destination, direction){},
  afterRender: function(){},
  afterResize: function(width, height){},
  afterReBuild: function(){},
  afterResponsive: function(isResponsive){},
  afterSlideLoad: function(section, origin, destination, direction){},
  onSlideLeave: function(section, origin, destination, direction){}
});

//methods
fullpage_api.setAllowScrolling(true);

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

/*******  STICKY ELEMENTS  *******/



function widthChecker(x) {
  if (x.matches) { // If media query matches
    // document.body.style.backgroundColor = "purple";

    /******** MOBILE OFFSETS *******/
    console.log(x);
    var sticky_nav_mobile = new Waypoint.Sticky({
      element: jQuery('.site-header')[0], offset: 0 
    });

    var sticky_history_mobile = new Waypoint.Sticky({
      element: jQuery('.history.mobile')[0], offset: 100
    });


    var sticky_instructions_mobile = new Waypoint.Sticky({
      element: jQuery('.instructions.mobile')[0], offset: 110
    });


    var sticky_inspiration_mobile = new Waypoint.Sticky({
      element: jQuery('.inspiration.mobile')[0], offset: 120
    });


    var sticky_contact_mobile = new Waypoint.Sticky({
      element: jQuery('.contact.mobile')[0], offset: 130
    });


  } else {

    /******** DESKTOP OFFSETS *******/
    console.log(x);
    // document.body.style.backgroundColor = "orange";
    var sticky_nav = new Waypoint.Sticky({
      element: jQuery('.site-header')[0], 
      // offset: 0
      offset: 0
    });

    var sticky_history = new Waypoint.Sticky({
      element: jQuery('.history')[0], 
      // offset: 300
      offset: 100
    });

  console.log("sticky_history", sticky_history.element.clientHeight);

    var sticky_instructions = new Waypoint.Sticky({
      element: jQuery('.instructions')[0], 
      // offset: 325
      offset: 100
    });

  console.log("sticky_instructions", sticky_instructions.element.clientHeight);

    var sticky_inspiration = new Waypoint.Sticky({
      element: jQuery('.inspiration')[0], 
      // offset:350
      offset: 100
    });

  console.log("sticky_inspo", sticky_instructions.element.clientHeight);

    var sticky_contact = new Waypoint.Sticky({
      element: jQuery('.contact')[0], 
      // offset: 375
      offset: 100
    });

  console.log("sticky_contact", sticky_instructions.element.clientHeight);
  }
}

var x = window.matchMedia("(max-width: 1500px)");
widthChecker(x); // Call listener function at run time
x.addListener(widthChecker);


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

