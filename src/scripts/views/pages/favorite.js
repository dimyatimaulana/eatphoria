import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

import '../../../styles/favorite.css';

const Favorite = {
  async render() {
    return `
    <div class='favorite'>
        <h2 class="content__heading">Your Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
        <h3 style='padding: 10em'>Daftar masih kosong</h3>
      `;
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
