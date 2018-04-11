let links = [];
let colors = [];
let time;

function setup(){
  let m = select(".main");
  links = selectAll("a", m);
  time = random(100);

  if(window.matchMedia("only screen and (max-width: 800px)").matches) return;

  for(let i = 0; i < links.length; i++){
    let c = floor(360 * pow(sin((i + 1) * 0.05 + time), 2));
    colors.push(c);
    links[i].style('border-bottom', '3px solid hsl(' + c + ' 100% 80%)');
    links[i].mouseOver(function(){
      links[i].style('background', 'hsl(' + c + ' 100% 80%)');
    });
    links[i].mouseOut(function(){
      links[i].style('background', 'white');
    });
  }

  setInterval(changeColor, 100);
}

function changeColor(){
  for(let i = 0; i < links.length; i++){
    let c = floor(360 * pow(sin((i + 1) * 0.05 + time), 2));
    colors.push(c);
    links[i].style('border-bottom', '3px solid hsl(' + c + ' 100% 80%)');
    links[i].mouseOver(function(){
      links[i].style('background', 'hsl(' + c + ' 100% 80%)');
    });
  }
  time -= 0.05;
}
