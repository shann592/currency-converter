import { InputBox } from './components/index'
import './App.css'
import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const swap = function () {
    setAmount(convertedAmount)
    setConvertedAmount(amount)
    setTo(from)
    setFrom(to)
  }

  const currencyInfo = useCurrencyInfo(from)
  const currencyOptions = Object.keys(currencyInfo)

  const converter = function (e) {
    e.preventDefault()
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>
      <form onSubmit={(e) => converter(e)}>
        <InputBox
          label="From"
          amount={amount}
          onAmountChange={(e) => setAmount(Number(e.target.value))}
          selectedCurrency={from}
          currencyOptions={currencyOptions}
          onCurrencyChange={(currency) => setFrom(currency)}
        />
        <button type="button" onClick={swap} className="swap-btn">
          Swap
        </button>
        <InputBox
          label="To"
          amount={convertedAmount}
          selectedCurrency={to}
          currencyOptions={currencyOptions}
          onCurrencyChange={(currency) => setTo(currency)}
          amountDisabled={true}
        />
        <button className="submit-btn">
          Conver {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </>
  )
}

export default App
