const { Selector, t } = require('testcafe');
function getRoutePicker() {
    return Selector('div').withAttribute('data-testid',"toggle-switch").child(1)
}

function getReturnRoutePicker(){
    return Selector('div').withAttribute('data-testid',"toggle-switch").child(0)

}
  
async function getRoute() {
    return Selector('[data-testid="search-input"]')
}

async function getReturnRoute(){
    return Selector ('[data-testid="return-route-display"]')
}
module.exports = {

    selectRoute: async function (leg, route) {

        await t
            .typeText(await getRoute(), " ") //type a space first as we sometimes have issues where the first type text doesn't register
            .typeText(await getRoute(), route)
            .click(await getRoute())
        if (leg === "return"){
            return await t
                .expect(Selector(".route_list h5").exists).notOk('Routes drop down not loaded', { timeout: 500000 })
                .expect(getReturnRoutePicker().exists).ok('Correct route loaded', { timeout: 10000 })
                .click(getReturnRoutePicker(), { speed: 0.01 }) //slow down click to ensure it is registered
        }
        await t
            .expect(Selector(".route_list h5").exists).notOk('Routes drop down not loaded', { timeout: 500000 })
            .expect(getRoutePicker().exists).ok('Correct route loaded', { timeout: 10000 })
            .click(getRoutePicker(), { speed: 0.01 }) //slow down click to ensure it is registered
    },
    selectReturnRoute: async function (route) {
        await t 
            .typeText(await getReturnRoute(), " ") //type a space first as we sometimes have issues where the first type text doesn't register
            .typeText(await getRoute(), route)
            .click(await getRoute())
    },
    clickSearch: async function () {
        await t.click(Selector('button').withAttribute('data-testid', 'button-search'));
    },
    clickDifferentDetails: async function () {
        await t.click(Selector('[data-testid="checkbox-button-different-details"]'));
    }
}