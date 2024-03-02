"use client"

import Link from "next/link"
import React, { useState, useEffect } from "react"
// import { useRouter } from 'next/router'

interface FormData {
  companyName: string
  donationAmt: string
}

const Home: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    donationAmt: "",
  })

  const [warning, setWarning] = useState<string>("")
  const [valid, setValid] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);
  // const router = useRouter();
  //const [companyName, setCompanyName] = useState('');

  // prevents non-numbers to be entered
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Only allow numbers.
    const allowedKeys = /[0-9\b]/
    if (!allowedKeys.test(event.key)) {
      event.preventDefault()
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    // Reset on every input change
    if (submitted) {
      setWarning("");
      setValid(true);
      setSubmitted(false);
    }
  };

  // used to change the page mode from company to individual. or vice versa

  const [mode, setMode] = useState("company");
  const toggleMode = () => {
    setMode(mode === "full" ? "donationOnly" : "full");
    setWarning("");
    setValid(true);
    setSubmitted(false);
  };
  
  //const checks  = boolean() ~ aidan rec

  // useEffect(() => {
  //   // If the form data is valid and the form has been submitted, navigate to the donations page
  //   if (valid && submitted) {
  //     router.push(`/donations?name=${encodeURIComponent(formData.companyName)}&amount=${encodeURIComponent(formData.donationAmt)}`);
  //   }
  // }, [valid, submitted, formData, router]); // Add router to the dependency array

  // send alerts if the user input is either empty, r
  const isValid = () => {
    setSubmitted(true);
    if (!formData.donationAmt) {
      setWarning("Donation amount is required!");
      setValid(false);
      //return false;
    } else if (Number(formData.donationAmt) < 1) {
      setWarning("Donation amount must be greater than 0!");
      setValid(false);
      //return false;
    } else if (mode === "full" && !formData.companyName) {
      setWarning("Company name is required!");
      setValid(false);
      //return false;
    } else{
      setValid(true);
    }
  };

  // const handleCalculateClick = () => {
  //   setSubmitted(true); // Indicate that the form has been submitted
  //   isValid(); // Perform the validation
  // };

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
            {mode === "full" ? "Individual" : "Company"}
          </button>

          <form>
           
            <div className="flex flex-col justify-center align-middle">
              {/* Company name form (OPTIONAL) */}
              {mode === "full" && (
                <div className="mt-6 w-full flex flex-col items-center">
                  <label
                    htmlFor="Company Name"
                    style={{ marginRight: "190px" }}
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

              {/* Donation Amount (required) */}
              <div className="mt-6 w-full flex flex-col items-center">
                <label
                  htmlFor="Donation Amount"
                  style={{ marginRight: "180px" }}
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
              </div>
              
              {/* <button
                type="button"
                onClick={handleCalculateClick}
                className="btn btn-outline rounded-full mt-6 bg-yellow text-black hover:bg-orange"
              >
                Calculate
              </button> */}

              {/* Conditional rendering based on the validity of the form */}
              {valid && submitted ? (
                <Link
                  href={`/donations?name=${encodeURIComponent(formData.companyName)}&amount=${encodeURIComponent(formData.donationAmt)}`}
                  className='btn btn-outline rounded-full mt-6 bg-yellow text-black hover:bg-orange'
                  prefetch ={true}
                >
                  Calculate
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={isValid}
                  className="btn btn-outline rounded-full mt-6 bg-yellow text-black hover:bg-orange"
                >
                  Calculate
                </button>
              )}

              {!valid && submitted && (
                <div role="alert" className="alert alert-error">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{warning}</span>
                </div>
              )}
             
            </div>
          </form>
          <label className="label"></label>
        </div>
      </div>
    </div>
  )
}

export default Home
