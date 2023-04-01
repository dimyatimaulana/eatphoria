import RestaurantSource from '../data/restaurants-source';

const AddReview = (url, name, review) => {
  const data = {
    id: url.id,
    name,
    review,
  };
  RestaurantSource.addReview(data);

  const reviewContainer = document.querySelector('#newReviewContainer');
  const newReview = `
    <div>
      <p>${name}</p>
      <p>${review}</p>
    </div>
  `;
  reviewContainer.innerHTML += newReview;
};

export default AddReview;
