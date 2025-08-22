document.querySelectorAll('.car-year-item-unique input').forEach((radio, index) => {
  radio.addEventListener('change', () => {
    document.querySelectorAll('.car-year-item-unique').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.car-year-list-unique').forEach(el => el.classList.remove('active'));

    radio.closest('.car-year-item-unique')?.classList.add('active');
    radio.closest('.car-year-list-unique')?.classList.add('active');

    document.documentElement.style.setProperty('--index', index);
  });
});

const items = document.querySelectorAll('.car-year-item-unique');
document.querySelector('.car-year-list-unique').style.setProperty('--items', items.length);

items.forEach((el, i) => {
  el.style.setProperty('--i', i);
});
// ---------- TOGGLE BAR

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');
  
const validate = (e) => {
  e.preventDefault();
 
  if (name.value.length < 3) {
    errorElement.innerHTML = 'Your name should be at least 3 characters long.';
    return false;
  } 
  
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  } 

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'Please write a longer message.';
    return false;
  }

  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  return true;

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);

const cards = document.querySelectorAll('.timeline-component');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  observer.observe(card);
});

