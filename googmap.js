

// function createMap(){

// 	function makeMarkers(){
// 			let paths = []
// 			let dest = store.destinationLatLng;
			
// 			function getCircle(color = 'blue'){
// 				return {
// 					path: google.maps.SymbolPath.CIRCLE,
// 					scale: 13,
// 					strokeColor: color,
// 					strokeWeight: 1,
// 					fillColor: 'white',
// 					fillOpacity: 1,
// 				};
// 			}
			

// 			[...store.originsLatLng].forEach((loc, i)=>{
// 				map.addMarker({lat: loc.lat, lng: loc.lng, title: loc.airport, label: {text: loc.airport, fontSize: '10px'}, icon: getCircle(store.colors[i]) }) // add this marker `${i+1}`
// 				paths.push([[loc.lat, loc.lng],[dest.lat, dest.lng]]) // draw a path from this origin to destination
// 			})
// 			map.addMarker({lat: dest.lat, lng: dest.lng, title: dest.airport, label: {text: dest.airport, fontSize: '10px'},
// 				icon: getCircle('black') })  
			
// 			paths.forEach((path, i)=> {

// 				map.drawPolyline({
// 					path: path,
// 					strokeColor: store.colors[i],
// 					strokeOpacity: 0.8,
// 					strokeWeight: 2,
// 					icons: [{
// 						icon: {path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW },
// 						offset: 0,
// 						repeat: "100px"
// 					}]
// 				});
// 			})
// 		}

// 	function updateMapBounds(){
// 			let bounds = [...store.originsLatLng, store.destinationLatLng];
//             let westOffset = store.destinationLatLng;
//             bounds.forEach((e, i)=>{ if (e.lng < westOffset.lng) westOffset = e})
// 			westOffset.lng -= 40; // create a dot to move the map to the right
//             console.log('bounds', bounds)
//             console.log('furthest west', westOffset)
// 			map.fitLatLngBounds([...bounds, westOffset])
// 		}

// makeMarkers()
// updateMapBounds()	
// }

function getCircle(color = 'grey'){
                return {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 13,
                    strokeColor: color,
                    strokeWeight: 1,
                    fillColor: 'white',
                    fillOpacity: 1,
                };
            }

function addMarkerToMap(obj){
    let {lat,lng,airport} = obj;
    map.addMarker({lat, lng, airport, label: {text: airport, fontSize: '10px'}, icon: getCircle() }) // add this marker `${i+1}`
}

function doMapMarkers(){
    map.removeMarkers()
    addMarkerToMap(store.destinationLatLng)
    store.originsLatLng.forEach(orig=> addMarkerToMap(orig))
    drawRoutes();

}

function drawRoutes(){
    let dest = store.destinationLatLng
    if(dest && store.originsLatLng.length){
        // remove current polylines first
        map.removePolylines()
        store.polylines = [];

        console.log('routes being drawn')
        store.originsLatLng.forEach( (orig, i)=>{
            let newLine = new google.maps.Polyline({
                path: [{lat: orig.lat, lng: orig.lng},{lat: dest.lat, lng: dest.lng}],
                strokeColor: store.colors[i],
                strokeOpacity: 0.4,
                strokeWeight: 1,
                icons: [{
                icon: {path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW },
                offset: 0,
                repeat: "75px"
                }]
            })
            store.polylines.push(newLine)
        })
    }
}



    let map = new GMaps({
      div: '#mymap',
      zoom: 3,
      lat: 39.8333333,
      lng: -158.585522,
      disableDefaultUI: true,

      // click: function(e) {
      //   alert('click');
      // },
      // dragend: function(e) {
      //   alert('dragend');
      // }
      styles: [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#999999"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]
    });

