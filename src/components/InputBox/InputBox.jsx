import React from 'react'
import './InputBox.css'

function InputBox({
  label = 'From',
  amount = 0,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'usd',
  amountDisabled = false,
}) {
  return (
    <div className="input-box">
      <div className="left-section">
        <label>{label}</label>
        <input
          type="number"
          readOnly={amountDisabled}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(e)
          }}
        />
      </div>
      <div className="right-section">
        <label>Currency Type</label>
        <select
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange(e.target.value)
          }}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
