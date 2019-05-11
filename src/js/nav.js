(function($) {
  $(function() { // DOM Ready

  // open
  $('.o-nav__toggle').on('click', function() {
	  $('.o-nav--mobile').toggle();
	});
  // close
	$('.o-nav__toggle-close').on('click', function() {
	  $('.o-nav--mobile').toggle();
	});
	  
	  	// // Scroll hide/reveal: https://codepen.io/nathanlong/pen/ZBONwm?editors=1010
	// var navHeight = 0;
	// var latestKnownScrollY = 0;
	// var scrollDelta = 0;
	// var ticking = false;

	// function onScroll(){

	// 	// track upward scroll, reset if scroll down
	// 	if (latestKnownScrollY > window.scrollY ) {
	// 		scrollDelta += latestKnownScrollY - window.scrollY;
	// 	} else {
	// 		scrollDelta = 0;
	// 	}	

	// 	latestKnownScrollY = window.scrollY;
	// 	requestTick();
	// }

	// // if nothing is happening, ask the browser to update stuff when it's convenient
	// function requestTick(){
	// 	if(!ticking){
	// 		requestAnimationFrame(scrollUpdate);
	// 	}
	// 	ticking = true;
	// }

	// // updates that happen on scroll
	// // reveal nav on scroll up
	// function scrollUpdate() {
	// 	ticking = false;
	// 	var currentScrollY = latestKnownScrollY;
	// 	var currentScrollDelta = scrollDelta;
	// 	var navTrackers = $('.o-nav');

	// 	// cond 1 - user scrolls past nav
	// 	// cond 2 - user returns to top
		
	// 	if ( currentScrollY > navHeight ) {
	// 		navTrackers.addClass('is-scrolled');
	// 	} else {
	// 		navTrackers.removeClass('is-scrolled is-revealed');
	// 	}
		
	// 	// cond 3 - user is past nav and scrolls up half of navs height
	// 	// cond 4 - user is past nav, nav is revealed, and starts to scroll down
		
	// 	if ( currentScrollY > navHeight && currentScrollDelta >= navHeight/2  ) {
	// 		navTrackers.addClass('is-revealed');
	// 	} else {
	// 		navTrackers.removeClass('is-revealed');
	// 	}
	// }

	// $(window).scroll(function() {
	// 	onScroll();
	// });

	// navHeight = $('.o-nav').height();  

  });
})(jQuery);