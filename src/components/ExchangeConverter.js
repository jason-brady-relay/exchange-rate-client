import { useEffect, useState } from 'react'
import axios from 'axios'
import ConvertFrom from './ConvertFrom'

const url = '/exchangerate/rates'

function ExchangeConverter (props) {
  const [rates, setRates] = useState({})

  useEffect(() => {
    async function fetchRates () {
      try {
        const { data } = await axios.get(url)
        const { rates } = data
        setRates(rates)
      } catch (error) {
        console.debug(error)
      }
    }
    fetchRates()
  }, [])

  return (
    <div className='ExchangeConverter'>
      <h2>Exchange Rate Converter</h2>
      <ConvertFrom rates={rates} />
    </div>
  )
}

export default ExchangeConverter
