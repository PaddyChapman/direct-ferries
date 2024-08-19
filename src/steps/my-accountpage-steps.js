const { Given, When, Then } = require("@cucumber/cucumber");
const myAccountPage = require("../methods/myaccountpage-methods.js");

And('I enter incorrect details', async function () {
    await myAccountPage.enterIncorrectDetails()
})

And ('I click manage my booking', async function () {
    await myAccountPage.clickManageBooking()
})

Then ('I should see an error message', async function () {
    await myAccountPage.checkErrorMessage()
})