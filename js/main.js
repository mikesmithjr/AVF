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
	console.log("hello");
	function twitterInfo(){
		console.log("Getting Twitter Info");
		$.getJSON("http://search.twitter.com/search.json?q=diabetic&rpp=5&include_entities=true&result_type=recent&callback=?",
			function(tweets){
				console.log(tweets);
				for (i=0, j=tweets.results.length; i<j; i++){
					$(".tweets")
						.append("<li>" + "<p>" + "<img src='" + tweets.results[i].profile_image_url + "'/><br/>" + tweets.results[i].text + "'<em>" + "</p>" + "</li>");
				}

			}
				/*$.ajax({
				    url      : "http://search.twitter.com/search.json?q=diabetic&rpp=5&include_entities=true&result_type=recent&callback=?",
				    type     : "GET",
				    dataType : "json",
				    success  : function(json){
				        console.log(json);
				        $.each(json.rows, function(i, tweet){
				        	console.log(i + " " + tweet.value.fname[0] + " " + tweet.value.fname[1]);
				        	
				        	
				            /// do stuff
						    var makeli = $("<li id='listItem"+i+"'></li>");
						    var optSubText = $( "<img src='"+tweet.value.treatments[1]+".jpg'/>"+
				    				"<h3>"+tweet.value.date[1]+"</h3>"+
				    				"<h3>"+tweet.value.currentTime[1]+"</h3>"+
				    				"<p>"+tweet.value.fname[0]+" "+tweet.value.fname[1]+"</p>"+
				    				"<p>"+tweet.value.lname[0]+" "+tweet.value.lname[1]+"</p>"+
				    				"<p>"+tweet.value.bsreading[0]+" "+tweet.value.bsreading[1]+"</p>"+
				    				"<p>"+tweet.value.sex[0]+" "+tweet.value.sex[1]+"</p>"+
				    				"<p>"+tweet.value.condition[0]+" "+tweet.value.condition[1]+"</p>"+
				    				"<p>"+tweet.value.treatments[0]+" "+tweet.value.treatments[1]+"</p>"+
				    				"<p>"+tweet.value.comments[0]+" "+logItem.value.comments[1]+"</p>");
				    			
						    
						 	});
				   		
				    },
				    error: function(){
				    	alert("JSON Ajax Error");
				    }
				});*/
		
	)};
	
