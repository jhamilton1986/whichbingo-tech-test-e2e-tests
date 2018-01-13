var config = require('../nightwatch.conf.js');

module.exports = {
  beforeEach : function (browser) {
    browser
    .url('https://jhamilton1986.github.io/whichbingo-tech-test/')
    .waitForElementVisible('body');    
  },
  
  'Assert Title': function(browser) {
    browser
    .assert.title('WhichBingo Tech Test')
    .end();
  },
  
  'Assert Menu Button Is Not Visible On Desktop': function(browser) {
    browser
    .assert.hidden('.c-mobile-nav')
    .end();
  }
};