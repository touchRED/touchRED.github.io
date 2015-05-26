var mag = $("#mag");
var cyan = $("#cyan");
var yell = $("#yell");

var mouseX;
var t = 0;

$(document).mousemove(function(e){
	mouseX = e.pageY;
});

var render = function(){
	requestAnimationFrame(render);
	// if(window.matchMedia("(max-width: 1100px)").matches){
	// 	mag.css("top", 13 + Math.sin(mouseX/150) + "%");
	// 	cyan.css("top", 13 + Math.cos(mouseX/150) + "%");
	// 	yell.css("top", 13 + Math.sin(mouseX/150-1) + "%");
	// }else if(window.matchMedia("(max-width: 940px)").matches){
	// 	mag.css("top", 13 + Math.sin(mouseX/150) + "%");
	// 	cyan.css("top", 13 + Math.cos(mouseX/150) + "%");
	// 	yell.css("top", 13 + Math.sin(mouseX/150-1) + "%");
	// }else if(window.matchMedia("(max-width: 570px)").matches){
	// 	mag.css("top", 11 + Math.sin(mouseX/150) + "%");
	// 	cyan.css("top", 11 + Math.cos(mouseX/150) + "%");
	// 	yell.css("top", 11 + Math.sin(mouseX/150-1) + "%");
	// }else if(window.matchMedia("(max-width: 500px)").matches){
	// 	mag.css("top", 11 + Math.sin(mouseX/150) + "%");
	// 	cyan.css("top", 11 + Math.cos(mouseX/150) + "%");
	// 	yell.css("top", 11 + Math.sin(mouseX/150-1) + "%");
	// }else if(window.matchMedia("(max-width: 450px)").matches){
	// 	mag.css("top",  13 + Math.sin(t) + "%");
	// 	cyan.css("top",  13 + Math.cos(t) + "%");
	// 	yell.css("top",  13 + Math.sin(t-1) + "%");
	// }else{
	// 	mag.css("top",  13 + Math.sin(t) + "%");
	// 	cyan.css("top",  13 + Math.cos(t) + "%");
	// 	yell.css("top",  13 + Math.sin(t-1) + "%");
	// }

	if(window.matchMedia("(min-width: 1100px)").matches){
		mag.css("top", 11 + Math.sin(mouseX/150) + "%");
		cyan.css("top", 11 + Math.cos(mouseX/150) + "%");
		yell.css("top", 11 + Math.sin(mouseX/150-1) + "%");
	}else if(window.matchMedia("(min-width: 500px)").matches){
		mag.css("top", 13 + Math.sin(mouseX/150) + "%");
		cyan.css("top", 13 + Math.cos(mouseX/150) + "%");
		yell.css("top", 13 + Math.sin(mouseX/150-1) + "%");
	}else{
		mag.css("top",  13 + Math.sin(t) + "%");
		cyan.css("top",  13 + Math.cos(t) + "%");
		yell.css("top",  13 + Math.sin(t-1) + "%");
	}

	t += 0.075;
}

$("li:nth-of-type(3)").on('click', function(e){
	e.preventDefault();
	$("#container").fadeOut();
	setTimeout(function(){
		$("#work").fadeIn();
	},750);
	history.pushState({foo: "bar"}, "work page" ,"#/work");
});

$(".back").on('click', function(e){
	e.preventDefault();
	$("#work").fadeOut();
	setTimeout(function(){
		$("#container").fadeIn();
	},750);
	history.pushState({foo: "foo"}, "home page" ,"/");
});

$(window).load(function(){
	render();

	if(window.location.hash == "#/work"){
		$('#container').hide();
		$('#work').show();
	}

});

$(window).load(function(evt){
	$('#background').addClass('first');
	$('#container h1').addClass('first');
	$('#container p').addClass('second');
	$('#container a').addClass('second');
	$('#container p').addClass('second');
	$('#header').addClass('second');
});

