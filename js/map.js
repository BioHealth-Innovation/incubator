function initialize() {
	//Map 39.0824908, -77.145012
	var latlng = new google.maps.LatLng(39.0824908, -77.145012);
	var MY_MAPTYPE_ID = 'custom_style';
	var featureOpts = [{
		stylers : [{
			hue : ''
		}, {
			visibility : 'simplified'
		}, {
			gamma : 0.5
		}, {
			weight : 0.5
		}]
	}, {
		elementType : 'labels',
		stylers : [{
			visibility : 'off'
		}]
	}, {
		featureType : 'water',
		stylers : [{
			color : ''
		}]
	}];

	var mapOptions = {
		panControl : false,
		zoomControl : false,
		mapTypeControl : false,
		scaleControl : false,
		streetViewControl : false,
		overviewMapControl : false,
		zoom : 17,
		scrollwheel : false,
		center : latlng,
		mapTypeControlOptions : {
			mapTypeIds : [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		},
		mapTypeId : MY_MAPTYPE_ID
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var styledMapOptions = {
		name : 'Custom Style'
	};

	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

	var database = {
		bhi : {
			title : 'BHI',
			lat : 39.0824908,
			lng : -77.145012,
			description : '<strong>BioHealth Innovation</strong><a target="_blank" href="https://www.google.com/maps/preview?q=BioHealth+Innovation+Rockville"><br>22 Baltimore Road<br>Rockville, MD 20850</a>',
		},
		metro : {
			title : 'Rockville Metro',
			lat : 39.0847532,
			lng : -77.1463325,
			description : 'Metro Station',
		},
		downtown : {
			title : 'Rockville Town Center',
			lat : 39.0846349,
			lng : -77.1515842,
			description : 'Rockville Square',
		}
	};

	markerArr = [];
	infowinArr = [];
	for (var key in database) {
		info = database[key];

		var newMarker = new google.maps.Marker({
			position : new google.maps.LatLng(info.lat, info.lng),
			map : map,
			title : info.title,
		});
		
/*
		google.maps.event.addListener(newMarker, 'click', function() {
			var infowindow = new google.maps.InfoWindow({
				content : '<div id="infowindow">' + info.description + '</div>'
			});
			infowindow.open(map, newMarker);
		});
*/		
		markerArr.push(newMarker);
	}

	/*
	 //BHI Marker
	 var marker = new google.maps.Marker({
	 position : new google.maps.LatLng(39.0824908, -77.145012),
	 map : map,
	 });

	 //Infowindow
	 var html = '<div id="infowindow">';
	 html += '<strong>BioHealth Innovation</strong><a target="_blank" href="https://www.google.com/maps/preview?q=BioHealth+Innovation+Rockville"><br>22 Baltimore Road<br>Rockville, MD 20850</a>';
	 html += '</div>';

	 var infowindow = new google.maps.InfoWindow({
	 content : html,
	 });

	 infowindow.open(map, marker);

	 //Adding click listener to open infowindow
	 google.maps.event.addListener(marker, 'click', function() {
	 infowindow.open(map, marker);
	 });
	 */
}

function loadScript() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
	document.body.appendChild(script);
}

window.onload = loadScript;

