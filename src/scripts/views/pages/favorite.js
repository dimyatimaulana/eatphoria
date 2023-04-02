import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import addList from '../../components/cards-list/list';

import '../../../styles/favorite.css';

const Favorite = {
  async render() {
    return `
    <div class='favorite'>
        <h2 class="content__heading h2">Your Favorite Restaurant</h2>
        <div id="restaurants" class="list-container"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();

    const restaurantsContainer = document.querySelector('.list-container');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
      <h3 style='padding: 10em'>Daftar masih kosong</h3>
      `;
    } else {
      document.addEventListener('DOMContentLoaded', addList(restaurants));
    }
  },
};

export default Favorite;
