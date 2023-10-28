import React, { useState } from 'react';
const Home: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputMap, setOutputMap] = useState<Record<string, number>>({});
  
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
    const processed = multiplyValues(proportions, +newText);
    setOutputMap(processed);
  };


  // processing function that takes in hard-coded map and the input text and returns the result 
  const multiplyValues = (inputMap: Record<string, number>, multiplier: number): Record<string, number> => {
    const resultHashMap: Record<string, number> = {};
  
    for (const key in inputMap) {
      if (inputMap.hasOwnProperty(key)) {
        resultHashMap[key] = inputMap[key] * multiplier;
      }
    }
  
    return resultHashMap;
  };

  // dummy proportions used for multiplyValues
  const proportions: Record<string, number> = {
    'Financial Stability': 0.3,
    'Early Childhood': 0.5,
    'Health Care': 0.2,
  };

  return (
    <>
      <a className=" normal-case text-m">Home Page</a>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Donation Amount</span>
        </label>
        <input 
          type="text" 
          value={inputText}
          onKeyPress={handleKeyPress}
          onChange={handleInputChange}
          placeholder="Enter a number"
          className="input input-bordered w-full max-w-xs" 
        />
        <p>Input Text: {inputText}</p>
        {/* right now just outputs string rep of map */}
        <p>Output Map: {JSON.stringify(outputMap)}</p>
        <label className="label">
        </label>
      </div>
      {/* Add useState like <Textfield onEntry = (x) => multiplyValues(proportions, x)>
      print that out */}
    </>
    
  );
}

export default Home;
