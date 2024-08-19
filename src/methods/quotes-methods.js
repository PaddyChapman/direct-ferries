const { Selector, t } = require('testcafe');

async function checkForRightRoute(portOut, portRet) {
    for (let i = 0; i < await Selector('[data-testid="result-section-0"]').count; i++) {
        let isRightQuote = await Selector('[data-testid="result-section-0"]', { timeout: 50 }).child(i).withText(portOut).withText(portRet).visible
        if (isRightQuote) {
            return true;
        }
    }
    return false;
}
async function checkOutboundRoute(portOut){
    await Selector('input').withAttribute('id', 'txtrouteout').withText(portOut)
}
async function checkReturnRoute(portRet){
    await Selector('input').withAttribute('id', 'txtrouteret').withText(portRet)
}

module.exports = {
    waitForQuotes: async function () {
        await t
            .expect(Selector('.opLoader').visible).notOk('Quotes haven\'t loaded', { timeout: 10000 })
        await t
            .expect(Selector('#divQuotesContainer').visible).ok('Quotes loaded', { timeout: 10000 })
    },
    checkRouteIsPresent: async function(portOut, portRet){
        await checkOutboundRoute(portOut)
        await checkReturnRoute(portRet)

    },
    clickRoute: async function (portOut, portRet) {
        const routeSelectorId = (portOut + '-' + portRet)
        await t.click(Selector('button').withAttribute('data-testid', routeSelectorId))
        
    },
    clickOutboundVehicleOption: async function () {
        await t.click(Selector('[data-testid="outbound-vehicle-display'))
        await t.click(Selector('[data-testid="vehicle-list-type--1"]'))
    },
    clickReturnVehicleOption: async function () {
        await t.click(Selector('[data-testid="return-vehicle-display'))
        await t.click(Selector('[data-testid="vehicle-list-type--1"]'))
    },
    clickSubmitButton:async function () {
        await t.click(Selector('[data-testid="button-submit"]'))
    }
}
