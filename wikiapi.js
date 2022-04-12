//This function is called from wikitest.html with <button onclick="fn1()" ...
//When html button is clicked, this function will take the values of the input box
//and display all the information below
function fn1() {
  //This is for DOM manipulation checking if its ready, probably wont need this in swift
  $(document).ready(function() {
    var xtexInputValue = $("#xinput").val(); //create and set lat value from html
    var ytexInputValue = $("#yinput").val(); //create and set lon value from html

    //these next two lines are not needed, but I kept them because it shows you how
    //to display basic information in html
    //This method will not work for displaying iterating through arrays in a JSON object
    $("#xcoordback p span").html(xtexInputValue);
    $("#ycoordback p span").html(ytexInputValue);

    //This variable dynamically builds the URL to be sent to the MediaWiki API
    var wikiUrl =
      "https://en.wikipedia.org/w/api.php?" + //All MediaWiki API URLS start with this
      "action=query&list=geosearch&gscoord=" + //the paramaters of our search start with query, list, geosearch
      encodeURI(xtexInputValue) + //encodeURI needed to use number as string
      "|" + //Wikimedia seperates its lat and lon coordinates with a "|" symbool
      encodeURI(ytexInputValue) +
      "&gsradius=10000&gslimit=10&format=json&callback=?"; //set radius of search, limit of results, format to json,
    //callback is needed to fix "cross-origin-access" error

    //$ means I am using JQuery, which is an extension of javascript
    //I use JQuery because way javascript requires a php script to fetch api data, JQuery does not
    $.getJSON(wikiUrl, function(data) {
      //JQuery's getJSON function takes in a URL and a function to be run with this data
      //Logging the data into the console for debugging
      //to view this, on windows chrome it is f12 and click console
      console.log(data["query"]["geosearch"]);
      var i;
      for (i = 0; i < data["query"]["geosearch"].length; i++) {
        console.log(data["query"]["geosearch"][i]["title"]);
        console.log(data["query"]["geosearch"][i]["pageid"]);
        console.log(data["query"]["geosearch"][i]["dist"]);
      }

      //The following is all the 4 loops for displaying the different data  to the webpage.
      //It may look complex at first, but most of it is repeat code and can be made much more simiple-
      //by creating a displaySpecificData(data, type) function with the parameters being the data array-
      //and the type of data you want to display and call it in a more compact way like:
      //displaySpecificData(data, title);
      //displaySpecificData(data, lon);
      //displaySpecificData(data, lat);
      //displaySpecificData(data, dist);
      //displaySpecificData(data, pageid);

      for (i = 0; i < data["query"]["geosearch"].length; i++) {
        //for loop for the amount of results returned by the geosearch
        var specnode = document.createElement("li"); //creates a new list element in HTML
        var titletextnode = document.createTextNode(
          data["query"]["geosearch"][i]["title"] //creates a text node with data returned for "title" parameter
        );
        specnode.appendChild(titletextnode); //takes the HTML element created (specnode), and adds the text node to the created list element
        document.getElementById("dynamic-list").appendChild(specnode); //Finds the HTML element "dynamic-list" in document and adds it to the page
      }
      var j;

      //the loop for displaying latitude values is very similar, but the data type is returned is a long number-
      //so to trim it I convert it to string with .toString() and trim it with the substring method
      for (j = 0; j < data["query"]["geosearch"].length; j++) {
        var specstring = data["query"]["geosearch"][j]["lat"].toString(); //toString()
        var trimmedString; //create new variable for shortened string
        if (specstring.length > 8) {
          //check if original string is longer than 8
          trimmedString = specstring.substring(0, 7); //trim it if it is
        } else {
          trimmedString = specstring; //if shorter, store original string to trimmedString
        }
        console.log(trimmedString.length); //console logging for debugging
        var node = document.createElement("li"); //this part is the same as the first for loop
        var lontextnode = document.createTextNode(trimmedString);
        node.appendChild(lontextnode);
        //notice I changed the ElementID to "spec-list" because I want to write the data to a different list
        document.getElementById("spec-list").appendChild(node);
      }

      //This loop is for longitude and the only difference is "lat" becomes "lon" and "spec-list" becomes "lon-list"
      for (j = 0; j < data["query"]["geosearch"].length; j++) {
        var maxlength = 8;
        var specstring = data["query"]["geosearch"][j]["lon"].toString();
        var trimmedString;
        if (specstring.length > 8) {
          trimmedString = specstring.substring(0, 8);
        }
        console.log(trimmedString.length);
        var node = document.createElement("li");
        var lontextnode = document.createTextNode(trimmedString);
        node.appendChild(lontextnode);
        document.getElementById("lon-list").appendChild(node);
      }

      //for loop for distance is very similar to title changing to "dist" and "dist-list"
      for (j = 0; j < data["query"]["geosearch"].length; j++) {
        var specnode = document.createElement("li");
        var titletextnode = document.createTextNode(
          data["query"]["geosearch"][j]["dist"]
        );
        specnode.appendChild(titletextnode);
        document.getElementById("dist-list").appendChild(specnode);
      }

      //for loop for displaying Page ID
      for (j = 0; j < data["query"]["geosearch"].length; j++) {
        var specnode = document.createElement("li");
        var titletextnode = document.createTextNode(
          data["query"]["geosearch"][j]["pageid"]
        );
        specnode.appendChild(titletextnode);
        document.getElementById("pageid-list").appendChild(specnode);
      }
    });
  });
}

function getSummary() {
  $(document).ready(function() {
    var summaryValue = $("#summaryinputbox").val();

    var wikiUrl =
      "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + //All MediaWiki API URLS start with this
      encodeURI(summaryValue) +
      "&callback=?";

    $.getJSON(wikiUrl, function(data) {
      var pageInfo = Object.values(data["query"]["pages"]);
      var pgID = pageInfo[0]["pageid"];
      var pageDesc = data["query"]["pages"][encodeURI(pgID)]["extract"];

      console.log(pageDesc);
      console.log(pgID);
      console.log(pageInfo);

      var summarynode = document.createElement("span");
      var summarytextnode = document.createTextNode(pageDesc);
      summarynode.appendChild(summarytextnode);
      document.getElementById("summaryspan").appendChild(summarynode);
    });
  });
}
