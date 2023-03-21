import addList from '../cards-list/list';
import about from '../about/about';

const addMain = (restaurants) => {
  const mainContainer = document.querySelector('.main');
  mainContainer.innerHTML = `
    <div class="jumbotron">
      <div class="jumbotron__text">
        <h1>Mari temukan restoran kesukaan Anda</h1>
        <p>Memilih restaurant yang sesuai dengan selera dapat meningkatkan tingkat kebahagiaan seseorang</p>
      </div>
    </div>
    <div class="search-bar"></div>
    <div id="list">
      <h2 class="h2">Explore Restaurant</h2>
      <div tabindex="0" class="list-container"></div>
    </div>
    <div id="about">
      <h2 class="h2">About</h2>
      <div class="about-container"></div>
    </div>
  `;
  document.addEventListener('DOMContentLoaded', addList(restaurants));
  document.addEventListener('DOMContentLoaded', about);
};

export default addMain;
