import React from "react";
import mapKey from "./keys";
import jobSearch from "./PositionSearch";

const Map = (props) => {
    const L = window.L;
    const createMap = (error, response) => {
        var location = response.results[0].locations[0];
        var latLng = location.displayLatLng;
        L.mapquest.map('map', {
        center: latLng,
        layers: L.mapquest.tileLayer('map'),
        zoom: 14
        });
    };
    const divStyle = {
        width: "100%",
        height: "640px"
    };
    const location = {
        street: '1 City Hall Square',
        city: 'Boston',
        state: 'MA',
        postalCode: '02201'
    };

    L.mapquest.key = mapKey;

    L.mapquest.geocoding().geocode(location, createMap);

    //jobSearch(10.0, 11.00, 20.0, 22.00, ['qa'], 'Bobby');

    return(
        <div
            id="map"
            style={divStyle}>
        </div>
    );
};

export default Map;