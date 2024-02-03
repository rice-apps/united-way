// import { useLocation, useNavigate } from "react-router-dom"
// const location = useLocation();
// let json = JSON.parse(location.state);

// import Demo from "../../components/ImpactCarousel/ImpactCarousel";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
        pinNumber: string;
      }
      
function AdminLogin() {
        const [formData, setFormData] = useState<FormData>({
                pinNumber: "",
              });

              const history = useNavigate();

              const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                const { name, value } = event.target;
                console.log(name, value);
                setFormData({
                  ...formData,
                  [name]: value,
                });
                // const newText = event.target.value;
                // setInputText(newText);
            
                // Call the function that returns the output
              };

              const handleFormSubmit = (e: { preventDefault: () => void }) => {
                e.preventDefault();
                // PLACEHOLDER - alert saying "Submitted!"
                const verifyPIN = async (pin: string) => {
                  try {
                    const res = await fetch("http://127.0.0.1:5000/verify-pin", {
                      method: 'Post',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({pin: pin})
                    });
                    if (!res.ok) {
                      throw new Error(res.statusText);
                    }
                    console.log(res);
                    const resJSON = await res.json();
                    console.log(resJSON);
                    alert(resJSON['message'])
                  } catch (error) {
                    console.error("Error verifying PIN:", error);
                  }
                };
                verifyPIN(formData.pinNumber)
              };

              const [password, setPassword] = useState("");
              const [showPassword, setShowPassword] = useState(false);
             
              return (
                <div className="flex flex-row justify-center align-middle w-full" >
                  <div className="bg-gradient-to-br from-blue from-0% via-purple via-75% to-red to-100% rounded-lg mx-auto p-5">
                    <p className=" normal-case text-xl text-center" style={{ color: 'white' }} >
                      Admin Sign in
                    </p>
                    <div className="form-control w-full max-w-xl">
                      <form onSubmit={handleFormSubmit}>
                        <div className="flex flex-col justify-center align-middle">
                          <div className="mt-6">
                            <label htmlFor="PIN Number" style={{ color: 'white' }}>PIN Number</label>
                            <input
                              type={
                                showPassword ? "text" : "password"
                              }
                              id="pinNumber"
                              name="pinNumber"
                              value={formData.pinNumber}
                              onChange={handleInputChange}
                              placeholder="Enter PIN number"
                              className="input input-bordered w-full max-w-xs mt-3"
                              //required
                            />
                            <br />
                            <label form ="check" style={{ color: 'white' }}>Show Pin Number</label>
                            <input
                              id="check"
                              type="checkbox"
                              onChange={() =>
                              setShowPassword((prev) => !prev)
                              }
                            />
                          </div>
                          
                          <button  style={{ color: 'white' }} className="btn btn-outline mt-6">Sign in</button>
                        </div>
                      </form>
            
                      <label className="label"></label>
                    </div>
                  </div>
                </div>
              );
        }

export default AdminLogin;
