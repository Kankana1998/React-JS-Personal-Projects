import React, { useMemo, useState } from 'react';
import './App.css';

const App = () => {

  const [height, setheight] = useState(70);
  const [weight, setweight] = useState(180);

function onWeightChange(event){
  setweight(event.target.value)
}

function onHeightChange(event){
  setheight(event.target.value)
}

const output = useMemo(() => {
  const calculateHeight = height /100;
  return (weight/(calculateHeight*calculateHeight)).toFixed(1)
}, [weight, height]);

  return (
    <main>
    <h1>BMI Calculator</h1>
    <div className='input-selection'>
      <p>Weight: {weight} kg</p>
      <input className='input-slider'
      type='range'
      step='1'
      min='40'
      max='200'
      onChange={onWeightChange}
      />
      <p>Height: {height} cm</p>
      <input className='input-slider' 
      type='range'
      min='140'
      max='220'
      onChange={onHeightChange}
      />
      <div className='output-section'>
        <p>YOUR BMI</p>
        <p className='output'>{output}</p>
      </div>
    </div>
    </main>
  )
}

export default App