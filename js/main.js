var mouseX;
var t = 0;

$(document).mousemove(function(e){
	mouseX = e.pageY;
});

var render = function(){
	requestAnimationFrame(render);


	// mag.css("top", 11 + Math.sin(mouseX/150) + "%");
	// cyan.css("top", 11 + Math.cos(mouseX/150) + "%");
	// yell.css("top", 11 + Math.sin(mouseX/150-1) + "%");

}

$("nav a:nth-of-type(3)").on('click', function(e){
	e.preventDefault();
	$(".main").fadeOut();
	setTimeout(function(){
		$(".work").fadeIn();
	},750);
	history.pushState({foo: "bar"}, "work page" ,"#/work");
});

$(".back").on('click', function(e){
	e.preventDefault();
	$(".work").fadeOut();
	setTimeout(function(){
		$(".main").fadeIn();
	},750);
	history.pushState({foo: "foo"}, "home page" ,"/");
});

$(window).load(function(){
	render();

	if(window.location.hash == "#/work"){
		$('.main').hide();
		$('.work').show();
	}

});

$(window).load(function(evt){
	$('.background').addClass('first');
	$('.main h1').addClass('first');
	$('.main p').addClass('second');
	$('.main a').addClass('second');
	$('header').addClass('second');
});

