const countdown = new Date("February 1, 2021 12:00:00").getTime();

let x = setInterval(function() {
  let now = new Date().getTime();

  let distance = countdown - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timeEl = document.getElementById('time');
  timeEl.innerHTML = "<div>" + days + "</div>" +
                     "<div>" + hours + "</div>" +
                     "<div>" + minutes + "</div>" +
                     "<div>" + seconds + "</div>";


  distance < 0 ? clearInterval(x) : timeEl = 'EXPIRED';
}, 1000);