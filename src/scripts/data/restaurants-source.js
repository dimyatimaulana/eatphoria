import ENDPOINT from '../globals/api-endpoint';

const axios = require('axios');

class RestaurantSource {
  static async homeList() {
    return (
      axios.get(ENDPOINT.HOME)
        .then((response) => response.data.restaurants)
    );
  }

  static async homeList2() {
    const response = await fetch(ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async homeList3() {
    try {
      const response = await axios.get(ENDPOINT.HOME);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  static async detailResto(id) {
    return (
      axios.get(ENDPOINT.DETAIL(id))
        .then((response) => response.data.restaurant)
    );
  }

  static async addReview(dataInput) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataInput),
    };

    const response = await fetch(ENDPOINT.REVIEW, options);
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }

  static async addReview2(dataInput) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataInput),
    };
    const { data } = await axios.post(ENDPOINT.REVIEW, options);

    return data.customerReviews;
  }
}

export default RestaurantSource;
