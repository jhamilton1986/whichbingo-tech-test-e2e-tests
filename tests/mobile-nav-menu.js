var config = require('../nightwatch.conf.js');

module.exports = {
  beforeEach : function (browser) {
    browser
    .resizeWindow(400, 800)
    .url('https://jhamilton1986.github.io/whichbingo-tech-test/')
    .waitForElementVisible('.main-nav');    
  },
  
  'Menu button is visible on mobile': function(browser) {
    browser
    .assert.visible('.c-mobile-nav')
    .end();
  },
  
  'Nav menu opens when menu button is clicked': function(browser) {
    browser
    .assert.cssProperty('.main-nav', 'width', '0px')
    .click('.c-mobile-nav')
    .pause(300)
    .assert.cssProperty('.main-nav', 'width', '300px')
    .end();
  },

  'Nav menu closes when menu button is clicked twice': function(browser) {
    browser
    .click('.c-mobile-nav')
    .pause(300)
    .assert.cssProperty('.main-nav', 'width', '300px')
    .click('.c-mobile-nav')
    .pause(300)
    .assert.cssProperty('.main-nav', 'width', '0px')
    .end();
  },
};