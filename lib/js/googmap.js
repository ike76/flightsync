


function getCircle(color = 'black', fillColor = 'white'){
                return {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 13,
                    strokeColor: color,
                    strokeWeight: 1,
                    fillColor: fillColor,
                    fillOpacity: 1,
                };
            }

function addMarkerToMap(obj, i, fillColor){
    if (obj){
        let {lat,lng,airport} = obj;
        map.addMarker({lat, lng, airport, label: {text: airport, fontSize: '10px'}, icon: getCircle(store.colors[i], fillColor) }) // add this marker `${i+1}`
    }
}

function doMapMarkers(){
    map.removeMarkers()
    if (typeof store.destinationLatLng.airport !== 'undefined')    addMarkerToMap(store.destinationLatLng, null, 'Yellow');
    store.originsLatLng.forEach((orig, i)=> {
        if (typeof orig.lat !== 'undefined') {addMarkerToMap(orig, i)}
    })
    drawRoutes();
    doMapBounds();
}

function doMapBounds(offset){
    let bounds = new google.maps.LatLngBounds();
    let highestLat = -90;
    let lowestLat = 90;
    let highestLng = -180;
    let lowestLng = 180;
    [...store.originsLatLng, store.destinationLatLng].forEach(loc=>{
        if (typeof loc.lat !== 'undefined'){
            if (loc.lat > highestLat) highestLat = loc.lat;
            if (loc.lat < lowestLat ) lowestLat = loc.lat;
            if (loc.lng < lowestLng ) lowestLng = loc.lng;
            if (loc.lng > highestLng ) highestLng = loc.lng;

            bounds.extend(loc)
        }
    });
    // let center = bounds.getCenter()
    
    store.mapOffset = (highestLat - lowestLat) ;
    let offsetPoint = {lat: highestLat + store.mapOffset, lng: lowestLng}
    bounds.extend(offsetPoint);
    map.fitBounds(bounds )
}

function doSmallMap(){
    // let detMap = $('#mymap').detach()

    map = new GMaps({
      div: '#mySmallMap',
      zoom: 3,
      lat: 39.8333333,
      lng: -158.585522,
      disableDefaultUI: true,
      styles: mapStyle
    });
    doMapMarkers();
    drawRoutes();
    doSmallMapBounds();

}

function doSmallMapBounds(){
    let bounds = new google.maps.LatLngBounds();
    [...store.originsLatLng, store.destinationLatLng].forEach(loc=>{
        if (typeof loc.lat !== 'undefined'){
            bounds.extend(loc)
        }
    });
    map.fitBounds(bounds)
}



function drawRoutes(){
    map.removePolylines()
    let dest = store.destinationLatLng
    if(dest.airport && store.originsLatLng.length){
        store.originsLatLng.forEach( (orig, i)=>{
            if (typeof orig.lat !== 'undefined'){
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
            }
        })
    }
}


    let map = new GMaps({
      div: '#mymap',
      zoom: 4,
      lat: 39.8333333,
      lng: -98.583333,
      disableDefaultUI: true,
      styles: mapStyle
    });

