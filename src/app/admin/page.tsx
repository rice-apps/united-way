"use client"

import React, { useState } from "react"

interface FormData {
  pinNumber: string
}

function AdminLogin() {
  const [formData, setFormData] = useState<FormData>({
    pinNumber: "",
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    console.log(name, value)
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const verifyPIN = async (pin: string) => {
      try {
        const res = await fetch(`/api/verify/`, {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pin: pin }),
        })
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        console.log(res)
        const resJSON = await res.json()
        console.log(resJSON)
        alert(resJSON.response)
      } catch (error) {
        console.error("Error verifying PIN:", error)
      }
    }
    verifyPIN(formData.pinNumber)
  }

  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="bg-gradient-to-br from-blue from-0% via-purple via-75% to-red to-100% flex flex-row justify-center align-middle h-screen w-full font-bold">
      <div className="mx-auto w-6/12 max-w-lg">
        <p className="normal-case text-3xl mt-16 text-center p-5">
          Admin Sign in
        </p>
        <div className=" form-control w-full ">
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col justify-center align-middle">
              <div className="mt-6 mb-4">
                <label htmlFor="PIN Number">PIN Number</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="pinNumber"
                    name="pinNumber"
                    value={formData.pinNumber}
                    onChange={handleInputChange}
                    placeholder="Enter PIN number"
                    className="input mb-2 input-bordered bg-white w-full mt-3 text-black rounded-3xl font-normal"
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button className="btn btn-outline self-center w-6/12 m-5 text-black bg-yellow hover:bg-orange rounded-3xl">
                Sign in
              </button>
            </div>
          </form>

          <label className="label"></label>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
