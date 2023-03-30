import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';
// import addMain from './components/main/main';
// import addSearchBar from './components/search-bar/search-bar';
import footer from './components/footer/footer';

import swRegister from './utils/sw-register';

// import data from '../DATA.json';

const app = new App({
  button: document.querySelector('.header__hamburger'),
  drawer: document.querySelector('.header__nav'),
  content: document.querySelector('.main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

document.addEventListener('DOMContentLoaded', footer);

// const { restaurants } = data;
// const filteredRestaurants = restaurants;

// document.addEventListener('DOMContentLoaded', addMain(filteredRestaurants));
// document.addEventListener('DOMContentLoaded', addSearchBar(restaurants, filteredRestaurants));

// const bun = document.querySelector('.header__hamburger');
// const navMenu = document.querySelector('.header__nav');
// const main = document.querySelector('.main');

// bun.addEventListener('click', (event) => {
//   navMenu.classList.add('visible');
//   event.stopPropagation();
// });

// main.addEventListener('click', (event) => {
//   navMenu.classList.remove('visible');
//   event.stopPropagation();
// });
