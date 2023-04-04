/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('Daftar masih kosong');

  I.amOnPage('/');
  I.waitForElement('.card-item__info a');
  I.seeElement('.card-item__info a');

  const firstRestaurant = locate('.card-item__info a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurants');
  const likedRestaurantName = await I.grabTextFrom('.card-item__info a');

  // membandingkan apakah sama atau tidak
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click('.card-item__info a');

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Daftar masih kosong');
});
