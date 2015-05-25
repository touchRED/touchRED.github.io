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
	if(window.matchMedia("(min-width: 500px)").matches){
		mag.css("top", 10 + Math.sin(mouseX/150) + "%");
		cyan.css("top", 10 + Math.cos(mouseX/150) + "%");
		yell.css("top", 10 + Math.sin(mouseX/150-1) + "%");
	}else{
		mag.css("top", 10 + Math.sin(t/150) + "%");
		cyan.css("top", 10 + Math.cos(t/150) + "%");
		yell.css("top", 10 + Math.sin(t/150-1) + "%");

	}

	t += 5;
}

$("li:nth-of-type(3)").on('click', function(e){
	e.preventDefault();
	$("#container").fadeOut();
	setTimeout(function(){
		$("#work").fadeIn();
	},750);
	history.pushState({foo: "bar"}, "work page" ,"work");
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

	// console.log(window.location.href.split("/"));
});

$(window).load(function(evt){
	$('#background').addClass('first');
	$('#container h1').addClass('first');
	$('#container p').addClass('second');
	$('#container a').addClass('second');
	$('#container p').addClass('second');
	$('#header').addClass('second');
});

