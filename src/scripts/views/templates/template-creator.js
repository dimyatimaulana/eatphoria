import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant__name">
        <h2>${restaurant.name}</h2>
    </div>
    <div class="restaurant__info">
        <img class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name}" />
        <div>
            <h4>Rating</h4>
            <p>${restaurant.rating}</p>
            <h4>City</h4>
            <p>${restaurant.city}</p>
            <h4>Address</h4>
            <p>${restaurant.address}</p>
        </div>
    </div>
    <div class="restaurant__detail">
      <div class="restaurant__description">
        <h3>Description</h3>
          <p>${restaurant.description}</p>
      </div>
      <div class="restaurant__menus">
        <div>
          <h3>Foods</h3>
          <ul class="foods">${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`)}</ul>
        </div>
        <div>
          <h3>Drinks</h3>
          <ul class="drinks">${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`)}</ul>
        </div>
      </div>
      <div class="restaurant__reviews">
        <h3 style="padding-bottom: 1em">Customer Reviews</h3>
        ${restaurant.customerReviews.map((reviewer) => `<div id="prevReviewContainer">
          <p>${reviewer.name}</p>
            <p>${reviewer.review}</p>
        </div>`)}<br>
        <div id="newReviewContainer"></div>
        <h3 style="padding-bottom: 1em; padding-top: 1em">Add Review</h3>
        <form id="formReview">
          <input type="text" id="reviewerName" placeholder="Name"><br><br>
          <input type="text" id="customerReview" placeholder="Write your feelings"><br><br>
          <button type="submit" id="submitButton">Submit</button>
        </form>
      </div>
    </div>

`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="card-item" tab-index = 0>
    <img class='card-item__image' src='${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}' alt='restaurant'>
    <div class='card-item__info'>
        <a href="/#/detail/${restaurant.id}">
          <h2>${restaurant.name}</h2>
        </a>
        <h3>${restaurant.city}</h3>
        <h4>Rating: ${restaurant.rating}</h4>
    </div>
  </div>
`;

const createFavoriteRestaurantItemTemplate = (restaurant) => `
  <div class="card-item" tab-index = 0>
    <img class='card-item__image' src='${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}' alt='restaurant'>
    <div class='card-item__info'>
        <a href="/#/detail/${restaurant.id}">
          <h2>${restaurant.name}</h2>
        </a>
        <h3>${restaurant.city}</h3>
        <h4>Rating: ${restaurant.rating}</h4>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="card-item" tab-index = 0>
        <img class='card-item__image' width="100%" height="350px" src='./images/placeholder.png' alt='restaurant'>
        <div class='card-item__info'>
            <h2 class="skeleton">Restaurant Name</h2>
            <h3 class="skeleton">City</h3>
            <h4 class="skeleton">Rating: ***</h4>
        </div>
      </div>
    `;
  }
  return template;
};

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createFavoriteRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createSkeletonRestaurantTemplate,
};
