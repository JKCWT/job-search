import React from "react";
import mapKey from "./keys";
import jobSearch from "./PositionSearch";

const Map = (props) => {
    const {
        location,
        home
    } = props;
    // Hooks to external mapquest file
    const L = window.L;

    const circleMarker = (color) => L.mapquest.icons.circle({
        primaryColor: color,
        shadow: true
    });
    // const blueCircle = circleMarker('3b5998');
    const redCircle = circleMarker('ff0000');
    // const yellowCircle = circleMarker('ffff00');
    
    const routeToWork = (from, to) => {
        var directions = L.mapquest.directions();
        
        directions.route({
            start: from,
            end: to
        });
    };
    const generateMarkersFeatureGroup = (response) => {
        var group = [];
        for (var i = 0; i < response.results.length; i++) {
            var location = response.results[i].locations[0];
            var locationLatLng = location.latLng;

            // Create a marker for each location
            var marker = L.marker(locationLatLng, {icon: redCircle})
                .bindPopup(location.adminArea5 + ', ' + location.adminArea3);

            group.push(marker);
        }
        return L.featureGroup(group);
    };
    const createMap = (error, response) => {
        var location = response.results[0].locations[0];
        var latLng = location.displayLatLng;
        var map = L.mapquest.map('map', {
            center: latLng,
            layers: L.mapquest.tileLayer('map'),
            zoom: 14
        });

        // Add controls to the map
        map.addControl(L.mapquest.control());
        // Generate the feature group containing markers from the geocoded locations
        var featureGroup = generateMarkersFeatureGroup(response);

        // Add markers to the map and zoom to the features
        featureGroup.addTo(map);
        map.fitBounds(featureGroup.getBounds());
    };
    // Map size
    const divStyle = {
        width: "100%",
        height: "660px"
    };

    // Add API key
    L.mapquest.key = mapKey;

    // Render the map
    L.mapquest.geocoding().geocode(location, createMap);

    console.log(home);
    if(home) {
        routeToWork(home, location[3]);
    }

    jobSearch(10.0, 11.00, 20.0, 22.00, ['qa'], 'Bobby').then(function (response) {
        console.info(response);
    });

    return(
        <div
            id="map"
            style={divStyle}>
        </div>
    );
};

export default Map;