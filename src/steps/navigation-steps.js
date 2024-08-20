const { Given, When, Then } = require("@cucumber/cucumber");
const navigation = require("../methods/navigation-methods.js");
const { t, Selector } = require("testcafe");

Given('I am on the homepage', async function () {
    await navigation.onHomepage();
});
Given('I am on the UK homepage', async function () {
    await navigation.onUkHomepage();
})
Given('I am on the IT homepage', async function () {
    await navigation.onItHomepage();
})
When ('I navigate to my account page', async function () {
    await navigation.getMyAccountPage();
})



