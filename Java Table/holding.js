// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $lookInput = document.querySelector("#look");
var $dInput = document.querySelector("#dlook");

var $city = document.querySelector("#city");
var $state = document.querySelector("#state");
var $country = document.querySelector("#country");
var $shape = document.querySelector("#shape");
var $dTime = document.querySelector("#dtime");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$city.addEventListener("click", citySearch);


// Set filteredAlien to alienData initially
var filteredAlien = alienData;

// renderTable renders the filteredAlien to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredAlien.length; i++) {
    // Get get the current address object and its fields
    var address = filteredAlien[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
      
}
}
}

function citySearch() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterlook = $lookInput.value.trim().toLowerCase();

  // Set filteredAlien to an array of all addresses whose "state" matches the filter
  filteredAlien = alienData.filter(function(pickles) {
    var alientState = pickles.city.toLowerCase();

    // If true, add the address to the filteredAlien, otherwise don't add it to filteredAlien
    return alientState == filterlook;
  });
  renderTable();
}

// =========================State==============================

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$state.addEventListener("click", stateSearch);

// Set filteredAlien to alienData initially
var filteredAlien = alienData;

// renderTable renders the filteredAlien to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredAlien.length; i++) {
    // Get get the current address object and its fields
    var address = filteredAlien[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function stateSearch() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterlook = $lookInput.value.trim().toLowerCase();

  // Set filteredAlien to an array of all addresses whose "state" matches the filter
  filteredAlien = alienData.filter(function(pickles) {
    var alientState = pickles.state.toLowerCase();

    // If true, add the address to the filteredAlien, otherwise don't add it to filteredAlien
    return alientState == filterlook;
  });
  renderTable();
}

// =========================Country==============================

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$country.addEventListener("click", countrySearch);

// Set filteredAlien to alienData initially
var filteredAlien = alienData;

// renderTable renders the filteredAlien to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredAlien.length; i++) {
    // Get get the current address object and its fields
    var address = filteredAlien[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function countrySearch() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterlook = $lookInput.value.trim().toLowerCase();

  // Set filteredAlien to an array of all addresses whose "state" matches the filter
  filteredAlien = alienData.filter(function(pickles) {
    var alientState = pickles.country.toLowerCase();

    // If true, add the address to the filteredAlien, otherwise don't add it to filteredAlien
    return alientState == filterlook;
  });
  renderTable();
}
// =========================Shape==============================

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$shape.addEventListener("click", shapeSearch);

// Set filteredAlien to alienData initially
var filteredAlien = alienData;

// renderTable renders the filteredAlien to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredAlien.length; i++) {
    // Get get the current address object and its fields
    var address = filteredAlien[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function shapeSearch() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterlook = $lookInput.value.trim().toLowerCase();

  // Set filteredAlien to an array of all addresses whose "state" matches the filter
  filteredAlien = alienData.filter(function(pickles) {
    var alientState = pickles.shape.toLowerCase();

    // If true, add the address to the filteredAlien, otherwise don't add it to filteredAlien
    return alientState == filterlook;
  });
  renderTable();
}

// =========================Date/time==============================

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$dTime.addEventListener("click", dateSearch);

// Set filteredAlien to alienData initially
var filteredAlien = alienData;

// renderTable renders the filteredAlien to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredAlien.length; i++) {
    // Get get the current address object and its fields
    var address = filteredAlien[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}





function dateSearch() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterlook = $dInput.value.trim();

  // Set filteredAlien to an array of all addresses whose "state" matches the filter
  filteredAlien = alienData.filter(function(pickles) {
    var alientState = pickles.datetime.trim();

    // If true, add the address to the filteredAlien, otherwise don't add it to filteredAlien
    return alientState == filterlook;

  });
renderTable();
}
renderTable();

