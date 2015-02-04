$(document).ready(function(){
	$('#container').on('click', '.nav_icon img', function(event){
		event.preventDefault();
		$('#nav ul').fadeToggle("slow");
	});
});