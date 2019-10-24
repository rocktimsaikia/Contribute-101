const countDownDate = new Date('Oct 31, 2019 12:00:00').getTime();

const numberFormat = n => `0${n}`.slice(-2);
// Update the count down every 1 second
const x = setInterval(() => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = numberFormat(days);
  document.getElementById('hours').innerHTML = numberFormat(hours);
  document.getElementById('min').innerHTML = numberFormat(minutes);
  document.getElementById('sec').innerHTML = numberFormat(seconds);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown').innerHTML = 'EXPIRED';
  }
}, 1000);

// scrolling down to the bottom of the page on clicking the 'Go to bottom' button
const scrollDownButton = document.querySelector('#scroll_down button');

scrollDownButton.addEventListener('click', () => {
  window.scroll({
    top: document.body.clientHeight,
    behavior: 'smooth',
  });
});

// scrolling up to the top of the page on clicking the 'Go to top' button
const scrollUpButton = document.querySelector('#scroll_up button');

scrollUpButton.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});
