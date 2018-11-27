
Feature('Sanity1');

Scenario('test login', (I,loginPage) => {
    I.amOnPage('/ehi/core/login');
    loginPage.sendForm('test1@test.com1','Qwer.1234');
    I.see('According to our records, you do not have any Applications in Process.');
});
