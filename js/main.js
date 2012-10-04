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
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		element.innerHTML = //"Latitude: " +position.coords.latitude+ "<br />"+
							//"Longitude: " +position.coords.longitude+ "<br />"
							"<img src= 'http://maps.google.com/maps/api/staticmap?zoom=5&amp;size=480x280&amp;maptype=roadmap&amp;markers=color:red'"+latitude+"','"+longitude+"'&amp;sensor=true'>"

	};

	// onError Callback receives a PositionError object
	    function onError(error) {
	        alert('code: '    + error.code    + '\n' +
	              'message: ' + error.message + '\n');
	    };

	document.addEventListener("deviceready", myAlert, false);
	function myAlert(){
		navigator.notification.alert('You are kinda hot!', 'Hey You!', 'I know');


	};
