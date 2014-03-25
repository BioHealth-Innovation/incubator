function initialize() {
	//Map 39.0824908, -77.145012
	var latlng = new google.maps.LatLng(39.083647, -77.145292);
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
			visibility : 'off',
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
		zoom : 15,
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
			description : '<div class= "infowindow"><img src="/incubator/images/bhi-office-external.jpg"/><p><strong>BioHealth Innovation</strong><a target="_blank" href="https://www.google.com/maps/preview?q=BioHealth+Innovation+Rockville"><br>22 Baltimore Road<br>Rockville, MD 20850</a><br><br>Something about the building here.</p></div>',
			icon : '',
		},
		metro : {
			title : 'Rockville Metro',
			lat : 39.0847532,
			lng : -77.1463325,
			description : '<div class= "infowindow"><img src="/incubator/images/rockville-metro-external.jpg"/><p><strong>Rockville Metro Station</strong><a target="_blank" href="https://www.google.com/maps/preview?q=Rockville+Metro+Station"><br>251 Hungerford Drive<br>Rockville, MD 20850</a><br><br>Something about the metro here.</p></div>',
			icon : '',
		},
		downtown : {
			title : 'Rockville Town Center',
			lat : 39.0846349,
			lng : -77.1515842,
			description : '<div class= "infowindow"><img src="/incubator/images/rockville-town-square-external.jpg"/><p><strong>Rockville Town Center</strong><a target="_blank" href="https://www.google.com/maps/preview?q=Rockville+Town+Center"><br>200 E Middle Lane<br>Rockville, MD 20850</a><br><br>Something about the town center here.</p></div>',
			icon : '',
		}
	};

	markerArr = [];
	var infowindow = new google.maps.InfoWindow();

	for (var key in database) {
		info = database[key];

		var newMarker = new google.maps.Marker({
			position : new google.maps.LatLng(info.lat, info.lng),
			map : map,
			title : info.title,
			icon : info.icon,
		});

		google.maps.event.addListener(newMarker, 'click', (function(newMarker, key) {
			return function() {
				infowindow.setContent(database[key].description);
				infowindow.open(map, newMarker);
			};
		})(newMarker, key));

		markerArr.push(newMarker);
	}
}

function loadScript() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
	document.body.appendChild(script);
}

window.onload = loadScript;