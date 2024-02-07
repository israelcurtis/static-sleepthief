jQuery(document).ready(function($) {
	console.log(soma_vars);	// array of vars passed from admin.php

	isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
	isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
	isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");
	
	// don't want to load colorbox overlay for videos on iphone...
	if (isiPhone > -1 || isiPod > -1) {
		$(".trigger").removeClass('colorbox');
		$("body").addClass("iphone");
	}
	if (isiPad > -1) {
		$("body").addClass("ipad");
	}
	
	// match trigger play icon block to the item it's overlaying
	// $(".trigger").each(function(){
	// 	$(this).width($(this).next().width());
	// 	$(this).height($(this).next().height());
	// });

	// launch lightbox
	$(".colorbox").colorbox({
		iframe: function(){
		    return $(this).attr('iframe');
		},
		width: function(){
			if ($(this).attr('width') !== undefined) {
				return $(this).attr('width');
			}
		},
		height: function(){
			if ($(this).attr('height') !== undefined) {
				return $(this).attr('height');
			}
		},
		maxWidth: function(){
			if (isiPhone > -1) {
				return "300";
			}
			if ($(this).attr('maxWidth') !== undefined) {
				return $(this).attr('maxWidth');
			}
			return "95%";
		},
		maxHeight: function(){
			if (isiPhone > -1) {
				return "400";
			}
			if ($(this).attr('maxHeight') !== undefined) {
				return $(this).attr('maxHeight');
			}
			return "95%";
		},
		innerWidth: function(){
			if ($(this).attr('innerWidth') !== undefined) {
				return $(this).attr('innerWidth');
			}
		},
		innerHeight: function(){
			if ($(this).attr('innerHeight') !== undefined) {
				return $(this).attr('innerHeight');
			}
		},
		title:function () {
			if ($(this).attr('store')) {
		    	return $(this).attr('alt') + " &rarr; " + "Click here to purchase this track ".link($(this).attr('store'));				
			}
		},
		scalePhotos: true,
		scrolling: false,
		// transition: 'none',
		speed: 200,
		opacity: .75,
		fastIframe: false
	});
	
	// MOBILE ORIENTATION SENSOR ------------------------------------//
	
	// init var
	var orientation;
	
	/* detect orientation and set class and global variable */
	function orient() {  
		$('.colorbox').colorbox.resize();
		if (window.orientation == 0 || window.orientation == 180) {
			$("body").addClass("portrait");
			$("body").removeClass("landscape");
			orientation = 'portrait';
			return false;
		}
		else if (window.orientation == 90 || window.orientation == -90) {
			$("body").removeClass("portrait");
			$("body").addClass("landscape");
			orientation = 'landscape';
			return false;
		}
	}
	
	/* Call orientation function on page load */
	$(function(){
		orient();
	});
	
	/* Call orientation function on orientation change */
	$(window).bind( 'orientationchange', function(e){
		orient();
	});
	
	// -------------------------------------------------------------//
	

	// hides url toolbar by default in iphone safari
	window.addEventListener('load', function() {
		setTimeout(scrollTo, 0, 0, 1);
	}, false);

	// $('.social-section-item').hover(
	// 	function(){
	// 		$(this).children('.tooltip').delay(1200).show("fade","fast");
	// 		$(this).children('.tooltip').position({at: 'center top', of: $(this), my: 'center bottom'})
	// 	},
	// 	function(){
	// 		$('.tooltip').hide();
	// 	}	
	// );
	
	if (typeof product_variations != 'undefined') {
		$('p.price').hide();
	}
	
});