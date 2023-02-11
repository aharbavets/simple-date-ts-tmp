import {describe, it} from 'mocha'
import {assert} from 'chai'
import {SimpleDate} from "../index"

describe('index', function () {

    describe('#getIsoDate()', function () {
        it('getIsoDate should return correct ISO 8601 date', () => {
            let actual = new SimpleDate("2023-02-11", 60).getIsoDate()
            assert.equal(actual, "2023-02-11T00:00:00.000+01:00")
        });
        it('getIsoDate should return correct ISO 8601 date with negative TZ offset', () => {
            let actual = new SimpleDate("2023-02-11", -60).getIsoDate()
            assert.equal(actual, "2023-02-11T00:00:00.000-01:00")
        });
    })

    describe('#toJsDate()', function () {
        it('toJsDate should return correct Date object', () => {
            let actual = new SimpleDate("2023-02-11").toJsDate()
            assert.equal(typeof actual, "object")
            assert.equal(actual.toISOString(), "2023-02-11T01:00:00.000Z")
        });
    })

    describe('#getDayOfWeek()', function () {
        it('getDayOfWeek should return 6 for new SimpleDate("2023-02-11")', () => {
            assert.equal(new SimpleDate("2023-02-11").getDayOfWeek(), 6)
        });
    })

})
