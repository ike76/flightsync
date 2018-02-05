let map;

function createMap(){

	
	map = new GMaps({
	  div: '#mymap',
	  // zoom: 13,
	  lat: store.destinationLatLng.lat,
	  lng: store.destinationLatLng.lng,
	  // click: function(e) {
	  //   alert('click');
	  // },
	  // dragend: function(e) {
	  //   alert('dragend');
	  // }
	});

	// map.addMarker({
	// 	lat: store.destinationLatLng.lat,
	// 	lng: store.destinationLatLng.lng,
	// 	title: store.destination
	// })
	
	(function makeMarkers(){
			let paths = []
			let dest = store.destinationLatLng;
			[...store.originsLatLng].forEach((loc, i)=>{
				map.addMarker({lat: loc.lat, lng: loc.lng, title: loc.airport, label: loc.airport, }) // add this marker `${i+1}`
				paths.push([[loc.lat, loc.lng],[dest.lat, dest.lng]]) // draw a path from this origin to destination
			})
			map.addMarker({lat: dest.lat, lng: dest.lng, title: dest.title, 
				icon: {path: google.maps.SymbolPath.CIRCLE, scale: 6, strokeWeight: 3, fillColor: 'white'} })  
			
			paths.forEach((path, i)=> {
				map.drawPolyline({
					path: path,
					strokeColor: store.resultsObjects[i].color,
					strokeOpacity: 0.8,
					strokeWeight: 2,
					icons: [{
						icon: {path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW },
						offset: 0,
						repeat: "50px"
					}]
				});
			})
		}())

	(function updateMapBounds(){
			let bounds = [...store.originsLatLng, store.destinationLatLng]
			console.log('bounds', bounds)
			map.fitLatLngBounds(bounds)
		}())
	
}



