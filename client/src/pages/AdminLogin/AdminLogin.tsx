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
                <div className="bg-gradient-to-br from-blue from-0% via-purple via-75% to-red to-100% flex flex-row justify-center align-middle h-screen w-full">
                  <div className="mx-auto w-6/12 max-w-lg">
                    <p className="normal-case text-3xl mt-16 text-center p-5">
                      Admin Sign in
                    </p>
                    <div className=" form-control w-full ">
                      <form onSubmit={handleFormSubmit}>
                        <div className="flex flex-col justify-center align-middle">
                          <div className="mt-6">
                            <label htmlFor="PIN Number">PIN Number</label>
                            <input
                              type={
                                showPassword ? "text" : "password"
                              }
                              id="pinNumber"
                              name="pinNumber"
                              value={formData.pinNumber}
                              onChange={handleInputChange}
                              placeholder="Enter PIN number"
                              className="input input-bordered bg-white w-full mt-3 text-black rounded-3xl"
                            />
                            <br />
                            <br />
                            <label form ="check">Show Pin Number</label>
                            <input
                              id="check"
                              type="checkbox"
                              onChange={() =>
                              setShowPassword((prev) => !prev)
                              }
                            />
                          </div>
                          
                          <button className="btn btn-outline self-center w-6/12 m-5 text-black bg-yellow hover:bg-orange rounded-3xl">Sign in</button>
                        </div>
                      </form>
            
                      <label className="label"></label>
                    </div>
                  </div>
                </div>
              );
        }

export default AdminLogin;
