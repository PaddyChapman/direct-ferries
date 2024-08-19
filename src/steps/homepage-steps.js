const { Given, When, Then } = require("@cucumber/cucumber");
const homepage = require("../methods/homepage-methods.js");

Then('I see top destinations', async function () {
    await homepage.topDestinationsPresent();
});

Then('I see latest offers', async function () {
    await homepage.offersPresent();
});

Then('I see popular operators', async function () {
    await homepage.popularOperatorsPresent();
});

Then('I see tips and information', async function () {
    await homepage.tipsAndInfoPresent();
})

Then('I can see popular routes', async function () {
    await homepage.popularRoutesPresent();
})