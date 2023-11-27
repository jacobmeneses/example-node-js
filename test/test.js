const assert = require('assert');
const { getInterest } = require('../src/controllers/calculator')

describe('Calculator', function() {
    describe('interest', function() {
        it('should be equal value', function() {
            // 5000*0.3*50/360.00 = 208.3333333333
            const ctx = {
                query: {
                    m:'5000',
                    r:'0.3',
                    d: '50'
                }
            };
            getInterest(ctx);
            assert.equal(ctx.body.interest.toFixed(2), (208.3333333333).toFixed(2))
        })
    })
})