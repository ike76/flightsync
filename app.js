const apikey = 'hHHFLF6BaRjzVHm4DMbCdqeC2QEVG9XR'
const googApiKey = 'AIzaSyAgZp2UfAzSNdEK-3ZE0TBC0asXgBb26Qk';
const timeZoneKey = 'AIzaSyCRLgmgalBQSn_JQ2mAhpYuQzSTWEqSwKI';

// prefill search boxes with default values
document.getElementById('departure_date').valueAsDate =  moment().add(5,'days').toDate();
// document.getElementById('return_date').valueAsDate =  moment().add(10,'days').toDate();
$('#origin1').val('MSP');
$('#origin2').val('DFW');

$('#destination').val('MCO');

let store = {
		departure_date: '',
		// return_date: '',
		origin: '',
		destination: '',
		zones: '',
		resultsObjects: [],
};

$('#searchFlights').on('submit', function(event){
	event.preventDefault();
	let departure_date = $(this).find('#departure_date').val();
	// let return_date = $(this).find('#return_date').val();
	let origin = $(this).find('#origin1').val();
	let origin2 = $(this).find('#origin2').val();
	let origin3 = $(this).find('#origin3').val();
	let destination = $(this).find('#destination').val();
	let zones = getTimeZoneNames(origin, destination)
	// populate the store here 
	store= {
		origin,  // this may need to become an array called origins
		origin2,
		origin3,
		destination,
		zones,
		departure_date,
	};
	createFlightSearchPromises();
	// handleFlightSearch();
})

function createFlightSearchPromises(){
	const promises = [ store.origin, store.origin2, store.origin3 ].map(origin => {
		return new Promise((resolve, reject)=>{
			handleFlightSearch(origin, resolve)
		})
	})


	Promise.all(promises).then(flightPlansArr => {
		console.log('flightPlansArr is ->',flightPlansArr);
		flightPlansArr.
	})
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


let result;  // global FlightResultGroup



function handleFlightSearch(origin, resolve){
	let endpoint = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search`;
	// let number_of_results = 15;
	console.log('origin inside handleFlightSearch', origin)
	$.getJSON(endpoint, {
		departure_date: store.departure_date,
		origin,
		destination: store.destination, 
		number_of_results: 15, 
		apikey: 'hHHFLF6BaRjzVHm4DMbCdqeC2QEVG9XR',
	}).done(function(data){
			console.log('data from handleFlightSearch',data);
			resolve(data);
		})
	.fail(err => console.log(`there was an error:`, err));
}

function handleFlightResponse (json, textStatus){
	result = new FlightResultGroup(json, store.zones);
	result.displayAllItineraries();
	result.chartAllItineraries();
}











