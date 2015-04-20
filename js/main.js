var mag = $("#mag");
var cyan = $("#cyan");
var yell = $("#yell");

var mouseX;
var t = 0;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/(window.innerHeight*0.35), 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, (window.innerHeight*0.35));
renderer.setClearColor(0xefefef);

// $('body').append(renderer.domElement);

var canvas = document.querySelector('canvas');

var geometry = new THREE.PlaneGeometry(200,200,20,20);

var material = new THREE.MeshBasicMaterial({color: 0xcdcdcd, wireframe: true});

var plane = new THREE.Mesh(geometry, material);

plane.rotation.x = 1.6;

scene.add(plane);

camera.position.z = 40;
camera.position.y = 2.5;

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
	renderer.render(scene, camera);
}

$(document).ready(function(){
	render();

	setTimeout(function() {
	    $("h1").fadeToggle("slow");
	}, 500);
	setTimeout(function() {
	    $("#header").fadeToggle("slow");
	}, 1000);
	setTimeout(function() {
	    $("p").fadeToggle("slow");
	}, 1000);
});


