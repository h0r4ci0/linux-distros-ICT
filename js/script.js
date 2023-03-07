const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function () {
  window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
  alert("🎶 Never gonna give you up\nNever gonna let you down...🎶 ");
});

const infoButton = document.getElementById("info");
infoButton.addEventListener("click", function () {
  window.location.href = "pages/info.html";
});

const contactButton = document.getElementById("contact");
contactButton.addEventListener("click", function () {
  window.location.href = "pages/contact.html";
});

const redirectButton = document.getElementById("redirect");
redirectButton.addEventListener("click", function () {
  window.location.href = "pages/aboutme.html";
});

// Set the date we're counting down to
var countDownDate = new Date().getTime() + (105 * 24 * 60 * 60 * 1000) + (2 * 60 * 60 * 1000) + (6 * 60 * 1000);

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
  
  // Calculate the distance between now and the countdown date
  var distance = countDownDate - now;
  
  // Calculate days, hours, minutes and seconds left
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the countdown in the HTML
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  // If the countdown is finished, show an alert
  if (distance < 0) {
    clearInterval(x);
    alert("¡Ha llegado el día!");
  }
}, 1000);
