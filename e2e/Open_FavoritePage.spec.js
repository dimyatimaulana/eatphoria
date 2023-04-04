/* eslint-disable no-undef */
Feature('Open Favorite Page');

Scenario('Showing List of Liked Restaurants', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.menu__favorite');
  I.click('.menu__favorite');
  I.waitForElement('.favorite');
  I.seeElement('.favorite');
});
