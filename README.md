# WhichBingo Tech Test E2E Tests

### Description
This repository contains End-to-End tests for [WhichBingo Tech Test](https://github.com/jhamilton1986/whichbingo-tech-test). The tests are built using [Nightwatch.js](http://nightwatchjs.org), which runs automated tests in the browser.

### Requirements
- [NodeJS](https://nodejs.org/en/)
- [Java](https://www.java.com/en/download/manual.jsp)
  - Required by [Selenium Webdriver](http://www.seleniumhq.org)
- [Google Chrome](https://www.google.com/chrome/)

### Setup
1. In the root of the project, run `npm i` to install NPM dependencies
1. To run the Selenium WebDriver server that's required by Nightwatch, Java may need to be installed. 
    - If you're on macOS and have [Homebrew](https://brew.sh) installed, you can run `brew update && brew cask install java`
1. In the root of the project, run `npm test`
