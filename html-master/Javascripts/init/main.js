(function ($) {
  $(document).ready(function () {
    $("body").addClass("loaded");
  });

  /*
    Slick Slider
  */

  /* Hero Site */
  var heroslider = $(".heroslider");
  heroslider.on("init", function () {
    heroslider.addClass("loaded");
  });
  heroslider.slick({
    autoplay: true,
    adaptiveHeight: false,
    focusOnSelect: true,
    swipeToSlide: true,
    slidesToShow: 1,
    autoplaySpeed: 6000,
    fade: true,
    infinite: true,
    speed: 2000,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: false,
    arrows: false,
  });

  /* Functions Video */
  function videoPlayToEndThenNextSlide(currentSlide) {
    let current_slide = $(".slick-slide").eq(currentSlide);
    let current_video = current_slide.find("video");

    if (current_video.length) {
      current_video[0].play();
      heroHomeSlider.slick("slickPause");

      current_video[0].onended = function () {
        heroHomeSlider.slick("slickPlay");
        heroHomeSlider.slick("slickNext");
        current_video[0].currentTime = 1;
      };
    }
  }

  function videoPauseBeforeChange(currentSlide) {
    let current_slide = $(".slick-slide").eq(currentSlide);
    let current_video = current_slide.find("video");
    if (current_video.length) {
      current_video[0].pause();
      current_video[0].currentTime = 1;
    }
  }

  /**
   * Heroslider Home
   */
  var heroSliderHome = document.querySelector(".heroslider.home");
  changeCaption = function() {
    const heroslider = heroSliderHome;
    var video = heroslider.querySelector('video');
    var next_event = 1;

    video.addEventListener('timeupdate', function() {
      //console.log('video time: ' + video.currentTime);
      
      // Zukunftsorientiert im Erd- & Tiefbau
      if(next_event == 1 && video.currentTime <= 4.5 ){        
        heroslider.querySelector('.content > div.active').classList.remove('active');
        heroslider.querySelector('.caption-1').classList.add('active');
        next_event = 2;
      }

      //Langarmbagger
      if(next_event == 2 && video.currentTime > 4.5 && video.currentTime <= 11){    
        heroslider.querySelector('.content > div.active').classList.remove('active');
        heroslider.querySelector('.caption-2').classList.add('active');
        next_event = 3;
      }

      // Teleskopbagger
      if(next_event == 3 && video.currentTime > 11 && video.currentTime <= 17.5){    
        heroslider.querySelector('.content > div.active').classList.remove('active');
        heroslider.querySelector('.caption-3').classList.add('active');
        next_event = 4;
      }

      // Sportplatzbau
      if(next_event == 4 && video.currentTime > 17.5 && video.currentTime <= 20.5){    
        heroslider.querySelector('.content > div.active').classList.remove('active');
        heroslider.querySelector('.caption-4').classList.add('active');
        next_event = 5;
      }

      // Gemeinsam grosses bewegen
      if(next_event == 5 && video.currentTime > 20.5){        
        heroslider.querySelector('.content > div.active').classList.remove('active');
        heroslider.querySelector('.caption-5').classList.add('active');
        next_event = 1;
      }            
    });    
  }  

  if(heroSliderHome) {
    changeCaption();
  }

  /* -- */

  /* Content-Slider */
  var slider = $(".content-slider");
  slider.on("init", function () {
    slider.addClass("loaded");
  });
  slider.slick({
    autoplay: false,
    arrows: false,
    adaptiveHeight: true,
    dots: true,
    focusOnSelect: true,
    swipeToSlide: true,
    slidesToShow: 1,
    autoplaySpeed: 6000,
    fade: false,
    infinite: true,
    speed: 600,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  /* Content-Slider show 3 items */
  var slider = $(".content-slider-3");
  slider.on("init", function () {
    slider.addClass("loaded");
  });
  slider.slick({
    prevArrow:
      '<button class="slick-prev"><span uk-icon="icon: chevron-left; ratio: 4"></span></button>',
    nextArrow:
      '<button class="slick-next"><span uk-icon="icon: chevron-right; ratio: 4"></span></button>',
    autoplay: true,
    arrows: true,
    adaptiveHeight: false,
    dots: false,
    focusOnSelect: true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "160px",
    autoplaySpeed: 4000,
    fade: false,
    infinite: true,
    speed: 600,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          centerPadding: "100px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
    ],
  });

  /*
  wrap for iframe, video, media-responsive  

  media_responsive_items = $(".item-page iframe, .item-page video, .category-desc iframe, .category-desc video");
  media_responsive_items.wrap('<div class="media-responsive">');
*/
})(jQuery);

/*
  UIKit
*/

/* Icons */
/*
UIkit.icon(".slick-prev", {
  icon: "chevron-left",
  ratio: 4,
});

UIkit.icon(".slick-next", {
  icon: "chevron-right",
  ratio: 4,
});
*/

UIkit.icon(".readmore-arrow, .icon-arrow-right", {
  icon: "arrow-right",
  ratio: 1.1,
});

UIkit.icon(".icon-arrow-down", {
  icon: "arrow-down",
  ratio: 1.1,
});

UIkit.icon(".icon-angle-double-left", {
  icon: "chevron-double-left",
  ratio: 1.1,
});

UIkit.icon(".icon-angle-left, .icon-chevron-left", {
  icon: "chevron-left",
  ratio: 1.1,
});

UIkit.icon(".icon-angle-double-right", {
  icon: "chevron-double-right",
  ratio: 1.1,
});

UIkit.icon(".icon-angle-right, .icon-chevron-right", {
  icon: "chevron-right",
  ratio: 1.1,
});

UIkit.icon(".icon-chevron-up", {
  icon: "chevron-up",
  ratio: 1.1,
});

UIkit.icon(".icon-search", {
  icon: "search",
  ratio: 1.1,
});

UIkit.icon(".js-spoiler-title", {
  icon: "plus",
  ratio: 1.2,
});

UIkit.icon(".icon-calendar", {
  icon: "calendar",
  ratio: 1.2,
});

UIkit.icon(".icon-check", {
  icon: "check",
  ratio: 1,
});

UIkit.icon(".icon-copy", {
  icon: "copy",
  ratio: 1,
});

UIkit.icon(".icon-times", {
  icon: "close",
  ratio: 1,
});

UIkit.icon(".icon-code-branch", {
  icon: "refresh",
  ratio: 1,
});

/*
  Tables: add classes, wrap(responsive)
*/
const tables = document.querySelectorAll("table");
tables.forEach((item) => {
  item.classList.add("uk-table", "uk-table-striped");

  const parent = item.parentNode;
  const wrapper = document.createElement("div");
  wrapper.classList.add("uk-overflow-auto");
  parent.insertBefore(wrapper, item);
  wrapper.appendChild(item);
});
/* -- */

/*
  Check view, Observer
*/
const observerOptions = {
  root: null,
  rootMargin: "0% 0% -20% 0%",
  threshold: 0,
};

let observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      //entry.target.classList.remove("active");
    }
  });
};

let observer = new IntersectionObserver(observerCallback, observerOptions);
let observerTargets = document.querySelectorAll(".checkview");
observerTargets.forEach((target) => {
  observer.observe(target);
});

/*
    Header Scrolled
*/
let offset = 200;
let header = ".header";
$(window).scroll(function () {
  if ($(this).scrollTop() > offset) {
    $(header).addClass("scrolled");
  } else {
    $(header).removeClass("scrolled");
  }
});

/*
  Scrollto #
*/
let anchorlink = $("a[href^='#']:not(data-uk-lightbox)");
anchorlink.on("click", function (e) {
  e.preventDefault;
  let $target = $(this).attr("href");
  let $offset = $($target).offset().top;
  $("html, body").stop().animate({ scrollTop: $offset }, 400, "swing");
});

/*
  GSAP
*/

/*
gsap.registerPlugin(ScrollTrigger);

// Animationen 
const animData = {
  "anim-opac-on-05": {opacity: 0, duration: 0.5},
  "anim-slide-pos-l-1": {x: -100, duration: 1},
  "anim-slide-pos-r-1": {x: 100, duration: 1},
  "anim-rot-180-1": {rotation: -180, duration: 1}
};

// Klassen zuweisen 
AssignAnimClasses = function(){
  let article_h4 = document.querySelectorAll('.item-page.gsap h4');
  for(let [index, val] of article_h4.entries()){
    if(index%2 == 0){
      val.classList.add('anim-opac-on-05', 'anim-slide-pos-l-1'); 
    } else {
      val.classList.add('anim-opac-on-05', 'anim-slide-pos-r-1');
    }
  };
}
AssignAnimClasses();

// trigger anim 
for (let p in animData) {
  gsap.utils.toArray("." + p).forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        toggleActions: "restart none none none"
      },
      ...animData[p]
    });
  });
}
*/

/*
  GSAP matchMedia
*/
/*
animateContent = function(){
  let contentbox = document.querySelectorAll('.blog-section:not(.nofx) .item-content');
  contentbox.forEach(function(box){
    gsap.from(box, {
      scrollTrigger: {
        trigger: box,
        start: "top bottom",
        end: "top top",
        scrub: 1
      },
      opacity: 0,
      y: 200
    });
  })
}

// animate >= 980
let matchMedia = gsap.matchMedia();
matchMedia.add("(min-width: 980px)", () => {
  animateContent();
  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
  };
});
*/



// new js after localise
jQuery(document).ready(function(){


  // set back

  jQuery('.set-back').each(function () {

    var SETBACK = jQuery(this).find('img:not(.no-set)').attr('src');
    jQuery(this).css('background-image', 'url(' + SETBACK + ')');

  });


  // navbar toggler
  jQuery('.hamburger').on('click', function () {
    jQuery('body').toggleClass('no-scroll');
    jQuery('#bg-mainmenu').toggleClass('show');
  });


  // gallery carousel
  jQuery('.galerie .the-carousal').slick({
    centerMode: true,
    centerPadding: '377px',
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    draggable: false
  }); 
  jQuery('[data-fancybox="gallery"]').fancybox({
    loop: true,
    buttons: [
      "zoom",
      //"share",
      //"slideShow",
      "fullScreen",
      //"download",
      // "thumbs",
      "close"
  ],
  afterClose : function(){
    jQuery('body').removeClass('compensate-for-scrollbar');
    instance.close();
  },
   
  });
  
  // jQuery('.galerie .the-carousal .slick-cloned a').removeAttr('data-fancybox'); 
  // // jQuery('.galerie .the-carousal .slick-cloned a').click(function(){
  // //   jQuery('.galerie .the-carousal .slick-cloned a').attr('data-fancybox-trigger', 'gallery');
  // // });
  
 
});
// new js after localise
