/*
Project 1 AVF Term 1210
Michael Smith Jr.
AVF Test Page
*/


	//Waiting for PhoneGap to load
	document.addEventListener("deviceready", onMapLoad, false);

	//Pulling Info from GPS
	function onMapLoad(){
		navigator.geolocation.getCurrentPosition(showMap, onError);
	};

	//Successfully retrieved gps data
	function showMap(position){
		var element = document.getElementById("map");
		element.innerHTML = //"Latitude: " +position.coords.latitude+ "<br />"+
							//"Longitude: " +position.coords.longitude+ "<br />"
							"http://maps.google.com/maps/api/staticmap?
										zoom=5
										&amp;size=540x280
										&amp;maptype=satellite
										&amp;markers=color:red|"+position.coords.latitude+","+position.coords.longitude+
										"&amp;sensor=true"

	};

	// onError Callback receives a PositionError object
	    function onError(error) {
	        alert('code: '    + error.code    + '\n' +
	              'message: ' + error.message + '\n');
	    };

