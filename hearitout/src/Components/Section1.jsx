import React, { useState } from 'react';
import Radio from './Radio';
import Checkbox from './Checkbox';

const Section1 = () => {
  const [selectedId, setSelectedId] = useState(0);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedBoxes, setSelectedBoxes] = useState([false, false, false, false]);

  const handleRadioChange = (id) => {
    setSelectedId(id);
  };

  const handleCheckboxChange = (id) => {
    setSelectedBoxes((prevState) => {
      const updatedState = [...prevState];
      updatedState[id] = !updatedState[id];
      return updatedState;
    });
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
    <div className="section1-container" >
      <div style={{ width: '100vw' }}>
        <p className="section1-paragraph">
          Lorem ipsum dolor sit amet
        </p>
        {[0, 1, 2, 3].map((id) => (
          <Radio
            key={id}
            id={id}
            isChecked={selectedId === id}
            onChange={() => handleRadioChange(id)}
          />
        ))}
      </div>

      <div>
        <p style={{ fontSize: '20px', font: 'roberto', fontWeight: '400' }}>
          Lorem ipsum dolor sit amet
        </p>
        <select
          className="section1-select"
          value={selectedValue}
          onChange={handleSelectChange}
          style={{
            color: selectedValue ? '#01818C' : '#455A64',
          }}
    
        >
          <option value="0">Drop Down Option</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
          <div>
          <p style={{ fontSize: '20px', font: 'roberto', fontWeight: '400' }}>
          Lorem ipsum dolor sit amet
        </p>
          {[0, 1, 2, 3].map((id) => (
        <Checkbox
          key={id}
          id={id}
          isChecked={selectedBoxes[id]}
          onChange={() => handleCheckboxChange(id)}
        />
      ))}
          </div>
    </div>
    <div className='btn-div'>
    <button className='button'>Submit</button>
    </div>
    </>

  );
};

export default Section1;
