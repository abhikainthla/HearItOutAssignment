import React from 'react';
const Radio = ({ id, isChecked, onChange }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id={`flexRadioDefault${id}`}
        checked={isChecked}
        onChange={onChange}
        style={{
          accentColor: isChecked ? '#01818C' : '#455A64', 
        }}
      />
      <label
        className="form-check-label"
        htmlFor={`flexRadioDefault${id}`}
        style={{
          color: isChecked ? '#01818C' : '#455A64', 
        }}
      >
        Radio Button Option {id}
      </label>
    </div>
  );
};

export default Radio;
