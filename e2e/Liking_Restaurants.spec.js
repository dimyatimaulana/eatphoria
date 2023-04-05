/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('Daftar masih kosong');
});

Scenario('liking one restaurants', async ({ I }) => {
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
  I.seeElement('.card-item');
  const likedRestaurantName = await I.grabTextFrom('.card-item__info a');

  // membandingkan apakah sama atau tidak
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
