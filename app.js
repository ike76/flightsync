const apikey2 = 'hHHFLF6BaRjzVHm4DMbCdqeC2QEVG9XR'
const apikey = 'wsQelFUbdVt9Gc3QdPxRe6fG6qk3BnvN'
const googApiKey = 'AIzaSyAgZp2UfAzSNdEK-3ZE0TBC0asXgBb26Qk';
const timeZoneKey = 'AIzaSyCRLgmgalBQSn_JQ2mAhpYuQzSTWEqSwKI';
const fsAppId = '0a175eb8';
const fsAppKey = 'defecb4c87ed09385f30279c56e56a11'




// prefill search boxes with default values
// document.getElementById('departure_date').valueAsDate =  moment().add(5,'days').toDate();
// document.getElementById('return_date').valueAsDate =  moment().add(10,'days').toDate();
// $('#origin1').val('MSP');
// $('#origin2').val('DFW');
// $('#origin3').val('LAX');

// $('#destination').val('MCO');

const store = {
		departure_date: '',
		// origin: '',  
		origins: [],
		originsLatLng: [], // [{airport: 'MSP', lat: 44.8793  ,lng: -93.1987 }],
		destinationLatLng: { },// {airport: 'LAX', lat: 33.9456 , lng: -118.391 },
		destination: '',
		mapOffset: 20,
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
		apikey: config.apikey,
		googApiKey: config.googApiKey, 
		timeZoneKey: config.timeZoneKey,
		fsAppId: config.fsAppId,
		fsAppKey: config.fsAppKey,
};

function validateAirportCode(textbox){
	let response = airports.find(a=> a.code === textbox.val().toUpperCase().trim() ) || '';
	return response;
}

$('#answerQuery').keyup(function(event){
	// validate airport
	let response = validateAirportCode($(this))
	let $airportDisplay = $('.display-airport')
	if (response){ // if you have a valid airport
		console.log('response', response);
		$airportDisplay.hide().html(displayAirport(response)).fadeIn();
		$('.btn.next').prop('disabled', false)
		handleAirportInput(response);
		} else {
			$('.btn.next').prop('disabled', true)
			// if its at least 3 letters and not an airport code,
			if ($(this).val().trim().length >= 3) {
			$airportDisplay.html(`${$(this).val()} not found`)
			console.log('no response from airport db', $(this).val().length)
			} 
			else {
		 	$airportDisplay.html('')
			}
		}
})

$('#departure_date').change(function(event){
	let date = $(this).val();
	let valid = (moment(date).isValid() && moment(date) > moment().subtract(1,'days') && moment(date) < moment().add(1,'years'));
	console.log('is it valid?', valid);
	if (valid) {
		$('.btn.next').prop('disabled', false);
		store.departure_date = moment(date)
		$('.slogan').fadeOut()
		$('.dateDisplay h2').hide().html(store.departure_date.format('dddd MMM Do YYYY')).fadeIn()
	} else {
		$('.btn.next').prop('disabled', true);

	}
})

$('.originAirportInputs input').keyup(function(event){
	let response = validateAirportCode($(this))
	if (response){
		$(this).attr('airport', response.code)
		$(this).val(response.code.toUpperCase())
		$(this).prop('disabled', true)
		 handleAirportInput(response)
	}
})
$('.rightSide').on('click', '.x-out', function(event){
	let airport = $(this).closest('.flight-search-block').attr('originairport')
	let goner = store.originsLatLng.find((ap)=> ap.airport === airport)
	remove(store.originsLatLng, goner);
	displayOriginAirports();
	doMapMarkers();
	let thisInput = $(`.originAirportInputs [airport=${airport}]`)
	thisInput.prop('disabled', false)
	thisInput.val('')
	thisInput.focus();

	console.log('thisInput', thisInput)
})

function remove(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

function displayAirport(response){
	let html = `
	<h1><i class="fas fa-arrow-circle-right"></i><span class="">${response.code}</span></h1>
	<h2>${response.name}</h2>
	<h2>${response.city}, ${response.state || response.country}</h2>
	`
	return html;
}

// validate input box 
// $('.airport-code').keyup(function(event) {
// 	let response = airports.find(a=> a.code === $(this).val().toUpperCase().trim() ) || '';
// 	let $airportDisplay = $(this).closest('.searchBox').find('.displayAirportName')
// 	if (response){ // if you have a valid airport

// 		store.originsLatLng = []; // redo the array each time a valid airport is found, otherwise leave it
// 		$(this).closest('fieldset').find('.origin-airport').each(function(index, el) {
// 			let val = el.value
// 			if (val){
// 				let dbResponse = airports.find(a=> a.code === val.toUpperCase().trim() ) || '';
// 				if (dbResponse) store.originsLatLng.push({airport: dbResponse.code, city: dbResponse.city, lat: dbResponse.lat, lng: dbResponse.lon})
// 			}
// 		});
// 		let dest = $(this).closest('fieldset').find('#destination').val()
// 				let dbResponse = airports.find(a=> a.code === dest.toUpperCase().trim() ) || '';
// 				store.destinationLatLng = {airport: dbResponse.code, lat: dbResponse.lat, lng: dbResponse.lon, city: dbResponse.city}
// 		$airportDisplay.html(response.name).hide().fadeIn(700)
// 			.next('.displayAirportCityState').hide().html(`${response.city}, ${response.state}`).fadeIn(1100);
// 		} else {
// 			// if its at least 3 letters and not an airport code,
// 			if ($(this).val().trim().length >= 3) {
// 			console.log('no response from airport db', $(this).val().length)
// 			$airportDisplay.html(`${$(this).val()} not found`)
// 			$airportDisplay.html('').next('.displayAirportCityState').html('') 
// 			} 
// 			else {
// 			 	$airportDisplay.html('')
// 			 	$airportDisplay.html('').next('.displayAirportCityState').html('') 
// 			}
// 		}
	
	

	// if (response) { // if this aiport was found
	// 	if($(this).hasClass('origin-airport')){  // if it is an origin airport
	// 		if (store.originsLatLng.filter(e=> e.airport === response.code).length < 1) // if its not already there
	// 			{store.originsLatLng.push({airport: response.code, lat: response.lat, lng: response.lon})}
	// 	} else { // else it is the destination
	// 		store.destinationLatLng = {airport: response.code, lat: response.lat, lng: response.lon}

	// 	}

	// 	console.log('response', response)
	// 	// add this to the store
	// 	console.log('this', this.className)

	// 	addMarkerToMap({airport: response.code, lat: response.lat , lng: response.lon })

	// 	$airportDisplay.html(response.name).hide().fadeIn(700)
	// 	.next('.displayAirportCityState').hide().html(`${response.city}, ${response.state}`).fadeIn(1100);
// });

// $('.airport-code').keyup(function(event) {
// 	let response = ''
// 	if ($(this).val().trim().length >= 3){  // don't do anything until there are at least 3 characters
// 		response = airports.find( a=> a.code === $(this).val().toUpperCase().trim() ) || 
// 			airports.filter( a=> a.city.toLowerCase().includes($(this).val().toLowerCase().trim()) )[0];
// 	}

// 	let $airportDisplay = $(this).closest('.searchBox').find('.displayAirportName')
// 	if (response) {
// 		$airportDisplay.html(response.name).hide().fadeIn(400)
// 		.next('.displayAirportCityState').hide().html(`${response.city}, ${response.state}`).fadeIn(800);
// 	} 
// 	else {
// 		// if its at least 3 letters and not an airport code,

// 		$airportDisplay.html(`${$(this).val()} not found`)
// 		$airportDisplay.html('').next('.displayAirportCityState').html('');
// 	}
// });

  let msp = {
    "code": "MSP",
    "lat": "44.8793",
    "lon": "-93.1987",
    "name": "Minneapolis St Paul International Airport",
    "city": "St. Paul",
    "state": "Minnesota",
    "country": "United States",
    "woeid": "12520966",
    "tz": "America\/Chicago",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "http:\/\/mspairport.com",
    "runway_length": "11006",
    "elev": "841",
    "icao": "KMSP",
    "direct_flights": "171",
    "carriers": "41"
  }





// handle flight search
$('#searchFlights').on('submit', function(event){
	event.preventDefault();
	store.prices = []; //empty it out.

	store.departure_date = $(this).find('#departure_date').val();
	//populate the store.origin array with origin airports
	$(this).find('.origin-airport').each(function(){
		let originAirport = this.value.toUpperCase().trim()
		if ( airports.find(ap=> ap.code===originAirport ) ) {
		let {lat, lon:lng} = airports.find(ap=> ap.code===originAirport )
		store.origins.push(originAirport)
		store.originsLatLng.push({airport: originAirport , lat: Number(lat), lng: Number(lng) })
		} else {
			console.log(`can't find airport called ${originAirport}`)
		}
	})

{	store.destination = $(this).find('#destination').val().trim().toUpperCase();
	let {lat, lon:lng} = airports.find(ap=> ap.code===store.destination )
	console.log('destination set to', store.destination)
	store.destinationLatLng = {airport: store.destination, lat: Number(lat), lng: Number(lng)}
}
	getTimeZones([...store.origins, store.destination]);
	let resultsObjectsLocal = JSON.parse(localStorage.getItem('resultsObjects'))

		createFlightSearchPromises();
	
	// console.log('results objects from file', resultsObjectsFromFile)
	// createFake

	// handleFlightSearch();
})

function createFlightSearchPromises(){
	// const timeZones = [ ...store.origins, store.destination ].map(airport => {
	// 	return new Promise((resolve, reject)=>{
	// 		getTimeZoneName(airport, resolve)
	// 	})
	// })

	const promises = [ ...store.origins ].map(origin => {
		return new Promise((resolve, reject)=>{
			handleFlightSearch(origin, resolve)
		})
	})

	Promise.all(promises).then(flightPlansArr => {
		// console.log('flightPlansArr is ->',flightPlansArr);
		store.resultsObjects = flightPlansArr.map((each, i)=> {
			return new FlightResultGroup(each, store.timeZones[i], store.timeZones[store.timeZones.length -1], store.origins[i], store.destination, store.colors[i])
		})
	}).then(()=>{
		console.log('store obj', store.resultsObjects)
		localStorage.setItem('resultsObjects', JSON.stringify(store.resultsObjects));
		handleResultsObjects();

	})

}

function handleResultsObjects(){
	console.log('store results objects', store.resultsObjects)
	store.resultsObjects.forEach(result=>{
		result.createDataSets();;
	})
	createChart(store.chartDatasets)
	createSliders()
	// createMap()
}


function handleFlightSearch(origin, resolve){
	let endpoint = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search`;
	// let number_of_results = 15;
	$.getJSON(endpoint, {
		departure_date: store.departure_date,
		origin,
		destination: store.destination, 
		number_of_results: 15, 
		apikey: store.apikey,
	}).done(function(data){
			console.log('data from handleFlightSearch',data);
			resolve(data);
		})
	.fail(err => console.log(`there was an error:`, err));
}

function getTimeZones(arr){

	let zones = arr.map(a => airports.find(ap=> ap.code.toLowerCase()===a.toLowerCase()).tz)
	store.timeZones = zones;
}



function handleFlightResponse (json, textStatus){
	result = new FlightResultGroup(json, store.zones);
	result.displayAllItineraries();
	result.chartAllItineraries();
}

//make display flights sortable
$('.sortable').sortable({
	helper: "clone",
	opacity: 0.7,
	placeholder: "sortable-placeholder",
});










