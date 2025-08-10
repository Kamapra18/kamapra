document.addEventListener("DOMContentLoaded", function () {
  const hari = document.querySelector(".hari");
  const jam = document.querySelector(".jam");
  const menit = document.querySelector(".menit");
  const detik = document.querySelector(".detik");
  const countdownDisplay = document.getElementById("countdown-display");
  const celebrationMessage = document.getElementById("celebration-message");

  function addZero(data) {
    return data < 10 ? "0" + data : data;
  }

  let countDownDate = new Date("Aug 17, 2025 00:00:00").getTime();

  let countdownInterval = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(countdownInterval);

      countdownDisplay.style.display = "none";
      celebrationMessage.style.display = "block";
      celebrationMessage.classList.add("celebration");

      return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hari.innerHTML = addZero(days);
    jam.innerHTML = addZero(hours);
    menit.innerHTML = addZero(minutes);
    detik.innerHTML = addZero(seconds);
  }, 1000);

  let now = new Date().getTime();
  let distance = countDownDate - now;

  if (distance > 0) {
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hari.innerHTML = addZero(days);
    jam.innerHTML = addZero(hours);
    menit.innerHTML = addZero(minutes);
    detik.innerHTML = addZero(seconds);
  }
});
