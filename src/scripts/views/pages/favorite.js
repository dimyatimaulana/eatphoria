import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createFavoriteRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class='content__favourite'>
        <h2 class="content__heading">Your Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants"></div>
    </div>
    `;
  },

  async afterrender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
        <h3 style='padding: 10em'>Daftar masih kosong</h3>
      `;
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createFavoriteRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
