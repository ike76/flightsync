

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

function addMarkerToMap(obj, i){
    let {lat,lng,airport} = obj;
    map.addMarker({lat, lng, airport, label: {text: airport, fontSize: '10px'}, icon: getCircle(store.colors[i]) }) // add this marker `${i+1}`
}

function doMapMarkers(){
    map.removeMarkers()
    addMarkerToMap(store.destinationLatLng)
    store.originsLatLng.forEach((orig, i)=> addMarkerToMap(orig, i))
    drawRoutes();
    if(store.originsLatLng.length) doMapBounds();
        else map.panTo({lat: store.destinationLatLng.lat + store.mapOffset, lng: store.destinationLatLng.lng})
}

// function makeBounds(){
//     store.bounds = new google.maps.LatLngBounds();
// }
function doMapBounds(){
    let bounds = new google.maps.LatLngBounds();
    let highestLat = 0;
    let lowestLat = 180;
    [...store.originsLatLng, store.destinationLatLng].forEach(loc=>{
        if (loc.lat > highestLat) highestLat = loc.lat;
        if (loc.lat < lowestLat ) lowestLat = loc.lat
        bounds.extend(loc)
    });
    store.mapOffset = (highestLat - lowestLat) * 1.25;
    console.log('store.mapOffset', store.mapOffset)
    let offsetPoint = {lat: highestLat + store.mapOffset, lng: store.destinationLatLng.lng}
    bounds.extend(offsetPoint);
    map.fitBounds(bounds)
}

function drawRoutes(){
    let dest = store.destinationLatLng
    if(dest && store.originsLatLng.length){
        // remove current polylines first
        map.removePolylines()

        console.log('routes being drawn')
        store.originsLatLng.forEach( (orig, i)=>{
            map.drawPolyline({
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
            // store.polylines.push(newLine)
            // map.drawPolyline(newLine)
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
      styles: mapStyle
    });

