$(function () {
  var nav = $('#header-navbar');

  $(window).on('scroll',function () {
    if ($(this).scrollTop() > 90) {
      nav.addClass("solid-black");
    } else {
      nav.removeClass("solid-black");
    }
  });

  let breakpoint = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }

  //slider features
  $('.features__cards').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 4,
    dots: false,
    infinite: false,
    draggable: false,
    responsive: [
      {
        breakpoint: breakpoint.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
        }
      },
      {
        breakpoint: breakpoint.lg,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true
        }
      }

    ]
  });


// page slider
  $('.slick_slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    infinite: true,
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: breakpoint.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: breakpoint.md,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: breakpoint.lg,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: breakpoint.xl,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });


  //slider pricing
  $('.cards__body').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 4,
    dots: false,
    infinite: false,
    draggable: false,
    responsive: [
      {
        breakpoint: breakpoint.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
        }
      },
      {
        breakpoint: breakpoint.lg,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true
        }
      }

    ]
  });


  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add('was-validated')
          }, false)
        })
  })()

  $( '#navbarSupportedContent a' ).on('click', function(){
    $('#navbarSupportedContent').removeClass('show');
  });

})