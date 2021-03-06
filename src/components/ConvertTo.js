import './ConvertTo.css'
import { useState, useEffect } from 'react'
import convert from '../helpers/exchangeRateConverter'

function ConvertTo (props) {
  const [toValue, setToValue] = useState(1)
  const [toRate, setToRate] = useState('USD')
  const { rates } = props

  useEffect(() => {
    setToValue(convert({ rates, fromValue: props.fromValue, fromRate: props.fromRate, toRate }))
  }, [rates, props.fromValue, props.fromRate, toRate])

  return (
    <div className='ConvertTo'>
      <input className='InputValue' type='number' value={toValue} readOnly />
      <select className='SelectRate' value={toRate} onChange={e => setToRate(e.target.value)}>
        {Object.keys(rates).map(rate => (
          <option key={rate} value={rate}>{rate}</option>
        ))}
      </select>
    </div>
  )
}

export default ConvertTo
