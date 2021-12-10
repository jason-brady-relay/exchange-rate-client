import convert from './exchangeRateConverter'

const rates = {
  USD: 1,
  AED: 3.67
}

it('converts a given from value using the given from rate into a value based on the given to rate', () => {
  const convertedValue = convert({ rates, fromRate: 'USD', fromValue: 2, toRate: 'AED' })
  expect(convertedValue).toEqual(7.34)
})

it('should return 0 if there are no rates', () => {
  expect(convert({ fromRate: 'USD', fromValue: 2, toRate: 'AED' })).toEqual(0)
})

it('should return 0 if there is no from value', () => {
  expect(convert({ fromRate: 'USD', toRate: 'AED' })).toEqual(0)
})

it('should return 0 if there is no to rate', () => {
  expect(convert({ fromRate: 'USD', fromValue: 2 })).toEqual(0)
})
