var config = require('../nightwatch.conf.js');

module.exports = {
  beforeEach : function (browser) {
    browser
    .resizeWindow(400, 800)
    .useCss()
    .url('https://jhamilton1986.github.io/whichbingo-tech-test/')
    .waitForElementVisible('.c-mobile-nav')
    .click('.c-mobile-nav')
  },
  
  'Nav accordion opens when selecting a menu category': function(browser) {
    browser
    .useXpath()
    .assert.cssProperty('/html/body/header/div/div/nav/ul/li[1]/div', 'max-height', '0px')      
    .click('/html/body/header/div/div/nav/ul/li[1]')
    .pause(600)
    .assert.cssProperty('/html/body/header/div/div/nav/ul/li[1]/div', 'max-height', '1000px')
    .end();
  },
  
  'Nav closes previous selection and opens new selection': function(browser) {
    browser
    .useXpath()
    .assert.cssProperty('/html/body/header/div/div/nav/ul/li[1]/div', 'max-height', '0px')      
    .click('/html/body/header/div/div/nav/ul/li[1]')
    .pause(600)
    .assert.cssProperty('/html/body/header/div/div/nav/ul/li[1]/div', 'max-height', '1000px')
    .click('/html/body/header/div/div/nav/ul/li[2]')
    .pause(600)
    .assert.cssProperty('/html/body/header/div/div/nav/ul/li[1]/div', 'max-height', '0px')
    .assert.cssProperty('/html/body/header/div/div/nav/ul/li[2]/div', 'max-height', '1000px')
    .end();
  }
};