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
renderTable();

// =========================City==============================

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

renderTable();

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
renderTable();

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

renderTable();

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
renderTable();

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

// ========================================================================================================================= //
// ============================================== Pagination Not working with search = ( ====================================


//  // get the table element
	
//  var $table = document.getElementById("alienTable"),
//  // number of rows per page
//  $n = 50,
//  // number of rows of the table
//  $rowCount = $table.rows.length,
//  // get the first cell's tag name (in the first row)
//  $firstRow = $table.rows[0].firstElementChild.tagName,
//  // boolean var to check if table has a head row
//  $hasHead = ($firstRow === "TH"),
//  // an array to hold each row
//  $tr = [],
//  // loop counters, to start count from rows[1] (2nd row) if the first row has a head tag
//  $i,$ii,$j = ($hasHead)?1:0,
//  // holds the first row if it has a (<TH>) & nothing if (<TD>)
//  $th = ($hasHead?$table.rows[(0)].outerHTML:"");
//  // count the number of pages
//  var $pageCount = Math.ceil($rowCount / $n);
//  // if we had one page only, then we have nothing to do ..
//  if ($pageCount > 1) {
//      // assign each row outHTML (tag name & innerHTML) to the array
//      for ($i = $j,$ii = 0; $i < $rowCount; $i++, $ii++)
//          $tr[$ii] = $table.rows[$i].outerHTML;
//      // create a div block to hold the buttons
//      $table.insertAdjacentHTML("afterend","<div id='buttons'></div");
//      // the first sort, default page is the first one
//      sort(1);
//  }
 
//  // ($p) is the selected page number. it will be generated when a user clicks a button
//  function sort($p) {
//      /* create ($rows) a variable to hold the group of rows
//      ** to be displayed on the selected page,
//      ** ($s) the start point .. the first row in each page, Do The Math
//      */
//      var $rows = $th,$s = (($n * $p)-$n);
//      for ($i = $s; $i < ($s+$n) && $i < $tr.length; $i++)
//          $rows += $tr[$i];
     
//      // now the table has a processed group of rows ..
//      $table.innerHTML = $rows;
//      // create the pagination buttons
//      document.getElementById("buttons").innerHTML = pageButtons($pageCount,$p);
//      // CSS Stuff
//      document.getElementById("id"+$p).setAttribute("class","active");
//  }
 
 
//  // ($pCount) : number of pages,($cur) : current page, the selected one ..
//  function pageButtons($pCount,$cur) {
//      /* this variables will disable the "Prev" button on 1st page
//         and "next" button on the last one */
//      var $prevDis = ($cur == 1)?"disabled":"",
//          $nextDis = ($cur == $pCount)?"disabled":"",
//          /* this ($buttons) will hold every single button needed
//          ** it will creates each button and sets the onclick attribute
//          ** to the "sort" function with a special ($p) number..
//          */
//          $buttons = "<input type='button' value='&lt;&lt; Prev' onclick='sort("+($cur - 1)+")' "+$prevDis+">";
//      for ($i=1; $i<=$pCount;$i++)
//          $buttons += "<input type='button' id='id"+$i+"'value='"+$i+"' onclick='sort("+$i+")'>";
//      $buttons += "<input type='button' value='Next &gt;&gt;' onclick='sort("+($cur + 1)+")' "+$nextDis+">";
//      return $buttons;
//  }