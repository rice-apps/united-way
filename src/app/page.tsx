"use client"

import React, { useState } from "react"
import Link from "next/link"

interface FormData {
  companyName: string
  donationAmt: string
}

const Home: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    donationAmt: "",
  })
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

  const [mode, setMode] = useState("company")

  const toggleMode = () => {
    setMode(mode === "full" ? "donationOnly" : "full")
  }
  const fullMode = () => {
    setMode("full");
  }
  const donateMode = () => {
    setMode("donationOnly");
  }

  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="mx-auto w-full max-w-xl">
        <p className="normal-case text-3xl text-center m-7 font-bold">
          Calculate Your Impact
        </p>
        <div className="bg-gradient-to-br from-blue from-0% via-purple via-75% to-red to-100% rounded-2xl form-control w-full max-w-xl relative">
        <div className={"btn-group m-1 w-7/24 absolute top-1 right-1 bg-gray-300"} style={{ padding: '0.1rem 0.5rem', fontSize: '0.6rem', borderRadius: '9999px'}}>
            <button onClick={fullMode} className={`btn btn-outline rounded-full ${mode === "full" ? "bg-gray-200" : ""}`} style={{ padding: '0.1rem 0.3rem', fontSize: '0.6rem', borderRadius: '5000px', border: 'none'}}>
                Company
            </button>
            <button onClick={donateMode} className={`btn btn-outline rounded-full ${mode === "donationOnly" ? "bg-gray-200" : ""} `} style={{ padding: '0.1rem 0.3rem', fontSize: '0.6rem', borderRadius: '5000px', border: 'none'}}>
                Individual
            </button>
        </div>
          <form>
            <div className="flex flex-col justify-center align-middle">
              {mode === "full" && (
                <div className="mt-6 w-full flex flex-col items-center">
                  <label htmlFor="Company Name" style={{ marginRight: '190px' }}>Company Name</label>
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
                <label htmlFor="Donation Amount" style={{ marginRight: '180px' }}>Donation Amount</label>
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
              </div>
              <Link
                className="flex flex-row justify-center items-center w-full"
                href={{
                  pathname: "/donations",
                  query: {
                    name: formData.companyName,
                    amount: formData.donationAmt,
                  },
                }}
              >
              <button className="btn btn-outline rounded-full mt-6 bg-yellow text-black hover:bg-orange">
                Calculate
              </button>
              </Link>
            </div>
            </form>
           <label className="label"></label>
        </div>
      </div>
    </div>
        
  )
}

export default Home
