import React from "react";
import Map from "./Map";

const MapResult = (props) => {
  // Need to replace with search location or default user location
  const location = [
    {
      street: '222 2nd St',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94105'
    },
    {
      street: '548 Market St',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94104'
    },
    {
      street: '1455 Market St',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94103'
    },
    {
      street: '988 Market St',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94102'
    },
    {
      street: '155 5th St',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94103'
    },
    {
      street: '888 Brannan St',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94103'
    }
  ];
  const style = {
    "z-index": 0
  };
  return(
    <div className="map-result" style={style}>
      <Map
        location={location}
        home={props.home}/>
    </div>
  );
};

export default MapResult;