

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import mapboxglCompare from 'mapbox-gl-compare';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl-compare/dist/mapbox-gl-compare.css';
import './Mapslider.css'


// extend mapboxgl, adding the Compare class
mapboxgl.Compare = mapboxglCompare;

const Mapslider = () => {
    const mapRef = useRef();
    const beforeMapContainerRef = useRef();
    const afterMapContainerRef = useRef();
    const comparisonContainerRef = useRef();

    useEffect(() => {
        // some development servers will run this hook more than once
        // return if the map has already been initialized
        if (mapRef.current) return;

        const beforeMap = new mapboxgl.Map({
            container: beforeMapContainerRef.current,
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: [-75.16066806876577, 39.963404947028536],
            zoom: 10,
            minZoom: 8,
            maxZoom: 18
        });

        // Define the bounding box (southwest and northeast corners)
        const bounds = [
            [-75.54764199784019, 39.82784452073795], // Southwest coordinates (Lng, Lat)
            [-74.76816357286245, 40.23533173052156], // Northeast coordinates (Lng, Lat)
        ];
        beforeMap.setMaxBounds(bounds)

        
        beforeMap.on('load', () => {
            // add the raster tile, here, the url can be found from mapbox studio, Tileset, Tileset ID
            beforeMap.addSource('lst_rastermap', {
                type: 'raster',
                url: "mapbox://xiaojianggis.25e3n0oy",
                "tileSize": 256,
                minzoom: 9
            });

            beforeMap.addLayer(
                {
                    id: 'lst_rasterheatmap',
                    type: 'raster',
                    source: 'lst_rastermap',
                    minzoom: 9
                }
            );
        });

        const afterMap = new mapboxgl.Map({
            container: afterMapContainerRef.current,
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: [-75.16066806876577, 39.963404947028536],
            zoom: 10,
            minZoom: 8,
            maxZoom: 18
        });

        afterMap.setMaxBounds(bounds)

        afterMap.on('load', () => {
            // add the raster tile, here, the url can be found from mapbox studio, Tileset, Tileset ID
            afterMap.addSource('mrt_rastermap', {
                type: 'raster',
                url: "mapbox://xiaojianggis.1kycw4sf",
                "tileSize": 256,
                minzoom: 9
            });

            afterMap.addLayer(
                {
                    id: 'mrt_rastermap',
                    type: 'raster',
                    source: 'mrt_rastermap',
                    minzoom: 9
                }
            );
        });


        mapRef.current = new mapboxgl.Compare(
            beforeMap,
            afterMap,
            comparisonContainerRef.current
        );
    }, []);

    const LegendItems = [
        { color: '#000004', label: '<30' },
        { color: '#57106E', label: '30-36' },
        { color: '#BC3755', label: '36-42' },
        { color: '#FA8D0A', label: "42-47" },
        { color: '#FDFFA5', label: "47+" }
        // Add more legend items as needed
    ];


    return (
        <div className='map-container' ref={comparisonContainerRef}>
            <div id="before" ref={beforeMapContainerRef} style={{ height: '100%', width: '100%', position: 'absolute' }}>
                <div className="legend legend-before">
                    <h2>Land Surface Temperature (°C)</h2>
                    <ul className='legend-container'>
                        {LegendItems.map((item, index) => (
                            <li key={index} className="legend-item">
                                <span style={{ backgroundColor: item.color }}></span>
                                <p>{item.label}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div id="after" ref={afterMapContainerRef} style={{ height: '100%', width: '100%', position: 'absolute' }}>
                <div className="legend legend-after">
                    <h2>Universal Thermal Climate Index (°C)</h2>
                    <ul className='legend-container'>
                        {LegendItems.map((item, index) => (
                            <li key={index} className="legend-item">
                                <span style={{ backgroundColor: item.color }}></span>
                                <p>{item.label}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Mapslider;
