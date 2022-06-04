$(function () {

  // sticky menu start
  $(window).scroll(function () {
    var sticky = $(this).scrollTop()
    //this is for sticky menu
    if (sticky > 50) {
      $(".menu-bar").addClass("sticky-menu")
    } else {
      $(".menu-bar").removeClass("sticky-menu")
    }
  });
  // sticky menu end

  //counter up js start
  $('.counter').counterUp({
    delay: 20,
    time: 1000
  });
  //counter up js end

  //banner slide start
  $('.banner-slide-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
  });
  //banner slide end

  //about slide start
  $('.about-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      // for small device
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
          centerPadding: '0px',
        }
      },
      // for xtra small device
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
          centerPadding: '0px',
        }
      },
    ]
  });
  //about slide end

  //team slide start
  $('.team-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      // for large device
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: '0px',
        }
      },
      // for medium device
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
          centerPadding: '0px',
        }
      },
      // for small device
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
          centerPadding: '0px',
        }
      },
      // for xtra small device
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
          centerPadding: '0px',
        }
      },
    ]
  });
  //team slide end

  //comment slide start
  $('.comment-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false,
    prevArrow: '.comment-left-icon-click',
    nextArrow: '.comment-right-icon-click'
  });
  //comment slide end

  //back to top button start

  //back to to button animation
  $(window).scroll(function () {
    var sticky = $(this).scrollTop()
    if (sticky > 50) {
      $(".back-to-top").fadeIn(300)
    } else {
      $(".back-to-top").fadeOut(300)
    }
  });
  //back to top button click start
  $(".back-to-top").click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 2000)
  })
  //back to top button  end
})