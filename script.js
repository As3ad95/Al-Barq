document.addEventListener('DOMContentLoaded', () => {

  /* Sticky header background on scroll */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile nav toggle */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* Drive the hero car silhouette into place once, on load */
  const car = document.getElementById('carSilhouette');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (car) {
    if (reduceMotion) {
      car.classList.add('is-in');
    } else {
      requestAnimationFrame(() => {
        setTimeout(() => car.classList.add('is-in'), 250);
      });
    }
  }

  /* Booking form: sensible date defaults + friendly inline confirmation */
  const form = document.getElementById('bookingForm');
  const pickupDate = document.getElementById('pickupDate');
  const returnDate = document.getElementById('returnDate');
  const note = document.getElementById('bookingNote');

  const today = new Date().toISOString().split('T')[0];
  pickupDate.min = today;
  returnDate.min = today;

  pickupDate.addEventListener('change', () => {
    returnDate.min = pickupDate.value || today;
    if (returnDate.value && returnDate.value < returnDate.min) {
      returnDate.value = returnDate.min;
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const location = document.getElementById('pickupLoc').value;
    note.textContent = `Thanks — we'll confirm a car for ${location} by SMS within 15 minutes.`;
  });

});
