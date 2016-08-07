(function($){
	$(function(){
		$('.parallax').parallax();
		$(".button-collapse").sideNav();
		 $('.modal-trigger').leanModal();
		 $('select').material_select();
		  $('.carousel').carousel();
		    $(".button-collapse").sideNav();
		    $('.collapsible').collapsible();
  }); // end of document ready
})(jQuery); // end of jQuery name space



$(document).ready(function() {

		$(".1").click(function(){
		$(".slide-o-1").slideToggle("slow");
	});
	$(".2").click(function(){
		$(".slide-o-2").slideToggle("slow");
	});
	$(".3").click(function(){
		$(".slide-o-3").slideToggle("slow");
	});		
});
