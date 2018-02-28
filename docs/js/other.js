var mouseY;
var mouseX;
var t = 0;

$(document).mousemove(function(e){
	mouseY = e.pageY;
	mouseX = e.pageX;
});

// var render = function(){
// 	requestAnimationFrame(render);

// 	pos = mouseY/250;

// 	if(window.matchMedia("(min-width: 500px)").matches){
		
// 		$(".main h1").css("text-shadow", function(index){
// 			var mag = Math.sin(pos) * 7;
// 			var yell = Math.cos(pos + 0.3) * 7;
// 			var cyan = Math.sin(pos + 0.6) * 7 + 3;

// 			return "0px " + mag + "px rgba(203, 6, 160, 0.7), " + "0px " + yell + "px rgba(255, 249, 55, 0.7), " + "0px " + cyan + "px rgba(63, 215, 255, 0.7)";
// 		});
		
// 	}
// }

var activeTitle = 1;
var activeSection = 1;

for(var i = 1; i <= 3; i++){

	(function(j){

		$("nav a:nth-of-type(" + j + ")").on('click', function(e){
	
			// e.preventDefault();
			
			if(activeSection != j){
				$("nav a:nth-child(" + activeTitle + ")").removeClass("active");
				$(".things .section:nth-child(" + activeSection + ")").hide();
				$(".things .section:nth-child(" + activeSection + ")").removeClass("active-section");
				
				setTimeout(function(){

					$(".section:nth-child(" + j + ")").addClass("active-section");
					$(".section:nth-child(" + j + ")").show();
					$("nav a:nth-of-type(" + j + ")").addClass("active");

				},50);
				
				// history.pushState({foo: "bar"}, "work page" ,"#/web");
				activeSection = j;
				activeTitle = j;
			}
		});

	})(i);

}


// $(".back").on('click', function(e){
// 	e.preventDefault();
// 	$(".work").fadeOut();
// 	setTimeout(function(){
// 		$(".main").fadeIn();
// 	},750);
// 	history.pushState({foo: "foo"}, "home page" ,"/");
// });

// $(window).load(function(){
// 	render();

// 	if(window.location.hash == "#/work"){
// 		$('.main').hide();
// 		$('.work').show();
// 	}

// });

// $(window).load(function(evt){
// 	$('.background').addClass('first');
// 	$('.main h1').addClass('first');
// 	$('.main p').addClass('second');
// 	$('.main a').addClass('second');
// 	$('header').addClass('second');
// });

