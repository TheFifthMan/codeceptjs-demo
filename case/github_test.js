'use strict'

Feature('My First demo');

Scenario('test something', (I) => {
    I.amOnPage('http://github.com');
    I.see('GitHub');
});
