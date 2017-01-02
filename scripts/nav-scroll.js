$(document).ready(function(){
  $('.full-header').addClass('hide');
  $('.main-nav').addClass('hide');

  // HIDES DESKTOP HEAD AND NAV WHEN RESIZED SMALLER
  $(window).resize(function(){
    if($(window).width() < 1024){
      $('.full-header').addClass('hide');
      $('.main-nav').addClass('hide');
    }
  })

  $(window).scroll(function(){
    var $window = $(window).height();
    var scrollPosition = $(window).scrollTop();
    var $about = $('#about').offset().top;
    var $projects = $('#projects').offset().top;
    var $skills = $('#skills').offset().top;
    var $contact = $('#contact').offset().top;

    // HIGHLIGHTS CURRENT PAGE POSITION TAB
    if((scrollPosition >= $about)&&(scrollPosition < $projects)){
      $('.mobile-nav-link').removeClass('active-mobile-link');
      $('.about-link').addClass('active-mobile-link');
    }else if((scrollPosition >= $projects)&&(scrollPosition < $skills)){
      $('.mobile-nav-link').removeClass('active-mobile-link');
      $('.project-link').addClass('active-mobile-link');
    }
    else if((scrollPosition >= $skills)&&(scrollPosition < $contact)){
      $('.mobile-nav-link').removeClass('active-mobile-link');
      $('.skills-link').addClass('active-mobile-link');
    }
    else if(scrollPosition >= $contact){
      $('.mobile-nav-link').removeClass('active-mobile-link');
      $('.contact-link').addClass('active-mobile-link');
    }
    
    //HIDES/REVEAL MAIN HEADER WHEN IN CONTENT
    if(scrollPosition >= $window && $(window).width() >= 1024){
      $('.full-header').removeClass('hide');
      $('.main-nav').removeClass('hide');
    }else if(scrollPosition < $window){
      $('.full-header').addClass('hide');
      $('.main-nav').addClass('hide');
    }
  })
})
