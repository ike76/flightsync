const apikey = 'hHHFLF6BaRjzVHm4DMbCdqeC2QEVG9XR'
const googApiKey = 'AIzaSyAgZp2UfAzSNdEK-3ZE0TBC0asXgBb26Qk';
const timeZoneKey = 'AIzaSyCRLgmgalBQSn_JQ2mAhpYuQzSTWEqSwKI';

$('#flightsChart').on('click', e=>console.log(e))
// prefill search boxes with default values
document.getElementById('departure_date').valueAsDate =  moment().add(5,'days').toDate();
// document.getElementById('return_date').valueAsDate =  moment().add(10,'days').toDate();
$('#origin1').val('MSP');
$('#origin2').val('DFW');
$('#origin3').val('LAX');

$('#destination').val('MCO');

let store = {
		departure_date: '',
		// return_date: '',
		origin: '',  // this may need to become an array called origins
		origins: [],
		destination: '',
		zones: '',
		resultsObjects: [],
		timeZones: [],
		chartDatasets: [],
		colors: ['rgba(204, 80, 0, 0.8)', 'rgba(0, 47, 255, 0.8)', 'rgba(0, 255, 135, 0.8)', 'rgba(204, 80, 0, 0.8)'],
		apikey: 'hHHFLF6BaRjzVHm4DMbCdqeC2QEVG9XR',
		googApiKey: 'AIzaSyAgZp2UfAzSNdEK-3ZE0TBC0asXgBb26Qk', 
		timeZoneKey: 'AIzaSyCRLgmgalBQSn_JQ2mAhpYuQzSTWEqSwKI',
};

$('#searchFlights').on('submit', function(event){
	event.preventDefault();
	let departure_date = $(this).find('#departure_date').val();
	// let return_date = $(this).find('#return_date').val();

	let origin = $(this).find('#origin1').val();
	let origin2 = $(this).find('#origin2').val();
	let origin3 = $(this).find('#origin3').val();
	let destination = $(this).find('#destination').val();
	// let zones = getTimeZoneNames(origin, destination)
	// populate the store here 
	store.origins = [origin, origin2, origin3];
	store.destination = destination;
	store.departure_date = departure_date;

	createFlightSearchPromises();
	// handleFlightSearch();
})

function createFlightSearchPromises(){
	const timeZones = [ ...store.origins, store.destination ].map(airport => {
		return new Promise((resolve, reject)=>{
			getTimeZoneName(airport, resolve)
		})
	})

	const promises = [ ...store.origins ].map(origin => {
		return new Promise((resolve, reject)=>{
			handleFlightSearch(origin, resolve)
		})
	})
	Promise.all(timeZones).then(zoneinfo => {
		console.log('zoneinfo is', zoneinfo);
		store.timeZones = zoneinfo.map(each => each.airports[0].timezone  );
	})
	Promise.all(promises).then(flightPlansArr => {
		console.log('flightPlansArr is ->',flightPlansArr);
		store.resultsObjects = flightPlansArr.map((each, i)=> {
			return new FlightResultGroup(each, store.timeZones[i], store.timeZones[store.timeZones.length -1], store.origins[i], store.destination, store.colors[i])
		})
	}).then((data)=>{
		store.resultsObjects.forEach(result=>{
			result.createDataSet();;
		})
		createChart(store.chartDatasets)

	})

}


function getTimeZoneName(airport, resolve){
	$.getJSON(`https://api.sandbox.amadeus.com/v1.2/location/${airport}/`, {apikey: apikey}, function(json){
		// zones.orig = json.airports[0].timezone
	}).done(zoneinfo => {
		console.log('info from getTimeZoneName', zoneinfo);
		resolve(zoneinfo);
	})
}


let result;  // global FlightResultGroup



function handleFlightSearch(origin, resolve){
	let endpoint = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search`;
	// let number_of_results = 15;
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











