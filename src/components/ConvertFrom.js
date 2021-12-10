import './ConvertFrom.css'
import { useState } from 'react'
import ConvertTo from './ConvertTo'

function ConvertFrom (props) {
  const [fromValue, setFromValue] = useState(1)
  const [fromRate, setFromRate] = useState('USD')
  const { rates } = props

  return (
    <div className='Container'>
      <div className='ConvertFrom'>
        <input className='InputValue' type='number' value={fromValue} onChange={e => setFromValue(e.target.value)} />
        <select className='SelectRate' value={fromRate} onChange={e => setFromRate(e.target.value)}>
          {Object.keys(rates).map(rate => (
            <option key={rate} value={rate}>{rate}</option>
          ))}
        </select>
      </div>
      <div className='Equals'><span>=</span></div>
      <ConvertTo rates={rates} fromValue={fromValue} fromRate={fromRate} />
    </div>
  )
}

export default ConvertFrom
