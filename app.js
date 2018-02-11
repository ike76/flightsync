// const apikey2 = 'hHHFLF6BaRjzVHm4DMbCdqeC2QEVG9XR'
// const apikey = 'wsQelFUbdVt9Gc3QdPxRe6fG6qk3BnvN'
// const googApiKey = 'AIzaSyAgZp2UfAzSNdEK-3ZE0TBC0asXgBb26Qk';
// const timeZoneKey = 'AIzaSyCRLgmgalBQSn_JQ2mAhpYuQzSTWEqSwKI';
// const fsAppId = '0a175eb8';
// const fsAppKey = 'defecb4c87ed09385f30279c56e56a11'



// const store = {
// 		departure_date: moment().add(5, 'days'),
// 		// origin: '',  
// 		origins: [],
// 		originsLatLng: [], // [{airport: 'MSP', lat: 44.8793  ,lng: -93.1987 }],
// 		destinationLatLng: { },// {airport: 'LAX', lat: 33.9456 , lng: -118.391 },
// 		destination: '',
// 		mapOffset: 20,
// 		resultsObjects: [],
// 		timeZones: [],
// 		chartDatasets: [],
// 		chartTimesets: [],
// 		timeBounds: {earliest: moment().add(100, 'years') ,latest: moment().subtract(100, 'years')},
// 		filterPoints: {price: 100000, times: [0,10000000000], nonStopOnly: false},
// 		prices: ["54.30", "54.30", "60.30", "60.30", "100.30", "115.00", "115.00", "115.00", "119.20", "119.20", "119.20", "120.60", "127.00", "127.00", "127.00", "127.00", "127.00", "127.00", "127.00", "129.30", "147.00", "154.30", "154.30", "154.30", "198.00", "203.30", "213.30", "241.39", "249.60", "309.00", "534.30", "905.50", "905.50", "1114.30", "1114.30", "1135.00", "1155.30", "1181.00", "1181.00", "1181.00", "1196.00", "1375.30", "1384.00", "1384.00", "1384.00"],
// 		colors: [
// 					'rgba(192, 57, 43, 1)', //red
// 					'rgba(39, 174, 96, 1)', // green
// 					'rgba(230, 126, 34, 1)', //orange
// 					'rgba(41, 128, 185, 1)', //blue
// 					'rgba(241, 196, 15, 1)', //yellow
// 					'rgba(142, 68, 173, 1)', //purple
// 				],
// 		apikey: config.apikey,
// 		googApiKey: config.googApiKey, 
// 		timeZoneKey: config.timeZoneKey,
// 		fsAppId: config.fsAppId,
// 		fsAppKey: config.fsAppKey,
// };

function validateAirportCode(textbox){
	let response = airports.find(a=> a.code === textbox.val().toUpperCase().trim() ) || '';
	// if ( typeof response.code !== 'undefined' && response.code !== store.destinationLatLng.airport) // make sure 
	return response;
}

$('#answerQuery').bind('keyup blur autocompleteclose',function(event){
	// validate airport
	let response = validateAirportCode($(this))
	let $airportDisplay = $('.display-airport')
	if (response){ // if you have a valid airport
		// console.log('response', response);
		$airportDisplay.hide().html(displayAirport(response)).fadeIn();
		$('.btn.next').prop('disabled', false)
		handleAirportInput(response);
		} else {
			$('.btn.next').prop('disabled', true)

		}
})

// $('#answerQuery').on('autocompleteclose', function(){
// 	alert('there ya go')
// })

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

$('.originAirportInputs input').bind('keyup blur autocompleteclose',function(event){
	let response = validateAirportCode($(this))
	let index = $(this).attr('originIndex')
	if (response){
		$(this).attr('airport', response.code)
		// $(this).val(response.code.toUpperCase())
		// $(this).prop('disabled', true)
		 handleAirportInput(response, index)
	} else {
		handleAirportInput(null, index)
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

$('.results-error').on('click', function(){
	store.partIndex = 2;
	moveAlong()
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


// handle flight search
$('.searchButton').on('click', function(event){
	// event.preventDefault();
	store.prices = []; //empty it out.
	store.destination = store.destinationLatLng.airport;
	createFlightSearchPromises();

})

function createFlightSearchPromises(){
	// const timeZones = [ ...store.origins, store.destination ].map(airport => {
	// 	return new Promise((resolve, reject)=>{
	// 		getTimeZoneName(airport, resolve)
	// 	})
	// })

	const promises = store.originsLatLng
		.filter(origin=> typeof origin.airport !== 'undefined') // get rid of empties
		.map(origin => {
			if(typeof origin.airport !== 'undefined'){
				console.log('making Promise for', origin.airport)
				return new Promise((resolve, reject)=>{
					handleFlightSearch(origin.airport, resolve, reject)
				}).catch(err=> console.log('error from Promise', err, origin.airport))
			}
		})

	Promise.all(promises).then(flightPlansArr => {
		// check flightPlansArr make sure they're objects not just a string
		let rejectedAirports = flightPlansArr.filter(flight=> typeof flight === 'string');
				// show an error screen explaining which origin airports were no good
		if (rejectedAirports.length){
			// show error page explaining rejected airport(s)
			store.rejectedAirports = rejectedAirports;
			showErrorPage(rejectedAirports)
			// send back to STEP 3, with error messages
		} else {
			store.resultsObjects = flightPlansArr.map((flightPlan, i)=> {
				return new FlightResultGroup(flightPlan, store.originsLatLng[i].tz, store.destinationLatLng.tz, store.originsLatLng[i].airport, store.destinationLatLng.airport, store.colors[i])
			})
		}
	}).then(()=>{
		handleResultsObjects();
		store.partIndex ++
		moveAlong()
		

	}).catch( (err)=>{
		console.log('error from catch on Promise.all', err)
	} )

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
function showErrorPage(rejectedAirports){
	let html = '';
	function errorHtml(orig){
		return `
		<div class="results-error-card error" originAirport="${orig.airport}">
			<i class="fas fa-exclamation thumbs"></i>
			<div>
				<h1 ><span>${orig.airport}</span><i class="fas fa-arrow-circle-right"></i><span class="">${store.destinationLatLng.airport}</span></h1>
				<p class="cities">No flights found for </p>
				<p class="cities"><span class="city">${orig.city}</span> to <span class="city">${store.destinationLatLng.city}</span></p>
				<a href="#"><p>click to retry search</p></a>
			</div>
			<i class="fas fa-exclamation thumbs"></i>
		</div>
		`
	}
	function okHtml(orig){
		return `
		<div class="results-error-card" originAirport="${orig.airport}">
			<i class="far fa-thumbs-up thumbs"></i>
			<div>
				<h1 ><span>${orig.airport}</span><i class="fas fa-arrow-circle-right"></i><span class="">${store.destinationLatLng.airport}</span></h1>
			</div>
			<i class="far fa-thumbs-up thumbs"></i>
		</div>
		`
	}
	store.originsLatLng.forEach(orig=>{
		if (rejectedAirports.filter(ap => ap === orig.airport).length){
			html += errorHtml(orig)
		} else {
			if (typeof orig.airport !== 'undefined') html += okHtml(orig)
		}
	})
	$('.center-screen').hide();
	$('.results-error').html(html).show();
}


function handleFlightSearch(originString, resolve, reject){
	let endpoint = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search`;
	// let number_of_results = 15;
	$.getJSON(endpoint, {
		departure_date: store.departure_date.format('YYYY-MM-DD'),
		origin: originString,
		destination: store.destinationLatLng.airport, 
		number_of_results: 15, 
		apikey: store.apikey,
	}).done(function(data){
			console.log('data from handleFlightSearch',data);
			resolve(data);
		})
	.fail(err => {
		console.log(`there was an error:`, err)
		resolve(originString) 
	});
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










