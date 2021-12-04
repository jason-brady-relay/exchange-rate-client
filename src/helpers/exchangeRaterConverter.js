const isDecimalNumber = (number) => {
  return number % 1 !== 0
}

const truncateAtTwoDecimalPlaces = (number) => {
  const regex = new RegExp('^-?\\d+(?:.\\d{0,' + (2 || -1) + '})?')
  return number.toString().match(regex)[0]
}

const convert = ({ rates, fromRate, fromValue, toRate }) => {
  if (!rates[toRate] || !rates[fromRate] || fromValue === 0) {
    return 0
  }

  const exchangeValue = (rates[toRate] / rates[fromRate] * fromValue)

  // truncate everything beyond 2 decimal places if there is a decimal number
  if (isDecimalNumber(exchangeValue)) {
    return truncateAtTwoDecimalPlaces(exchangeValue)
  }

  return exchangeValue
}

export default convert
