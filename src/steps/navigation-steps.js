const { Given, When, Then } = require("@cucumber/cucumber");
const navigation = require("../methods/navigation-methods.js");
const { t, Selector } = require("testcafe");

Given('I am on the homepage', async function () {
    await navigation.onHomepage();
});

When ('I naviagate to my account page', async function () {
    await t
        .click(Selector('[id="accountUserAction"]'))
})



