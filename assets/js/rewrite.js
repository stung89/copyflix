$(document).ready(function(){ //select document; on load run function
	$('.videoBoxes').click(function(){ //select DOM w/ videoBoxes and when a click is detected, run...
		$('.modal-container').addClass("active"); //run this: select modal-container and add 'active' class to it
	});
	$('.modal-container').click(function(){ //when clicked again, remove 'active' class
		$('.modal-container').removeClass("active");
	});
});


// Hover-Carousel jQuery plugin
// By Yair Even-Or
// https://github.com/yairEO/hover-carousel
// http://dropthebit.com

(function($) {
	"use strict";
	var bindToClass = "carousel",
		containerWidth = 0,
		scrollWidth = 0,
		posFromLeft = 0,
		stripePos = 0,
		animated = null,
		$indicator,
		$carousel,
		el,
		$el,
		ratio,
		scrollPos,
		nextMore,
		prevMore,
		pos,
		padding;

	
})