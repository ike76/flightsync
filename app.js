const apikey = 'hHHFLF6BaRjzVHm4DMbCdqeC2QEVG9XR'

document.getElementById('departure_date').valueAsDate =  moment().add(2,'days').toDate();
document.getElementById('return_date').valueAsDate =  moment().add(5,'days').toDate();



$('#searchFlights').on('submit', function(event){
	event.preventDefault();
	let departure_date = $(this).find('#departure_date').val();
	let return_date = $(this).find('#return_date').val();
	let origin = $(this).find('#origin').val();
	let destination = $(this).find('#destination').val();
	handleFlightSearch({
		departure_date,
		return_date,
		origin,
		destination,
	})
})

function handleFlightSearch(obj){
	let endpoint = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search`;
	// let number_of_results = 15;
	$.getJSON(endpoint, {
		departure_date: obj.departure_date,
		origin: obj.origin,
		destination: obj.destination, 
		number_of_results: 15, 
		apikey: 'hHHFLF6BaRjzVHm4DMbCdqeC2QEVG9XR',
	}, function(json, textStatus) {
			// console.log(json);
			const result = new FlightResultGroup(json);
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