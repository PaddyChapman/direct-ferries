const { Selector, t } = require('testcafe');

module.exports = {
    topDestinationsPresent: async function () {
        await t
        .expect(Selector('.df-dom-destinations-content').exists).ok()
    },
    offersPresent: async function () {
        await t
        .expect(Selector('.df-dom-offers-head').exists).ok()
        .expect(Selector('#df-dom-cards-block-full').exists).ok()
        .expect(Selector('#df-dom-cards-block-full').find('li').count).gte(3)
    },
    popularOperatorsPresent: async function () {
        await t
        .expect(Selector('.df-dom-operators').exists).ok()
        .expect(await Selector('.df-dom-operators').find('.df-operator-img').count).gte(16)
    },
    tipsAndInfoPresent: async function () {
        await t
            .expect(Selector('.class="df-dom-articles"').exists).ok()
            .expect(Selector('.class="df-dom-articles"').find('.cdf-dom-full-card__news').count).gte(2)
    },
    popularRoutesPresent: async function () {
        await t 
        .expect(Selector('.class="df-dom-popular-routes"').exists).ok()
        .expect(Selector('.class="df-dom-articles"').find('li').count).gte(16)    
    }
}
