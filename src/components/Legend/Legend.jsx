import React from "react";
import './Legend.css'

const Legend = (props) => {
  const renderLegendKeys = (stop, i) => {
    return (
      <div key={i} id="legend-item">
          <span id="legend-brick" style={{ backgroundColor: stop[1] }}></span>
          <span>{`${stop[0].toLocaleString()}`} </span>
      </div>
    );
  };
  
  return (
    <>
      <div className="legend-card">
        {/* <div className="">
          <h2 className="">{props.active.name}</h2>
          <p className="">{props.active.description}</p>
        </div> */}
        {props.stops.map(renderLegendKeys)}
        (°C)
      </div>
    </>
  );
};

export default Legend;
