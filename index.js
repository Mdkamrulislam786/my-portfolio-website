//JAVASCRIPT
//SUBMIT EMAIL
document.querySelector("#form").addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();

  //Get input values
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;

  document.querySelector("#form").reset();
  sendEmail(name, email, message);
}
function sendEmail(name, email, message) {
  Email.send({
    SecureToken: "ba0502ad-ac7d-46ea-819b-dd0cca781986 ",
    Host: "smtp.gmail.com",
    Username: "kamrulislam.ki01@gmail.com",
    Password: "opqkgtuhzqkcdrrb",
    To: "kamrulislam.ki01@gmail.com",
    From: "kamrulislam.ki01@gmail.com",
    Subject: `${name} has sent you a message`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
  }).then((_message) => alert("Mail Sent Succesfully"));
}

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

//JQUERY SECTION

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      $("nav").removeClass("achievers-nav");
      // $(".back-to-top").fadeOut();
    } else {
      $("nav").addClass("achievers-nav");
      // $(".back-to-top").fadeIn();
    }
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    autoplayTimeout: 3000,
  });
});

$(function () {
  new WOW().init();
});

$("body").scrollspy({
  target: "#vesco-menu",
});

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy("refresh");
});


//Form Validation

// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const message = document.getElementById("message");
// const form = document.getElementById("form");
// const error_message = document.getElementById("error_message");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let message;
//   if (name.value.length < 3) {
//     message = "Insert at least 3 char!";
//     error_message.style.padding = "10px";
//     error_message.innerText = message;
//     return false;
//   }
//   return true;
// });
