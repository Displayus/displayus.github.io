(function(){

  function apply_viewport(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)   ) {

      var ww = window.screen.width;
      var mw = 800; // min width of site
      var ratio =  ww / mw; //calculate ratio
      var viewport_meta_tag = document.getElementById('viewport');
      if( ww < mw){ //smaller than minimum size
        viewport_meta_tag.setAttribute('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=no, width=' + mw);
      }
      else { //regular size
        viewport_meta_tag.setAttribute('content', 'initial-scale=1.0, maximum-scale=1, minimum-scale=1.0, user-scalable=yes, width=' + ww);
      }
    }
  }

  //ok, i need to update viewport scale if screen dimentions changed
  window.addEventListener('resize', function(){
    apply_viewport();
  });

  apply_viewport();

}());
/*
window.onerror=function(a,b,c){alert(a+b+c);}
function setscale()
{
var scale=Math.min(innerWidth,1000)/1000;
var transform= "scale(" + scale + ") translateX(-"+(scale*100/4)+"%) translateY(-"+(scale*100/4)+"%)";
var keys=["transform","-o-transform","-webkit-transform","-moz-transform"];
for(var i=0;i<keys.length;i++)
document.body.style[keys[i]]=transform;
}
window.addEventListener("resize",setscale);
window.addEventListener("DOMContentLoaded",setscale);*/