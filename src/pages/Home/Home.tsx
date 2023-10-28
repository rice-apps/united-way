import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputMap, setOutputMap] = useState<Record<string, number>>({});

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
    const newText = event.target.value;
    setInputText(newText);

    // Call the function that returns the output
    const processed = multiplyValues(proportions, +newText); //+newText converts string to number
    setOutputMap(processed);
  };
  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Serialize the number value into a JSON string

    const jsonData = JSON.stringify(outputMap);

  
    // Redirect to the next page while passing the JSON string as route state
    history('/donations', { state: {data: jsonData }});
  };


  // processing function that takes in hard-coded map and the input text and returns the result 
  const multiplyValues = (inputMap: Record<string, number>, multiplier: number): Record<string, number> => {
    const resultHashMap: Record<string, number> = {};
  
    for (const key in inputMap) {
      if (inputMap.hasOwnProperty(key)) {
        resultHashMap[key] = inputMap[key] * multiplier;
      }
    }
    resultHashMap["dollarsRaised"]= multiplier
    return resultHashMap;
  };

  // dummy proportions used for multiplyValues
  const proportions: Record<string, number> = {
    'stability': 0.3,
    'development': 0.5,
    'healthcare': 0.2,
    'escape': 0.1,
    'basicNeeds': 0.1,
    'totalPeople': 0.4
  };

  return (
    <div>
      <a className=" normal-case text-m">Home Page</a>
      <div className="form-control w-full max-w-xs">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="Donation Amount">Donation Amount:</label>
            <input 
              type="text" 
              id = "donationamt"
              name = "donationamt"
              value={inputText}
              onKeyPress={handleKeyPress}
              onChange={handleInputChange}
              placeholder="Enter a number"
              className="input input-bordered w-full max-w-xs" 
              required
            />
         
          <button type = "submit">Calculate Impact </button>
        </form>
        
        <label className="label">
        </label>
      </div>
    </div>
  );
}

export default Home;
