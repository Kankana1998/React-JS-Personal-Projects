import React from 'react'

const App = () => {
  return (
    <main>
    <h1>BMI Calculator</h1>
    <div className='input-selection'>
      <p>Weight: 80kg</p>
      <input className='input-slider'
      type='range'
      step='1'
      min='40'
      max='200'
      />
      <p>Height: 180cm</p>
      <input className='inpu-slider' 
      type='range'
      />
      <div className='output-section'>
        <p>YOUR BMI</p>
        <p className='output'>100</p>
      </div>
    </div>
    </main>
  )
}

export default App