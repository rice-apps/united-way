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
                alert("submitted!");
              };
             
              return (
                <div className="flex flex-row justify-center align-middle w-full">
                  <div className="mx-auto">
                    <p className=" normal-case text-xl text-center">
                      Admin Sign in
                    </p>
                    <div className="form-control w-full max-w-xs">
                      <form onSubmit={handleFormSubmit}>
                        <div className="flex flex-col justify-center align-middle">
                          <div className="mt-6">
                            <label htmlFor="PIN Number">PIN Number</label>
                            <input
                              type="password"
                              id="pinNumber"
                              name="pinNumber"
                              value={formData.pinNumber}
                              onChange={handleInputChange}
                              placeholder="Enter PIN number"
                              className="input input-bordered w-full max-w-xs mt-3"
                              //required
                            />
                          </div>
                          
                          <button className="btn btn-outline mt-6">Sign in</button>
                        </div>
                      </form>
            
                      <label className="label"></label>
                    </div>
                  </div>
                </div>
              );
        }

export default AdminLogin;
