'use client'

import React, { useEffect } from 'react'
import { themeChange } from 'theme-change'

const Footer: React.FC = () => {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  const themes = ['dark', 'light', 'cupcake']

  return (
    <footer className="bg-base-200 py-4">
      <div className="container mx-auto text-center">
        <div className="join join-vertical">
          {themes.map((data, index) => (
            <input
              key={index}
              type="radio"
              className="btn btn-primary join-item"
              aria-label={data}
              value={data}
              data-set-theme={data}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
