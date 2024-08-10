import logo from './logo.svg';
import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./components/Main/Main";
import mapboxgl from 'mapbox-gl';
// import { CaseStudy } from "./components/CaseStudy/CaseStudyPage";
import './App.css';


mapboxgl.accessToken = 'pk.eyJ1IjoieGlhb2ppYW5nZ2lzIiwiYSI6ImNrNnI5ZzJmcDAxNWszbW9mMjV1bGxsb3oifQ.O2EHW7BWQ3-qjo_u7ddqNA';

function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  
  // const mapContainer = useRef(null);
  // const map = useRef(null);
  // const [lng, setLng] = useState(-75.16262385850004);
  // const [lat, setLat] = useState(39.95759400357371);
  // const [zoom, setZoom] = useState(9);
  
  useEffect(() => {
    window.addEventListener("resize", updateWidth);

  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     // container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/streets-v12',
  //     center: [lng, lat],
  //     zoom: zoom
  //   });
    
    // map.current.on('move', () => {
    // setLng(map.current.getCenter().lng.toFixed(4));
    // setLat(map.current.getCenter().lat.toFixed(4));
    // setZoom(map.current.getZoom().toFixed(2));
    // });
    

    return () => window.removeEventListener("resize", updateWidth);
  });

  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main width={width} />} />
          {/* <Route path='/process/:processId' element={<CaseStudy />} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
