const apikey = 'hHHFLF6BaRjzVHm4DMbCdqeC2QEVG9XR'
const googApiKey = 'AIzaSyAgZp2UfAzSNdEK-3ZE0TBC0asXgBb26Qk';
const timeZoneKey = 'AIzaSyCRLgmgalBQSn_JQ2mAhpYuQzSTWEqSwKI';

// prefill search boxes with default values
document.getElementById('departure_date').valueAsDate =  moment().add(2,'days').toDate();
document.getElementById('return_date').valueAsDate =  moment().add(5,'days').toDate();
$('#origin').val('MSP');
$('#destination').val('LAX');



$('#searchFlights').on('submit', function(event){
	event.preventDefault();
	let departure_date = $(this).find('#departure_date').val();
	let return_date = $(this).find('#return_date').val();
	let origin = $(this).find('#origin').val();
	let destination = $(this).find('#destination').val();
	let zones = getTimeZoneNames(origin, destination)
	handleFlightSearch({
		departure_date,
		return_date,
		origin,
		destination,
		zones,
	})
	
})

function insertTimeZones(orig, dest){

}
function getTimeZoneNames(orig, dest){
	let zones = {};
	$.getJSON(`https://api.sandbox.amadeus.com/v1.2/location/${orig}/`, {apikey: apikey}, function(json){
		console.log('about to spit out timezone stuff')
		zones.orig = json.airports[0].timezone
	})
	$.getJSON(`https://api.sandbox.amadeus.com/v1.2/location/${dest}/`, {apikey: apikey}, function(json){
		zones.dest = json.airports[0].timezone
	})
	console.log(zones)
	return zones;
}

// function getTimeZones(orig, dest, date){ // replace me
// 	let zones = {}
// 	let timeStamp = moment(date).unix();
// 	console.log(`timestamp is ${timeStamp}`)
// 	// call api
// 	$.getJSON(`https://api.sandbox.amadeus.com/v1.2/location/${orig}/`, {apikey: apikey}, function(json){
// 		console.log('about to spit out timezone stuff')
// 		let tzTime = moment(date).tz(json.airports[0].timezone).format('ha z')

// 		console.log(tzTime)
// 	}).done(data => {
// 		let {latitude, longitude} = data.airports[0].location;
// 		console.log(`looking up lat: ${latitude}, lng: ${longitude}`)
// 		$.getJSON('https://maps.googleapis.com/maps/api/timezone/json', {
// 			location: `${latitude}, ${longitude}`,
// 			timestamp: timeStamp,
// 			key: timeZoneKey,
// 		}, function(json, textStatus) {
// 				zones.orig = json;
// 		});
// 	});

// 	$.getJSON(`https://api.sandbox.amadeus.com/v1.2/location/${dest}/`, {apikey: apikey}, function(json){
// 		console.log('about to spit out timezone stuff')
// 		let tzTime = moment(date).tz(json.airports[0].timezone).format('ha z')

// 		console.log(tzTime)
// 	}).done(data => {
// 		let {latitude, longitude} = data.airports[0].location;
// 		console.log(`looking up lat: ${latitude}, lng: ${longitude}`)
// 		$.getJSON('https://maps.googleapis.com/maps/api/timezone/json', {
// 			location: `${latitude}, ${longitude}`,
// 			timestamp: timeStamp,
// 			key: timeZoneKey,
// 		}, function(json, textStatus) {
// 				zones.dest = json
// 		});
// 	});

// 	return zones;
// }

let result;  // global FlightResultGroup

function handleFlightSearch(obj){
	let endpoint = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search`;
	// let number_of_results = 15;
	$.getJSON(endpoint, {
		departure_date: obj.departure_date,
		origin: obj.origin,
		destination: obj.destination, 
		number_of_results: 25, 
		apikey: 'hHHFLF6BaRjzVHm4DMbCdqeC2QEVG9XR',
	}, function(json, textStatus) {
			// console.log(json);
			result = new FlightResultGroup(json, obj.zones);
			result.displayAllItineraries();
			// resultsArray.push(result);
	}).fail(err=> console.log(`there was an error: ${err}`));
}

// function displayResults(json){
// 	let arr = json.results.map(r => renderResult(r))
// 	$('.rawResults').html(arr);
// }

// let flightResult;
// function renderResult(r){
// 	flightResult = r;
// 	return `
// 		<div class="flight-result">
// 			<h3 class="price">${r.fare.total_price}</h3>
// 			${r.itineraries[0].outbound.flights.forEach(flight=> renderLeg(flight))}
// 			<div class="leg">
// 				<p class="maininfo">AA #1234 Departs MSP at 11:00am | Arrives BOS at 11:30pm</p>
// 			</div>
// 			<div class="leg">
// 				<p class="maininfo">AA #1234 Departs MSP at 11:00am | Arrives BOS at 11:30pm</p>
// 				<p class="otherinfo">connects in DFW | travel time 3:23</p>
// 			</div>
// 		</div>
// 	`
// 	function renderLeg(flight){
// 		let {
// 			operating_airline,
// 			flight_number,
// 			origin,
// 			destination, 
// 			arrives_at,
// 			departs_at,
// 			} = flight;
// 		return `
// 			<div class="leg">
// 				<p class="maininfo">${operating_airline} #${flight_number} Departs ${origin.airport} at XX:XXam | Arrives ${destination.airport} at XX:XXpm</p>
// 			</div>
// 		`
// 	}
// }