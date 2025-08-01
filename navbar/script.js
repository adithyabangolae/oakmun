const navbar = document.getElementById('navbar');
const sentinel = document.getElementById('sentinel');

new IntersectionObserver(
    ([e]) => {
        if (!e.isIntersecting) {
            navbar.classList.add('dock');
        } else {
            navbar.classList.remove('dock');
        }
    },
    { root: null, threshold: 0 }
).observe(sentinel);

const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

const pageTitle = document.getElementById('pageTitle');

const pageNameMap = {
  'index.html': 'Home',
  'about_us': 'About Us',
  'committees': 'Committees',
  'prizes': 'Prizes',
  'register': 'Register',
  'conference-details': 'Conference Details'
};
