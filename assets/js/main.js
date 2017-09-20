//code for modal----------------------------------

$(document).ready(function(){
  // $("body").css('background', "#fff");
  $('.videoBoxes').click(function(){
    $('.modal-container').addClass("active");
  });
  $('.modal-container').click(function(){
    $('.modal-container').removeClass("active");
  });
});
//------------------------------------------------

// Hover-Carousel jQuery plugin
// By Yair Even-Or
// https://github.com/yairEO/hover-carousel
// http://dropthebit.com

(function($) {
  "use strict";
  var bindToClass = "carousel",
    containerWidth = 0,
    scrollWidth = 0,
    posFromLeft = 0, // Stripe position from the left of the screen
    stripePos = 0, // When relative mouse position inside the thumbs stripe
    animated = null,
    $indicator,
    $carousel,
    el,
    $el,
    ratio,
    scrollPos, ///scroll position when mouse enters carousel
    nextMore,  ///boolean results
    prevMore,  ///boolean results
    pos,
    padding;

  // calculate the thumbs container width
  function calc(e) {
    $el = $(this).find(" > .wrap"); ///selects all the elements w/ .wrap and save into '$el'
    el = $el[0]; /// el equals to the first image
    $carousel = $el.parent(); ///$carousel equals to the parent element...maybe carousel?
    $indicator = $el.prev(".indicator"); ///don't know what this is doing

    nextMore = prevMore = false; // reset

    containerWidth = el.clientWidth; ///clientwidth isinnerhtml like?
    scrollWidth = el.scrollWidth; // the "<ul>"" width
    padding = 0.2 * containerWidth; // padding in percentage of the area which the mouse movement affects
    posFromLeft = $el.offset().left;
    stripePos = e.pageX - padding - posFromLeft; ///pageX - calculated the axis of the page/ 'e' is an object...
    pos = stripePos / (containerWidth - padding * 2);
    scrollPos = (scrollWidth - containerWidth) * pos;

    if (scrollPos < 0) scrollPos = 0;
    if (scrollPos > scrollWidth - containerWidth)
      scrollPos = scrollWidth - containerWidth;

    // $el.animate({ scrollLeft: scrollPos }, 200, "swing"); //commented out and still works... possibly have to do with the css functionality?

    if ($indicator.length)
      $indicator.css({
        width: containerWidth / scrollWidth * 100 + "%",
        left: scrollPos / scrollWidth * 100 + "%"
      });

    clearTimeout(animated);
    animated = setTimeout(function() {
      animated = null;
    }, 200);
    console.log(scrollPos);
    console.log(nextMore);
    console.log(prevMore);
    console.log(e);
    return this; //this gets triggered when mouse enters carousel and adjusts left/right class depending on it's position
                 //when consoled this is selecting the div w/ carousel class
  }

  // move the stripe left or right according to mouse position
  function move(e) {
    // don't move anything until inital movement on 'mouseenter' has finished
    if (animated) return;

    ratio = scrollWidth / containerWidth;
    stripePos = e.pageX - padding - posFromLeft; // the mouse X position, "normalized" to the carousel position

    if (stripePos < 0) stripePos = 0;

    pos = stripePos / (containerWidth - padding * 2); // calculated position between 0 to 1
    // calculate the percentage of the mouse position within the carousel
    scrollPos = (scrollWidth - containerWidth) * pos;

    el.scrollLeft = scrollPos;
    if ($indicator[0] && scrollPos < scrollWidth - containerWidth)
      $indicator[0].style.left = scrollPos / scrollWidth * 100 + "%";

    // check if element has reached an edge
    prevMore = el.scrollLeft > 0;
    nextMore = el.scrollLeft < scrollWidth - containerWidth;

    $carousel.toggleClass("left", prevMore);
    $carousel.toggleClass("right", nextMore);
  }

  $.fn.carousel = function(options) {
    $(document)
      .on("mouseenter.carousel", "." + bindToClass, calc)
      .on("mousemove.carousel", "." + bindToClass, move);
  };

  // automatic binding to all elements which have the class that is assigned to "bindToClass"
  $.fn.carousel();
})(jQuery);



//code for modal----------------------------------

$(document).ready(function(){
  // $("body").css('background', "#fff");
  $('.box').click(function(){
    $('.modal-container').addClass("active");
  });
  $('.modal-container').click(function(){
    $('.modal-container').removeClass("active");
  });
});
