$(document).ready(function(){
	$('body').hide().fadeIn(1000);
	
	$('#container').on('click', '.nav img', function(event){
		event.preventDefault();
		$('ul').fadeToggle();
	});
});