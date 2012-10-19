/*
 Project 1 AVF Term 1210
 Michael Smith Jr.
 AVF Test Page
 */



document.addEventListener("deviceready", deviceReady, false);

function deviceReady(){
    //nothing
}


//Map Test Page
//Pulling Info from GPS
function onMapLoad(){
    navigator.geolocation.getCurrentPosition(showMap, onError);
}

//Successfully retrieved gps data
function showMap(position){
    var element = document.getElementById("map");
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var location = latitude+","+longitude;
    var mapImg="http://maps.googleapis.com/maps/api/staticmap?center="+location+"&markers=color:blue%7C"+location+"&zoom=14&size=400x300&sensor=false";
    element.innerHTML = "<img src='"+mapImg+"'>";
    
}

// onError Callback receives a PositionError object
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}


//On Screen Alert
//iOS working
//Android Not

function myAlert(){
    navigator.notification.alert('You are kinda hot!', dismissed, 'Hey You!', 'I know');
    
    
}

function dismissed(){
    //not sure
}

//Display Device Info

//Android not working

function devInfo(){
    
    document.addEventListener("deviceready", deviceInfo, false);
    
}

function deviceInfo(){
    var element = document.getElementById('devInfo');
    //console.log(device.name);
    
    element.innerHTML = '<li><h3>Device Name: ' + device.name + '</h3></li>' +
					    '<li><h3>PhoneGap Version: '  + device.cordova + '</h3></li>' +
					    '<li><h3>Device Operating System: ' + device.platform + '</h3></li>' +
					    '<li><h3>Operating System Version: '  + device.version  + '</h3></li>';
    
}


//Twitter Info
//document.addEventListener("deviceready", twitterInfo, false);
function twitterInfo(){
    //console.log("Getting Twitter Info");
    $.getJSON("http://search.twitter.com/search.json?q=diabetis&lang=en&rpp=10&include_entities=true&result_type=recent&callback=?",
              function(tweets){
              //console.log(tweets);
              for (i=0, j=tweets.results.length; i<j; i++){
              $(".tweets")
	              .append("<li class='apiLink'>" + "<p>" + "<img src='" +
	                      tweets.results[i].profile_image_url +
	                      "'/><br/>" + "<h2>" + tweets.results[i].from_user + "</h2>" +
	                      tweets.results[i].created_at + "<br/>" + "<br/>" + tweets.results[i].text +
	                      "</p>" + "</li>");
	              }
              
              }
              
);}

//Weather Underground Info
//Geo added to Forcast page
function weatherInfo(){
    navigator.geolocation.getCurrentPosition(showCond, onError);
    
}

//show forcast
function showCond(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var location = latitude+","+longitude;
    $.ajax({
           url : "http://api.wunderground.com/api/0298384b5e24ce52/geolookup/conditions/q/" + location +".json",
           dataType : "jsonp",
           success : function(weather) {
           //console.log(weather);
           var condition_pic = weather.current_observation.icon_url;
           var city = weather.location.city;
           var state = weather.location.state;
           var temp_f = weather.current_observation.temp_f;
           var humidity = weather.current_observation.relative_humidity;
           var wind_speed = weather.current_observation.wind_mph;
           var wind_dir = weather.current_observation.wind_dir;
           var wind_gust = weather.current_observation.wind_gust_mph;
           
           $(".forcast")
	           .append("<li>" + "<p>" + "<img src='" +
	                   condition_pic + "'/><br/>" + "<h2>" +
	                   city + ", " + state + "</h2>" +
	                   "Current Temp: " + temp_f + "°F" + "<br/>" +
	                   "Current Humidity: " + humidity + "<br/>" +
	                   "Wind Speed: " + wind_speed + " Mph" + "<br/>" +
	                   "Wind Direction: " + wind_dir + "<br/>" +
	                   "Gusting To: " + wind_gust + " Mph" + "<br/>" +
	                   "</p>" + "</li>");
	           
	           }
           });
    
}

//Radar Test Page
//Pulling Info from GPS
function onRadLoad(){
    navigator.geolocation.getCurrentPosition(showRad, onError);
}

//Successfully retrieved gps data
function showRad(position){
    var element = document.getElementById("radar");
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var location = latitude+","+longitude;
    var radImg="http://api.wunderground.com/api/0298384b5e24ce52/animatedradar/image.gif?centerlat="+latitude+"&centerlon="+longitude+"&radius=50&width=480&height=480&newmaps=1&timelabel=1&timelabel.y=10&num=5&delay=50";
    element.innerHTML = "<img src='"+radImg+"'>";
    
}

// Acceleration test

//Android not working

function accelTest(){
    document.addEventListener("deviceReady", accelEvent, false);
}

function accelEvent(){
    startWatch();
}

// Start watching the acceleration
//
function startWatch() {
    
    // Update acceleration every 3 seconds
    var options = { frequency: 1000 };
    
    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

// Stop watching the acceleration
//
function stopWatch() {
    if (watchID) {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }
}

// onSuccess: Get a snapshot of the current acceleration
//
function onSuccess(acceleration) {
    var element = document.getElementById('accel');
    element.innerHTML = '<li><h3>Acceleration X: ' + acceleration.x + '</h3></li>' +
					    '<li><h3>Acceleration Y: ' + acceleration.y + '</h3></li>' +
					    '<li><h3>Acceleration Z: ' + acceleration.z + '</h3></li>';
}

// onError: Failed to get the acceleration
//
function onError() {
    alert('onError!');
}












