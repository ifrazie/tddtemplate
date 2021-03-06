// index.test.js
const fizzBuzz = require('./index')

describe('fizzBuzz()', () => {
    it('returns "FizzBuzz" for multiples of 3 and 5', () => {
        expect(fizzBuzz(15)).toBe(true)
        expect(fizzBuzz(30)).toBe(true)
    })
})

describe('fizzBuzz()', () => {
    it('returns the given number for multiples of neither 3 nor 5', () => {
        expect(fizzBuzz(1)).toBe(false)
        expect(fizzBuzz(22)).toBe(false)
    })
})