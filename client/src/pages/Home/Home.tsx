import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import Home2 from "../Home2/Home2";

interface FormData {
  companyName: string;
  donationAmt: string;
}

const Home: React.FC = () => {
  //const [inputText, setInputText] = useState('');
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    donationAmt: "",
  });
  //const [companyName, setCompanyName] = useState('');

  const history = useNavigate();

  // prevents non-numbers to be entered
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow numeric digits (0-9) and some special keys (e.g., Backspace, Arrow keys, etc.)
    const allowedKeys = /[0-9\b]/;

    if (!allowedKeys.test(event.key)) {
      event.preventDefault();
    }
  };

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

  // const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newText = event.target.value;
  //   setCompanyName(newText);

  // };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Serialize the number value into a JSON string
    const processed = multiplyValues(
      proportionsMap,
      +formData.donationAmt,
      formData.companyName,
    ); //+newText converts string to number

    // Redirect to the next page while passing the JSON string as route state
    history("/donations", { state: { data: processed } });
  };

  // processing function that takes in hard-coded map and the input text and returns the result
  const multiplyValues = (
    inputMap: { [key: string]: number },
    multiplier: number,
    companyName: string,
  ): { [key: string]: string | number } => {
    const resultHashMap: { [key: string]: string | number } = {};

    for (const key in inputMap) {
      if (inputMap.hasOwnProperty(key)) {
        resultHashMap[key] = inputMap[key] * multiplier;
      }
    }
    resultHashMap["dollarsRaised"] = multiplier;
    resultHashMap["companyName"] = companyName;

    return resultHashMap;
  };

  // dummy proportions used for multiplyValues
  const proportionsMap: { [key: string]: number } = {
    stability: 0.3,
    development: 0.5,
    healthcare: 0.2,
    escape: 0.1,
    basicNeeds: 0.1,
    totalPeople: 0.4,
  };

  const [mode, setMode] = useState('company'); 

  const toggleMode = () => {
    setMode(mode === 'full' ? 'donationOnly' : 'full');
  };

  return (
    <div className="flex flex-row justify-center align-middle w-full">
      <div className="mx-auto">
        <p className="normal-case text-xl text-center font-bold">
          Calculate Your Impact
        </p>

        <button onClick={toggleMode} className="btn btn-outline mt-6">
          {mode === 'full' ? 'I am an INDIVIDUAL' : 'I am company'}
        </button>


        <div className="form-control w-full max-w-xs">
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col justify-center align-middle">
              
              {mode === 'full' && (
                  <div className="mt-6">
                    <label htmlFor="Company Name">Company Name:</label>
                    <input
                      type="text"
                      id="companyname"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                      className="input input-bordered w-full max-w-xs mt-3"
                      required
                    />
                  </div>
                )}
              <div className="mt-6">
                <label htmlFor="Donation Amount">Donation Amount:</label>
                <input
                  type="text"
                  id="donationamt"
                  name="donationAmt"
                  value={formData.donationAmt}
                  onKeyPress={handleKeyPress}
                  onChange={handleInputChange}
                  placeholder="Enter a number"
                  className="input input-bordered w-full max-w-xs mt-3"
                  required
                />
              </div>
              <button className="btn btn-outline mt-6">Calculate Impact</button>
            </div>
          </form>

          <label className="label"></label>
        </div>
      </div>
    </div>
  );
};

export default Home;
