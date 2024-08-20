const { Selector, t } = require('testcafe');

module.exports = {
    onHomepage: async function () {
        await t
        .navigateTo('https://www.directferries.de')
        .click(Selector('[data-cky-tag="accept-button"]'));
    },
    onUkHomepage: async function () {
        await t
        .navigateTo('https://www.directferries.co.uk');
    },
    onItHomepage: async function () {
        await t
        .navigateTo('https://www.directferries.it')
        .click(Selector('[data-cky-tag="accept-button"]'));
    },
    getMyAccountPage: async function () {
        await t
        .click(Selector('[id="accountUserAction"]'));
    }
}
