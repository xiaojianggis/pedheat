import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Legend from '../Legend/Legend';
import Optionsfield from '../Optionsfield/Optionsfield';
import './MapContainer.css';
import data from '../data.json';
import socialmrtdata from '../social_mrt.geojson'


mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

export const MapContainer = () => {
  const options = [
    {
      name: 'MRT',
      description: 'The mean radiant temperature',
      property: 'mrt',
      stops: [
        [0, '#000004'],
        [48, '#57106E'],
        [49, '#BC3755'],
        [51, '#FA8D0A'],
        [52, '#FDFFA5']
      ]
    },
    {
      name: 'UTCI',
      description: 'Universal thermal climate index',
      property: 'asian',
      stops: [
        [0, '#f8d5cc'],
        [100, '#f4bfb6'],
        [200, '#f1a8a5'],
        [300, '#ee8f9a'],
        [1000, '#ec739b']
      ]
    }
  ];

  // also initate the legend, at different zooms, the legend labels are different
  const [legend, setLegend] = useState([
    [0, '#000004'],
    [48, '#57106E'],
    [49, '#BC3755'],
    [51, '#FA8D0A'],
    [52, '#FDFFA5']
  ]);

  const mapContainerRef = useRef(null);
  const [active, setActive] = useState(options[0]);
  const [map, setMap] = useState(null);
  const bounds = [
    [-75.37949270894738, 39.877251314000624],
    [-74.93773104067614, 40.15718293007081]
  ]

  const [lng, setLng] = useState(-75.14);
  const [lat, setLat] = useState(39.98);
  const [zoom, setZoom] = useState(8);

  const [clickedFeature, setClickedFeature] = useState(null);

  let hoveredPolygonId = null;

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // style: 'mapbox://styles/xiaojianggis/clmshivpc05bn01qb5c3i91so',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-75.25522614721885, 40.05743845785116],
      zoom: 8,
      maxZoom: 17,
      minZoom: 6,
      maxBounds: bounds,
      attributionControl: false
    });

    // vector tile, https://docs.mapbox.com/mapbox-gl-js/example/vector-source/
    // load the geojson vector data and the raster tiles
    map.on('load', () => {
      // add sources, sidewalk map, geojson, polygon
      map.addSource('ct_heatmap', {
        type: 'geojson',
        generateId: true,
        data: socialmrtdata,
        maxzoom: 13
      });

      // add the sidewalk heat vector tiles, here, the url can be found from mapbox studio, Tileset, Tileset ID
      map.addSource('sidewalk_heat', {
        type: 'vector',
        url: "mapbox://xiaojianggis.cq1b8840",
        "tileSize": 512,
        minzoom: 13,
        maxzoom: 16
      });

      // add the raster tile, here, the url can be found from mapbox studio, Tileset, Tileset ID
      map.addSource('rastermap', {
        type: 'raster',
        url: "mapbox://xiaojianggis.1kycw4sf",
        "tileSize": 256,
        minzoom: 16
      });


      map.setLayoutProperty('country-label', 'text-field', [
        'format',
        ['get', 'name_en'],
        { 'font-scale': 1.2 },
        '\n',
        {},
        ['get', 'name'],
        {
          'font-scale': 0.8,
          'text-font': [
            'literal',
            ['DIN Offc Pro Italic', 'Arial Unicode MS Regular']
          ]
        }
      ]);

      map.addLayer(
        {
          id: 'ct_heatmap',
          type: 'fill',
          source: 'ct_heatmap',
          maxzoom: 13
        },
        'country-label'
      );

      map.setPaintProperty('ct_heatmap',
        'fill-color', {
        property: active.property,
        stops: active.stops
      }
      );

      map.addLayer({
        'id': 'ct-borders',
        'type': 'line',
        'source': 'ct_heatmap',
        'layout': {},
        'paint': {
          'line-color': '#627BC1',
          'line-width': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            5, // Outline color when hovered
            1 // Default fill color
          ]
        },
        'maxzoom': 13
      });


      // add the hover effect
      map.on('mousemove', 'ct_heatmap', (e) => {
        const features = map.queryRenderedFeatures(e.point);
        if (features.length > 0) {
          if (hoveredPolygonId !== null) {
            map.setFeatureState(
              { source: 'ct_heatmap', id: hoveredPolygonId },
              { hover: false }
            );
          }
          hoveredPolygonId = e.features[0].id;
          map.setFeatureState(
            { source: 'ct_heatmap', id: hoveredPolygonId },
            { hover: true }
          );
        }

        // setLng(e.lngLat.lng.toFixed(2));
        // setLat(e.lngLat.lat.toFixed(2));

        const feature = e.features[0];
        if (feature) {
          setClickedFeature({
            mrt: feature.properties.mrt,
            white: feature.properties.nonHispan,
            black: feature.properties.black,
            hispanic: feature.properties.perHis,
            asian: feature.properties.asian,
            income: feature.properties.per_capita,
          });
        }

        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));

        // map.setPaintProperty('heatmap', 'fill-opacity', ['boolean', ['feature-state', 'hover'], false], 1, 0.5);
        // map.setPaintProperty(
        //   'ct_heatmap',
        //   'fill-opacity',
        //   // ['match', ['get', 'id'], 'example-id', 0.5 , 1]
        //   // 0.5
        //   ['case', ['boolean', ['feature-state', 'hover'], false], 1, 0.8]
        // );


      })

      // When the mouse leaves the state-fill layer, update the feature state of the
      // previously hovered feature.
      map.on('mouseleave', 'ct_heatmap', () => {
        if (hoveredPolygonId !== null) {
          map.setFeatureState(
            { source: 'ct_heatmap', id: hoveredPolygonId },
            { hover: false }
          );
        }
        hoveredPolygonId = null;
      });


      // Add click event listener
      map.on('click', 'ct_heatmap', (e) => {
        const feature = e.features[0];
        if (feature) {
          setClickedFeature({
            mrt: feature.properties.mrt,
            asian: feature.properties.asian,
            white: feature.properties.nonHispan,
            black: feature.properties.black,
            hispanic: feature.properties.perHis,
            income: feature.properties.per_capita,

          });
        }
      });

      map.addLayer(
        {
          id: 'rasterheatmap',
          type: 'raster',
          source: 'rastermap',
          minzoom: 15.5
        }
      );

      map.addLayer(
        {
          id: 'sidewalk_heat',
          type: 'line',
          source: 'sidewalk_heat',
          minzoom: 12,
          maxzoom: 16,
          'source-layer': 'sidewalkhea',
          paint: {
            'line-color': [
              'interpolate',
              ['linear'],
              ['get', 'heatexpo'],  // Get the 'density' property from the feature
              0, '#000004',        // Green at density 0
              44, '#57106E',        // Green at density 0
              45, '#BC3755',        // Green at density 0
              46, '#FA8D0A',       // Yellow at density 50
              49, '#FDFFA5'       // Red at density 100
            ],
            'line-width': [
              'interpolate',
              ['linear'],
              ['zoom'],
              5, 0.2,   // At zoom level 5, the line width is 1
              10, 0.6,  // At zoom level 10, the line width is 3
              11, 0.7,  // At zoom level 10, the line width is 3
              13, 1.5,  // At zoom level 10, the line width is 3
              15, 2.5  // At zoom level 15, the line width is 6
            ],
          },
        }
      );

      setMap(map);
    });

    // zooming effect, can be use to create some effects
    map.on('zoom', () => {
      setZoom(map.getZoom().toFixed(2));

      const currentZoom = map.getZoom();
      if (currentZoom < 13) {
        setLegend([
          [0, '#000004'],
          [48, '#57106E'],
          [49, '#BC3755'],
          [51, '#FA8D0A'],
          [52, '#FDFFA5']
        ]);
      } else if (currentZoom < 16) {
        setLegend([[0, '#000004'],
        [44, '#57106E'],
        [45, '#BC3755'],
        [46, '#FA8D0A'],
        [49, '#FDFFA5']])
      } else {
        setLegend([[0, '#000004'],
        [30, '#57106E'],
        [36, '#BC3755'],
        [42, '#FA8D0A'],
        [47, '#FDFFA5']])
      }
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  useEffect(() => {
    paint();
  }, [active]);

  const paint = () => {
    if (map) {
      map.setPaintProperty('ct_heatmap',
        'fill-color', {
        property: active.property,
        stops: active.stops
      }
      );
    }
  };

  const changeState = i => {
    setActive(options[i]);
    map.setPaintProperty('ct_heatmap',
      'fill-color', {
      property: active.property,
      stops: active.stops
    }
    );
  };


  return (
    <div id='map-section'>
      <div id='legend-panel'>
        {/* <div id='legend-title'>
          Heat metrics
          <Optionsfield
            options={options}
            property={active.property}
            changeState={changeState}
          />
        </div> */}


        {/* <div id='legend-items'>
          <Legend active={active} stops={active.stops} />
        </div> */}


        <div className='legend-description-panel'>
          <h3>Mean radiant temperature</h3>
          <hr />
          <p style={{ fontSize: '20px' }}>
            Mean radiant temperature (MRT) is a parameter in human biometeorology that measures how people experience radiation. It's the average temperature of all surfaces around a person, and it considers the radiant heat exchange between the human body and its surroundings. MRT is based on the idea that the net exchange of radiant energy between objects is proportional to their temperature difference and their ability to emit and absorb heat.
          </p>
          <hr />
          {clickedFeature && (
            <div id='feature-attribute-name'>

              <ul>
                <li>
                  Mean radiant temperature: {clickedFeature.mrt.toFixed(2)} &deg;C
                </li>
                <li>
                  non-Hispanic White: {(clickedFeature.white * 100).toFixed(2)}%
                </li>
                <li>
                  Hispanics: {(clickedFeature.hispanic * 100).toFixed(2)}%
                </li>
                <li>
                  African Americans: {(clickedFeature.black * 100).toFixed(2)}%
                </li>
                <li>
                  Asian Americans: {(clickedFeature.asian * 100).toFixed(2)}%
                </li>
                <li>
                  Per capita income: ${Number(clickedFeature.income) < 100 ? 'NaN' : Number(clickedFeature.income).toLocaleString('en-US')}
                </li>
                <br />
              </ul>
            </div>
          )
          }
        </div>
      </div>

      <div ref={mapContainerRef} id='map-container'>
        {/* <div className="sidebar1">
          <div id='legend-title'>
            <Optionsfield
              options={options}
              property={active.property}
              changeState={changeState}
            />
          </div>
        </div> */}

        {/* {clickedFeature && (
          <div className="sidebar3">
            <div id='feature-attribute-name'>
              The amount of Asian pops: {clickedFeature.asian}
              <br />
              Mean radiant temperature: {clickedFeature.mrt.toFixed(2)}&deg;C
            </div>
          </div>)
        } */}


        <div className="sidebar2">
          <p>
            Mean Radiant Temperature
          </p>
          {/* <Legend active={active} stops={active.stops} /> */}
          <Legend active={active} stops={legend} />

        </div>
      </div>
    </div>
  );
};

// export default MapContainer;
