// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
  center: [45.52, -122.67],
  zoom: 5
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/ctopham/cjis5dcbs1rre2so1wae9r4ei/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3RvcGhhbSIsImEiOiJjamh4aHJ4amgwYnhiM3FtcTNrNnhyMHZ3In0.A5V1_2ns65IgvuxqNHvDgQ").addTo(myMap);


