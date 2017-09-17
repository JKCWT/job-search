import React from "react";
import Map from "./Map";

const MapResult = (props) => {
  // Need to replace with search location or default user location
  const location = [
    {
      street: '231',
      city: 'Millbrae',
      state: 'CA',
      postalCode: '94030'
    },
    {
      street: '950 Elm Ave',
      city: 'San Bruno',
      state: 'CA',
      postalCode: '94066'
    },
    {
      street: '600 W California Ave',
      city: 'Sunnyvale',
      state: 'CA',
      postalCode: '94086'
    }
  ];
  const style = {
    "z-index": 0
  };
  return(
    <div className="map-result" style={style}>
      <Map
        location={location} />
    </div>
  );
};

export default MapResult;