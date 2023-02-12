import {describe, it} from 'mocha'
import {assert} from 'chai'
import {SimpleDate} from "../index"

describe('index', function () {

    describe('addDays', () => {

        it('Add 1 day', () => {
            deepStrictEqual(new SimpleDate('2020-01-10').addDays(1).getRaw(), '2020-01-11')
        })

        it('Add 1 day to January 30', () => {
            deepStrictEqual(new SimpleDate('2020-01-30').addDays(1).getRaw(), '2020-01-31')
        })

        it('Add 1 day, February 28, leap year', () => {
            deepStrictEqual(new SimpleDate('2020-02-28').addDays(1).getRaw(), '2020-02-29')
        })

        it('Add 1 day with month overflow, January 31', () => {
            deepStrictEqual(new SimpleDate('2020-01-31').addDays(1).getRaw(), '2020-02-01')
        })

        it('Add 1 day with month overflow, April 30', () => {
            deepStrictEqual(new SimpleDate('2020-04-30').addDays(1).getRaw(), '2020-05-01')
        })

        it('Add 1 day with month overflow in February, non-leap year', () => {
            deepStrictEqual(new SimpleDate('2021-02-28').addDays(1).getRaw(), '2021-03-01')
        })

        it('Add 1 day with month overflow in February, leap year', () => {
            deepStrictEqual(new SimpleDate('2020-02-29').addDays(1).getRaw(), '2020-03-01')
        })

        it('Add 1 day with month and year overflow', () => {
            deepStrictEqual(new SimpleDate('2019-12-31').addDays(1).getRaw(), '2020-01-01')
        })

        it('Subtract 1 day', () => {
            deepStrictEqual(new SimpleDate('2020-01-10').addDays(-1).getRaw(), '2020-01-09')
        })

        it('Subtract 1 day with month overflow, February 1', () => {
            deepStrictEqual(new SimpleDate('2020-02-01').addDays(-1).getRaw(), '2020-01-31')
        })

        it('Subtract 1 day, March 1, non-leap year', () => {
            deepStrictEqual(new SimpleDate('2021-03-01').addDays(-1).getRaw(), '2021-02-28')
        })

        it('Subtract 1 day, March 1, leap year', () => {
            deepStrictEqual(new SimpleDate('2020-03-01').addDays(-1).getRaw(), '2020-02-29')
        })

        it('Subtract 1 day with month overflow, May 1', () => {
            deepStrictEqual(new SimpleDate('2020-05-01').addDays(-1).getRaw(), '2020-04-30')
        })

        it('Subtract 1 day with month and year overflow', () => {
            deepStrictEqual(new SimpleDate('2020-01-01').addDays(-1).getRaw(), '2019-12-31')
        })
    })

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

    describe('#getDayNameInEnglish()', function () {
        it('getDayNameInEnglish should return Sunday for new SimpleDate("2023-02-05")', () => {
            assert.equal(new SimpleDate("2023-02-05").getDayNameInEnglish(), 'Sunday')
        });
        it('getDayNameInEnglish should return Monday for new SimpleDate("2023-02-06")', () => {
            assert.equal(new SimpleDate("2023-02-06").getDayNameInEnglish(), 'Monday')
        });
        it('getDayNameInEnglish should return Tuesday for new SimpleDate("2023-02-07")', () => {
            assert.equal(new SimpleDate("2023-02-07").getDayNameInEnglish(), 'Tuesday')
        });
        it('getDayNameInEnglish should return Wednesday for new SimpleDate("2023-02-08")', () => {
            assert.equal(new SimpleDate("2023-02-08").getDayNameInEnglish(), 'Wednesday')
        });
        it('getDayNameInEnglish should return Thursday for new SimpleDate("2023-02-09")', () => {
            assert.equal(new SimpleDate("2023-02-09").getDayNameInEnglish(), 'Thursday')
        });
        it('getDayNameInEnglish should return Friday for new SimpleDate("2023-02-10")', () => {
            assert.equal(new SimpleDate("2023-02-10").getDayNameInEnglish(), 'Friday')
        });
        it('getDayNameInEnglish should return Saturday for new SimpleDate("2023-02-11")', () => {
            assert.equal(new SimpleDate("2023-02-11").getDayNameInEnglish(), 'Saturday')
        });
    })

})
