let links = [];
let colors = [];
let time;

function setup(){
  let m = select(".main");
  links = selectAll("a", m);
  time = random(100);
  colorMode(HSL, 360, 100, 100);

  // if(window.matchMedia("only screen and (max-width: 800px)").matches) return;

  for(let i = 0; i < links.length; i++){
    let c = color(floor(360 * pow(sin(i * 0.05 + time), 2)), 100, 80);
    colors.push(c);
    links[i].style('border-bottom', '3px solid rgb(' + floor(red(c)) + ', ' + floor(green(c)) + ', ' + floor(blue(c)) + ')');
    links[i].mouseOver(function(){
      links[i].style('background', 'rgb(' + floor(red(c)) + ', ' + floor(green(c)) + ', ' + floor(blue(c)) + ')');
    });
    links[i].mouseOut(function(){
      links[i].style('background', 'white');
    });
  }

  setInterval(changeColor, 100);
}

function changeColor(){
  for(let i = 0; i < links.length; i++){
    let c = color(floor(360 * pow(sin(i * 0.05 + time), 2)), 100, 80);
    colors.push(c);
    links[i].style('border-bottom', '3px solid rgb(' + floor(red(c)) + ', ' + floor(green(c)) + ', ' + floor(blue(c)) + ')');
    links[i].mouseOver(function(){
      links[i].style('background', 'rgb(' + floor(red(c)) + ', ' + floor(green(c)) + ', ' + floor(blue(c)) + ')');
    });
  }
  time -= 0.05;
}
