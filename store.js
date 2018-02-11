const store = {
		departure_date: moment().add(5, 'days'),
		// origin: '',  
		origins: [],
		originsLatLng: [], // [{airport: 'MSP', lat: 44.8793  ,lng: -93.1987 }],
		destinationLatLng: { },// {airport: 'LAX', lat: 33.9456 , lng: -118.391 },
		destination: '',
		mapOffset: 20,
		rejectedAirports: [],
		resultsObjects: [],
		timeZones: [],
		chartDatasets: [],
		chartTimesets: [],
		timeBounds: {earliest: moment().add(100, 'years') ,latest: moment().subtract(100, 'years')},
		filterPoints: {price: 100000, times: [0,10000000000], nonStopOnly: false},
		prices: ["54.30", "54.30", "60.30", "60.30", "100.30", "115.00", "115.00", "115.00", "119.20", "119.20", "119.20", "120.60", "127.00", "127.00", "127.00", "127.00", "127.00", "127.00", "127.00", "129.30", "147.00", "154.30", "154.30", "154.30", "198.00", "203.30", "213.30", "241.39", "249.60", "309.00", "534.30", "905.50", "905.50", "1114.30", "1114.30", "1135.00", "1155.30", "1181.00", "1181.00", "1181.00", "1196.00", "1375.30", "1384.00", "1384.00", "1384.00"],
		colors: [
					'rgba(192, 57, 43, 1)', //red
					'rgba(39, 174, 96, 1)', // green
					'rgba(230, 126, 34, 1)', //orange
					'rgba(41, 128, 185, 1)', //blue
					'rgba(241, 196, 15, 1)', //yellow
					'rgba(142, 68, 173, 1)', //purple
				],
		apikey: `${special1.apikey}${special2.apikey}${special3.apikey}`,
		googApiKey: special1.googApiKey, 
		timeZoneKey: special1.timeZoneKey,
		fsAppId: special1.fsAppId,
		fsAppKey: special2.fsAppKey,
};