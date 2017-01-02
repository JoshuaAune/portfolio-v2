// FADES IN/OUT MOBILE NAV
$(document).ready(function(){

  var size = {};
  size.width = $(window).width();
  size.height = $(window).height();
  $(window).resize(function(){
    size.width = $(window).width();
    size.height = $(window).height();
  })

  if(size.width < 1024){
    $nav = $('.mobile-nav')
    $nav.css("opacity", 0);
    var position = $(window).scrollTop();
    $(window).scroll(function(){
      position = $(window).scrollTop();

      if(position > 0){
        opacity = position/25;
        $nav.css("opacity", opacity);
      }
      else if(position > 25){
        $nav.css("opacity", 1);
      }
      else{
        $nav.css("opacity", 0);
      }
    })
  }
})
