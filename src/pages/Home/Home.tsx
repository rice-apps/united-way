//import React, { useState } from 'react';
function Home() {

  const multiplyValues = (inputMap: Record<string, number>, multiplier: number): Record<string, number> => {
    const resultHashMap: Record<string, number> = {};
  
    for (const key in inputMap) {
      if (inputMap.hasOwnProperty(key)) {
        resultHashMap[key] = inputMap[key] * multiplier;
      }
    }
  
    return resultHashMap;
  };
  
  const MyComponent: React.FC = () => {
    // dummy proportions
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
        <input type="text" placeholder="Enter a number" className="input input-bordered w-full max-w-xs" />
        <label className="label">
        </label>
      </div>
      {/* Add useState like <Textfield onEntry = (x) => multiplyValues(proportions, x)>
      print that out */}
    </>
    
  );
  }
}

export default Home;
