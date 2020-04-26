//JAVASCRIPT
//Video play
let video = document.getElementById("player");

function play1() {
  video.play();
}
function play2() {
  video.pause();
}
let video1 = document.getElementById("player2");

function play3() {
  video1.play();
}
function play4() {
  video1.pause();
}

//Form Validation

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const error_message = document.getElementById("error_message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let message;
  if (name.value.length < 3) {
    message = "Insert at least 3 char!";
    error_message.style.padding = "10px";
    error_message.innerText = message;
    return false;
  }
  return true;
});

//JQUERY SECTION

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      $("nav").removeClass("vesco-nav");
      // $(".back-to-top").fadeOut();
    } else {
      $("nav").addClass("vesco-nav");
      // $(".back-to-top").fadeIn();
    }
  });
});

//Owl-carousol
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
  });
});
//   $(document).ready(function(){
//     $(".logos").owlCarousel({
//         items: 3,
//         autoplay: true,
//         smartSpeed: 1000,
//         loop: true,
//         autoplayHoverPause: true,
//         autoplayTimeout: 3000
//     })
//   });

// $('#play-pause-button').click(function () {
//     var mediaVideo = $("#media-video").get(0);
//     if (mediaVideo.paused) {
//         mediaVideo.play();
//     } else {
//         mediaVideo.pause();
//    }
//  });

$(function () {
  new WOW().init();
});


$('body').scrollspy({
  target: '#vesco-menu'
})

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})