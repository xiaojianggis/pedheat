import React from "react";
import './Optionsfield.css'

const Optionsfield = (props) => {
  const renderOptions = (option, i) => {
    return (
      <label key={i} className="toggle-container">
        <input
          onChange={() => props.changeState(i)}
          checked={option.property === props.property}
          name="toggle"
          type="radio"
        />
        
        <div className="toggle txt-s py3 toggle--active-white">
          {option.name}
        </div>
      </label>
    );
  };
  return (
    <div className="option-radio">
      {props.options.map(renderOptions)}
    </div>
  );
};

export default Optionsfield;
