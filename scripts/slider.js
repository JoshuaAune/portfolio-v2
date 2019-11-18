$(document).ready(function(){
  var prevSlide;
  var nextSlide;
  var indexNum;
  // PROJECT SLIDER
  function slide(next){

    prevSlide = $('.active-slide');
    // NEXT SLIDE
    if(next === "next"){
      nextSlide = prevSlide.next();
      if(nextSlide.length < 1){

        nextSlide = $('.index1');
      }
    // PREVIOUS SLIDE
    }else if(next === "prev"){
      nextSlide = prevSlide.prev();
      if(nextSlide.length < 1){

        nextSlide = $('.index4');
      }
    // IF SELECTION MADE FROM SQUARES
    }else {
      switch(next[0].id){
        case "one":
          nextSlide = $('.index1');
          break;
        case "two":
          nextSlide = $('.index2');
          break;
        case "three":
          nextSlide = $('.index3');
          break;
        case "four":
          nextSlide = $('.index4');
          break;
      }
    }
    prevSlide.removeClass('active-slide');
    nextSlide.addClass('active-slide');

    var id = nextSlide[0].id;
    var title = $('.project-title')
    var a = $('.mobile-project-link')
    $('.selection').removeClass('active-selection');

    // SWITCHES DESTINATION FOR MOBILE PROJECT LINK AND PROJECT TITLE
    switch(id){
      case "index1":
        title.html("Imperial Motion Clone")
        a.prop("href", "https://joshuaaune.github.io/imperial-motion-clone/#/home")
        $('#one').addClass('active-selection')
        break;
      case "index2":
        title.html("Monk & Mongoose Clone")
        a.prop("href", "http://138.197.72.80/")
        $('#two').addClass('active-selection')
        break;
      case "index3":
        title.html("Everest Builders")
        a.prop("href", "https://joshuaaune.github.io/Everest-Builders/#!/home")
        $('#three').addClass('active-selection')
        break;
      case "index4":
        title.html("Diabolical Records")
        a.prop("href", "http://diabolicalrecords.com/about/")
        $('#four').addClass('active-selection')
        break;
      default :
    }
  }
  // TRIGGERS NEXT SLIDE VIA NEXT/PREV BUTTONS OR SELECTIONS SQUARES
  $('.next').click(function(){
    slide('next');
  });

  $('.prev').click(function(){
    slide('prev');
  });

  $('.selection').click(function(){
    slide($(this));

  })
})
