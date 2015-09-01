$(document).ready(function(){

		$(".trackmap1").mouseover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).children('.results').children('span').stop().fadeTo(500,1);
	}).mouseout(function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).children('.results').children('span').stop().fadeTo(500,0);
	});
});
