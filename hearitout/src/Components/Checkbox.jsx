import React from 'react';

const Checkbox = ({ id, isChecked, onChange }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={`flexCheckDefault${id}`}
        checked={isChecked}
        onChange={onChange}
        style={{
          accentColor: isChecked ? '#01818C' : '#455A64',
        }}
      />
      <label
        className="form-check-label"
        htmlFor={`flexCheckDefault${id}`}
        style={{
          color: isChecked ? '#01818C' : '#455A64',
        }}
      >
        Checkbox Button Option {id}
      </label>
    </div>
  );
};

export default Checkbox;
