// Mapbox API
var mapbox = "https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3RvcGhhbSIsImEiOiJjamh4aHJ4amgwYnhiM3FtcTNrNnhyMHZ3In0.A5V1_2ns65IgvuxqNHvDgQ";

// Creating map object
var myMap = L.map("map", {
  center: [40.7, -73.95],
  zoom: 1.3
});

// Adding tile layer to the map
L.tileLayer(mapbox).addTo(myMap);

function markerSize(mag) {
  return mag / 40;
}

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";


// Grabbing the data with d3..
d3.json(url, function(response) {

    // Creating a new marker cluster group
    var markers = L.markerClusterGroup();
    console.log(response.features)

  // Loop through our data...
    for (var i = 0; i < response.features.length; i++) {
      // set the data location property to a variable
      console.log(response.features[i].properties.mag)
      var location = response.features[i].geometry;
  
      // If the data has a location property...
      if (location) {
  
        // Add a new marker to the cluster group and bind a pop-up
        markers.addLayer(L.circle([location.coordinates[1], location.coordinates[0]],{fillOpacity: 0.75,
          color: "red",
          fillColor: "purple", 
          radius:response.features[i].properties.mag}));

      }
      
    }
    
    // Add our marker cluster layer to the map
    myMap.addLayer(markers);
});
  //===============================Bubbles=================================================
  
  // //var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";
  // d3.json(url, function(response) {
  
  // console.log(response.features[2].geometry.coordinates)
  // console.log(response.features[1].properties.mag)  
    
  //   function markerSize(mag) {
  //   return response.features[1].properties.mag * 10;
  // }
  
  // // Loop through the cities array and create one marker for each city object
  // for (var i = 0; i <response.features.length; i++) {
  //   var bubble = response.features[i].geometry;
  //   L.circle(bubble.coordinates[1], bubble.coordinates[0], {
  //     fillOpacity: 0.75,
  //     color: "white",
  //     fillColor: "purple",
  //     // Setting our circle's radius equal to the output of our markerSize function
  //     // This will make our marker's size proportionate to its population
  //     radius: markerSize(response.features[i].properties.mag)
  //   }).bindPopup("<h1>" + response.features[i].properties.place + "</h1> <hr> <h3> Address: " + response.features[i].properties.place + "</h3>").addTo(myMap);
  
  
  // } });