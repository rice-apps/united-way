'use client'

import React, { useState, useEffect } from 'react'

interface FormData {
  companyName: string
  donationAmt: string
}

const Home: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    donationAmt: '',
  })
  const [warning, setWarning] = useState<string>('')
  //const [companyName, setCompanyName] = useState('');

  // prevents non-numbers to be entered
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow numeric digits (0-9) and some special keys (e.g., Backspace, Arrow keys, etc.)
    const allowedKeys = /[0-9\b]/

    if (!allowedKeys.test(event.key)) {
      event.preventDefault()
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    console.log(name, value)
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCalculate = () => {
    if (!formData.donationAmt) {
      setWarning('Donation amount is required!')
    } else if (Number(formData.donationAmt) < 1) {
      setWarning('Donation amount must be greater than 0!')
    } else if (mode === 'full' && !formData.companyName) {
      setWarning('Company name is required!')
    } else {
      window.location.href = `/donations?name=${formData.companyName}&amount=${formData.donationAmt}`
    }
  }

  const [mode, setMode] = useState('company')

  const toggleMode = () => {
    setMode(mode === 'full' ? 'donationOnly' : 'full')
  }

  // Trigger a warning alert if the user misses to fill the required fields
  useEffect(() => {
    if (warning) {
      alert(warning)
      setTimeout(() => {
        setWarning('')
      }, 1000)
    }
  }, [warning])

  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="mx-auto w-full max-w-xl">
        <p className="normal-case text-3xl text-center m-7 font-bold">
          Calculate Your Impact
        </p>
        <div className="bg-gradient-to-br from-blue from-0% via-purple via-75% to-red to-100% rounded-2xl form-control w-full max-w-xl relative">
          <button
            onClick={toggleMode}
            className="btn btn-outline m-5 w-2/12 absolute top-0 right-0"
          >
            {mode === 'full' ? 'Individual' : 'Company'}
          </button>
          <form>
            <div className="flex flex-col justify-center align-middle">
              {mode === 'full' && (
                <div className="mt-6 w-full flex flex-col items-center">
                  <label
                    htmlFor="Company Name"
                    style={{ marginRight: '190px' }}
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyname"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    className="input input-bordered w-full bg-white bg-opacity-70 max-w-xs mt-3 rounded-full border-black text-black"
                  />
                </div>
              )}
              <div className="mt-6 w-full flex flex-col items-center">
                <label
                  htmlFor="Donation Amount"
                  style={{ marginRight: '180px' }}
                >
                  Donation Amount
                </label>
                <input
                  type="text"
                  id="donationamt"
                  name="donationAmt"
                  value={formData.donationAmt}
                  onKeyPress={handleKeyPress}
                  onChange={handleInputChange}
                  placeholder="Enter amount"
                  className="input input-bordered w-full bg-white bg-opacity-70 max-w-xs mt-3 rounded-full border-black text-black"
                  required
                />
                <button
                  type="button"
                  onClick={handleCalculate}
                  className="btn btn-outline rounded-full mt-6 bg-yellow text-black hover:bg-orange"
                >
                  Calculate
                </button>
              </div>
            </div>
          </form>
          <label className="label"></label>
        </div>
      </div>
    </div>
  )
}

export default Home
