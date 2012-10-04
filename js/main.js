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
		var location = latitude+","+longitude
		var mapImg="http://maps.googleapis.com/maps/api/staticmap?center="+location+"&markers=color:blue%7C"+location+"&zoom=14&size=400x300&sensor=false";
		element.innerHTML = "<img src='"+mapImg+"'>";
							//"Latitude: " +position.coords.latitude+ "<br />"+
							//"Longitude: " +position.coords.longitude+ "<br />"
							
							//"<img src= 'http://maps.googleapis.com/maps/api/staticmap?zoom=15&amp;size=480x280&amp;maptype=roadmap&amp;markers=color:red|'"+latitude+"','"+longitude+"'&amp;sensor=true'>"
							//'<img src="http://maps.google.com/maps/api/staticmap?zoom=15&size=540x280&maptype=roadmap&markers=color:red|33.2845474,-96.7817025&sensor=true">'
	};

	// onError Callback receives a PositionError object
	    function onError(error) {
	        alert('code: '    + error.code    + '\n' +
	              'message: ' + error.message + '\n');
	    };

	document.addEventListener("deviceready", deviceReady, false);

	function deviceReady(){
		//nothing
	};
	function dismissed(){
		//not sure
	};

	function myAlert(){
		navigator.notification.alert('You are kinda hot!', dismissed, 'Hey You!', 'I know');


	};
