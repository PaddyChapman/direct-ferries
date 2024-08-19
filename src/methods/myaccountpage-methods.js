const { Selector, t } = require('testcafe');

module.exports = {
    enterIncorrectDetails: async function () {
        await t 
            .typeText(Selector('[type="email"]', "randemail@google.com"))
            .typeText(Selector('[name="BookingReference"]', "randomref123"))
    },
    clickManageBooking: async function () {
        await t
            .click(Selector('[data-qa="manage-booking-button"]'))
    },
    checkErrorMessage: async function () {
        await Selector('label').withAttribute('id', 'BookingReference-error').withText("Your booking reference number is invalid")
    }

}
