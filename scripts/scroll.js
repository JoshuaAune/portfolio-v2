
$(document).ready(function() {

  var currentPos = $(window).scrollTop();
  var prevPos = currentPos;
  var currentlyScrolling = false;
  var thisLocation = {
    about: $('#about').offset().top,
    projects: $('#projects').offset().top,
    skills: $('#skills').offset().top,
    contact: $('#contact').offset().top
  }
  // SLOW SCROLLS TO SELECTED LOCATION
  function goTo(here){
    $('html, body').animate({
      scrollTop: here
    }, 1000);
  }

  $(window).scroll(function(){
    currentPos = $(window).scrollTop();
    // DETERMINES WHERE PAGE NEEDS TO SCROLL TO
    if(!currentlyScrolling){
      currentlyScrolling = true;
      // IF SCROLLING DOWN
      if(currentPos > prevPos){
        if(currentPos > 0 && currentPos < thisLocation.about){
          goTo(thisLocation.about);
        }
        else if(currentPos > thisLocation.about && currentPos < thisLocation.projects){
          goTo(thisLocation.projects);
        }
        else if(currentPos > thisLocation.projects && currentPos < thisLocation.skills){
          goTo(thisLocation.skills);
        }
        else if(currentPos > thisLocation.skills && currentPos < thisLocation.contact){
          goTo(thisLocation.contact);
        }
      }
      // IF SCROLLING UP
      else if(currentPos < prevPos){
        if(currentPos < thisLocation.about){
          goTo(0);
        }
        else if(currentPos <= thisLocation.projects && currentPos > thisLocation.about){
          goTo(thisLocation.about);
        }
        else if(currentPos <= thisLocation.skills && currentPos > thisLocation.projects){
          goTo(thisLocation.projects);
        }
        else if(currentPos <= thisLocation.contact && currentPos > thisLocation.skills){
          goTo(thisLocation.skills);
        }
      }
      // TIMEOUT SO IT DOESNT KEEP SCROLLING PAST THE NEXT SECTION IF SCROLL WHEEL IS SCROLLED WHILE PAGE IS ALREADY SCROLLING
      setTimeout(function(){
        currentlyScrolling=false;
        prevPos = currentPos;
      }, 1100);
    }
  })

  // SCROLLS SLOWLY TO ANCHOR SECTIONS
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (!currentlyScrolling && location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      currentlyScrolling = true;

      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        setTimeout(function(){
          prevPos = currentPos;
          currentlyScrolling = false;
        }, 1500)
        return false;
      }
    }
  });
});
