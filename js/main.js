/*
Project 1 AVF Term 1210
Michael Smith Jr.
AVF Test Page
*/

	//Accelerometer Test Page

	 // The watch id references the current `watchAcceleration`
    var watchID = null;

    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", accelTest, false);

    // Cordova is ready
    //
    function accelTest() {
        setTimeout("startWatch()", 3000);
    };

    // Start watching the acceleration
    //
    function startWatch() {

        // Update acceleration every 3 seconds
        var options = { frequency: 3000 };

        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    };

    // Stop watching the acceleration
    //
    function stopWatch() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        };
    };

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        var element = document.getElementById('accelerometer');
        element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                            'Acceleration Y: ' + acceleration.y + '<br />' +
                            'Acceleration Z: ' + acceleration.z + '<br />' +
                            'Timestamp: '      + acceleration.timestamp + '<br />';
    };

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    };

    
	//Map Test Page
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
		var location = latitude+","+longitude;
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
                            '<li>PhoneGap Version: '  + device.cordova + '</li>' + 
                            '<li>Device Operating System: ' + device.platform + '</li>' +  
                            '<li>Operating System Version: '  + device.version  + '</li>';

	};







	
