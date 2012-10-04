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
							 
	};

	// onError Callback receives a PositionError object
	    function onError(error) {
	        alert('code: '    + error.code    + '\n' +
	              'message: ' + error.message + '\n');
	    };
	//On Screen Alert
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
	//Display Device Info
	document.addEventListener("deviceready", devInfo, false);

	function devInfo(){
		var element = document.getElementById('devInfo');

        element.innerHTML = '<li>Device Name: '     + device.name     + '</li>' + 
                            '<li>Device Cordova: '  + device.cordova + '</li>' + 
                            '<li>Device Platform: ' + device.platform + '</li>' +  
                            '<li>Device Version: '  + device.version  + '</li>';

	};

	//Display Battery Status
	function pageLoad(){
		document.addEventListener("deviceready", battInfo, false);
	};

	function battInfo(){
		window.addEventListener("batterystatus", battStats, false);
	};
	
	function battStats(info){
		var element = document.getElementById('battInfo');
		element.innerHTML = '<li>Battery Level: ' + info.level + '</li>' +  
                        	'<li>Charging Status: '  + info.isPlugged  + '</li>';

	};


	
