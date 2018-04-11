let links = [];
let colors = [];

function setup(){
  let m = select(".main");
  links = selectAll("a", m);

  if(window.matchMedia("only screen and (max-width: 660px)").matches) return;

  for(let l of links){
    let c = floor(random(360));
    colors.push(c);
    l.style('border-bottom', '2px solid hsl(' + c + ' 100% 80%)');
    l.mouseOver(function(){
      l.style('background', 'hsl(' + c + ' 100% 80%)');
    });
    l.mouseOut(function(){
      l.style('background', 'white');
    });
  }

  setInterval(changeColor, 500);
}

function changeColor(){
  for(let l of links){
    let c = floor(random(360));
    colors.push(c);
    l.style('border-bottom', '2px solid hsl(' + c + ' 100% 80%)');
    l.mouseOver(function(){
      l.style('background', 'hsl(' + c + ' 100% 80%)');
    });
    l.mouseOut(function(){
      l.style('background', 'white');
    });
  }
}
