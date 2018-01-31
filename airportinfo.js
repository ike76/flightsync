function getFlightTimeZones(){

	const airportInfoPromises = [...store.origins, store.destination].map(airport=>{
		return new Promise((resolve, reject)=>{
					getAirportInfo(airport, resolve);
				})
	})

	// 'curl -v  -X GET "https://api.flightstats.com/flex/airports/rest/v1/json/PDX/today?appId=0a175eb8&appKey=defecb4c87ed09385f30279c56e56a11"'

	function getAirportInfo(airport, resolve){
		$.getJSON(`https://api.flightstats.com/flex/airports/rest/v1/json/${airport}/today/`, 
			{
			 appId: store.fsAppId,
			 fsAppKey: store.fsAppKey,
			}, 
			function(json, textStatus) {
				resolve(json)
		});
	}

	Promise.all(airportInfoPromises).then(zoneinfo=>{
		console.log('airportinfo zone stuff', zoneinfo);
		// put time zones into store
	})
}