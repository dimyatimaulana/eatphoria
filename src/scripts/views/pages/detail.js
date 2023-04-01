import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurants-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import AddReview from '../../utils/add-review';
import FavouriteRestoIdb from '../../data/favorite-resto-idb';

import '../../../styles/detail.css';

const Detail = {
  async render() {
    return `
      <div id='detail-restaurant'></div>
      <div id='likeButtonContainer'></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailResto(url.id);

    const detailPageContainer = document.querySelector('#detail-restaurant');
    detailPageContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavouriteRestoIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });

    const btnSubmit = document.querySelector('#submitButton');
    const name = document.querySelector('#reviewerName');
    const review = document.querySelector('#customerReview');

    btnSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      if (name.value === '' || review.value === '') {
        // eslint-disable-next-line no-alert
        alert('Form tidak boleh kosong');
      } else {
        AddReview(url, name.value, review.value);
        name.value = '';
        review.value = '';
      }
    });
  },
};

export default Detail;
