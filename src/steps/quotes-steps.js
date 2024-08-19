const { Given, When, Then } = require("@cucumber/cucumber");
const quotes = require("../methods/quotes-methods.js");

Given('I wait for quotes to load', async function () {
    await quotes.waitForQuotes();
});

Then('I am viewing route from {string} to {string}', async function (t, [portOut, portRet]) {
    await quotes.checkRouteIsPresent(portOut, portRet);
});

Then('I click the route from {string} to {string}', async function (t, [portOut, portRet]){
    await quotes.clickRoute(portOut, portRet)
});

Then ('I click the outbound vehicle option', async function (t){
    await quotes.clickOutboundVehicleOption();
})

Then ('I click the return vehicle option', async function (t){
    await quotes.clickReturnVehicleOption();
})

Then ('I submit the form', async function (t){
    await quotes.clickSubmitButton()
})