// WAITS FOR PAGE TO FULLY LOAD AND THEN FADES OUT LOADING PAGE
var loading = true;
$(document).ready(function(){
  $(window).scroll(function(){
    if(loading){
      $(window).scrollTop(0);
    }
  })
  $('.load').css({
    'transform': 'rotate(0deg)'
  });
  setTimeout(function(){

    $('#loading').fadeOut('slow');
    $(window).scrollTop(0);
    loading = false;


}, 1500)
})
