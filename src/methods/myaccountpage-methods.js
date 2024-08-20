const { Selector, t } = require('testcafe');

module.exports = {
    enterIncorrectDetails: async function () {
        const emailInput = (Selector('[type="email"]'))
        const bookingRefInput = (Selector('[name="BookingReference"]'))
        await t 
            .typeText(emailInput, 'randemail')
            .typeText(bookingRefInput, 'randomref123')
    },
    clickManageBooking: async function () {
        await t
            .click(Selector('[data-qa="manage-booking-button"]'))
    },
    checkErrorMessage: async function () {
        await Selector('label').withAttribute('id', 'BookingReference-error').withText("Your booking reference number is invalid")
    }

}
