import RestaurantSource from '../../data/restaurants-source';
// eslint-disable-next-line no-unused-vars
import { createRestaurantItemTemplate, createSkeletonRestaurantTemplate } from '../templates/template-creator';
import addList from '../../components/cards-list/list';
import about from '../../components/about/about';

const Home = {
  async render() {
    return `
    <div class="jumbotron">
        <div class="jumbotron__text">
        <h1>Mari temukan restoran kesukaan Anda</h1>
        <p>Memilih restaurant yang sesuai dengan selera dapat meningkatkan tingkat kebahagiaan seseorang</p>
        </div>
    </div>
    <div class="search-bar"></div>
    <div id="list">
        <h2 class="h2">Explore Restaurant</h2>
        <div class="list-container">
            ${createSkeletonRestaurantTemplate(20)}
        </div>
    </div>
    <div id="about">
        <h2 class="h2">About</h2>
        <div class="about-container"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.homeList();
    console.log(restaurants);
    document.addEventListener('DOMContentLoaded', addList(restaurants));

    document.addEventListener('DOMContentLoaded', about);
  },
};

export default Home;
