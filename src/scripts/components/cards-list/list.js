import './list.css';

const addList = (restaurants) => {
  const listContainer = document.querySelector('.list-container');
  listContainer.innerHTML = '';

  restaurants.forEach((restaurant) => {
    const {
      name, pictureId, city, rating,
    } = restaurant;

    const cardItem = document.createElement('div');
    cardItem.classList.add('card-item');

    cardItem.innerHTML = `
      <img class='card-item__image' src='${pictureId}' alt='restaurant'>
      <div class='card-item__info'>
          <h2>${name}</h2>
          <h3>${city}</h3>
          <h4>Rating: ${rating}</h4>
      </div>
    `;

    listContainer.appendChild(cardItem);
  });
};

export default addList;
