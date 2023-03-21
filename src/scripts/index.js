/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import addMain from './components/main/main';
import addSearchBar from './components/search-bar/search-bar';
import footer from './components/footer/footer';

import data from '../DATA.json';

const { restaurants } = data;
const filteredRestaurants = restaurants;
console.log(filteredRestaurants);

document.addEventListener('DOMContentLoaded', addMain(filteredRestaurants));
document.addEventListener('DOMContentLoaded', addSearchBar(restaurants, filteredRestaurants));
document.addEventListener('DOMContentLoaded', footer);

const bun = document.querySelector('.header__hamburger');
const navMenu = document.querySelector('.header__nav');
const main = document.querySelector('.main');

bun.addEventListener('click', (event) => {
  navMenu.classList.toggle('visible');
  event.stopPropagation();
});

main.addEventListener('click', (event) => {
  navMenu.classList.remove('visible');
  event.stopPropagation();
});
