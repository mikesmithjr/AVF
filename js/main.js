/*
Project 1 AVF Term 1210
Michael Smith Jr.
AVF Test Page
*/



    
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


	//Twitter Info
	document.addEventListener("deviceready", twitterInfo, false);
	function twitterInfo(){
		console.log("Getting Twitter Info");
		$.getJSON("http://search.twitter.com/search.json?q=diabetis&rpp=5&include_entities=true&result_type=recent&callback=?",
			function(tweets){
				console.log(tweets);
				for (i=0, j=tweets.results.length; i<j; i++){
					$(".tweets")
						.append("<li class='apiLink'>" + "<p>" + "<img src='" + 
							tweets.results[i].profile_image_url + 
							"'/><br/>" + tweets.results[i].text + 
							"'<em>" + "</p>" + "</li>");
				}

			}
		
	)};

	//Weather Underground Info
	document.addEventListener("deviceready", weatherInfo, false);
	function weatherInfo(){
		$.ajax({ 
			url : "http://api.wunderground.com/api/0298384b5e24ce52/geolookup/conditions/q/TX/Dallas.json",
		 	dataType : "jsonp",
		 	 success : function(weather) { 
		 	 	console.log(weather);
		 	 	var condition_pic = weather['current_observation']['icon_url'];
		 	 	var city = weather['location']['city'];
		 	 	var state = weather['location']['state'];
		 	 	var temp_f = weather['current_observation']['temp_f'];
		 	 	var humidity = weather['current_observation']['relative_humidity'];
		 	 	var wind_speed = weather['current_observation']['wind_mph'];
		 	 	var wind_dir = weather['current_observation']['wind_dir'];
		 	 	var wind_gust = weather['current_observation']['wind_gust_mph'];

		 	 	$(".forcast")
						.append("<li>" + "<p>" + "<img src='" +
							condition_pic + "'/><br/>" + 
							city + ", " + state + 
							"<br/>" + "Current Temp: " + temp_f + "°F" + "<br/>"
							+ "Current Humidity: " + humidity + "<br/>" 
							+ "Wind Speed: " + wind_speed + " Mph" + "<br/>"
							+ "Wind Direction: " + wind_dir + "<br/>"
							+ "Gusting To: " + wind_gust + " Mph" + "<br/>"
							+ "</p>" + "</li>");

		 	 }
		 });


	};

	//Radar Test Page
	document.addEventListener("deviceready", onRadLoad, false);

	//Pulling Info from GPS
	function onRadLoad(){
		navigator.geolocation.getCurrentPosition(showRad, onError);
	};

	//Successfully retrieved gps data
	function showRad(position){
		var element = document.getElementById("radar");
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var location = latitude+","+longitude;
		var radImg="http://api.wunderground.com/api/0298384b5e24ce52/animatedradar/image.gif?centerlat="+latitude+"&centerlon="+longitude+"&radius=50&width=480&height=480&newmaps=1&timelabel=1&timelabel.y=10&num=5&delay=50";
		element.innerHTML = "<img src='"+radImg+"'>";
							 
	};














	
