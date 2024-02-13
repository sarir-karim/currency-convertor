import { useState } from 'react'
import './App.css'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("used");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo)

  const swap  = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount  * currencyInfo[to] )
  }

  return (
    <InputBox/>
  )
}

export default App
