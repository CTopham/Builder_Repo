// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

 // Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  console.log(data)});
// ------------------------------------------------------------------------------


fetch(queryUrl).then(data => data.json()).then(dataJson =>{
  createFeatures(dataJson.features);
})
function createFeatures(earthquakeData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
  }

  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature
  });

// -----------------------------------------------------------------------------
  

  // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
}


function createMap(earthquakes) {
  var streetmap = L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1IjoiY3RvcGhhbSIsImEiOiJjamh4aHJ4amgwYnhiM3FtcTNrNnhyMHZ3In0.A5V1_2ns65IgvuxqNHvDgQ"
  );
  var darkmap = L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1IjoiY3RvcGhhbSIsImEiOiJjamh4aHJ4amgwYnhiM3FtcTNrNnhyMHZ3In0.A5V1_2ns65IgvuxqNHvDgQ"
  );
  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Earthquakes: earthquakes
  };


  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 3.5,
    layers: [streetmap, earthquakes]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
};




