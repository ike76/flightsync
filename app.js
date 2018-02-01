const apikey = 'hHHFLF6BaRjzVHm4DMbCdqeC2QEVG9XR'
const googApiKey = 'AIzaSyAgZp2UfAzSNdEK-3ZE0TBC0asXgBb26Qk';
const timeZoneKey = 'AIzaSyCRLgmgalBQSn_JQ2mAhpYuQzSTWEqSwKI';
const fsAppId = '0a175eb8';
const fsAppKey = 'defecb4c87ed09385f30279c56e56a11'

$('#flightsChart').on('click', e=>console.log(e)) // click dots on map

$( "#price-slider" ).slider({
	classes: {
		"ui-slider": "highlight",
	},
	range: 'min',
	min: 10,
	max: 100,
	value: 100,
});
$( "#arrival-slider" ).slider({
	classes: {
		"ui-slider": "highlight",

	},
	range: true,
	min: 10,
	max: 100,
	values: [10,100],
});

// prefill search boxes with default values
document.getElementById('departure_date').valueAsDate =  moment().add(5,'days').toDate();
// document.getElementById('return_date').valueAsDate =  moment().add(10,'days').toDate();
$('#origin1').val('MSP');
$('#origin2').val('DFW');
$('#origin3').val('LAX');

$('#destination').val('MCO');

const store = {
		departure_date: '',
		// origin: '',  
		origins: [],
		destination: '',
		resultsObjects: [],
		timeZones: [],
		chartDatasets: [],
		chartTimesets: [],
		filterPoints: {price: 100000, times: [0,10000000000]},
		prices: ["54.30", "54.30", "60.30", "60.30", "100.30", "115.00", "115.00", "115.00", "119.20", "119.20", "119.20", "120.60", "127.00", "127.00", "127.00", "127.00", "127.00", "127.00", "127.00", "129.30", "147.00", "154.30", "154.30", "154.30", "198.00", "203.30", "213.30", "241.39", "249.60", "309.00", "534.30", "905.50", "905.50", "1114.30", "1114.30", "1135.00", "1155.30", "1181.00", "1181.00", "1181.00", "1196.00", "1375.30", "1384.00", "1384.00", "1384.00"],
		colors: ['rgba(192, 57, 43,1.0)', //red
		 'rgba(39, 174, 96,1.0)', // green
		 'rgba(241, 196, 15,1.0)', //yellow
		 'rgba(41, 128, 185,1.0)', //blue
		 'rgba(230, 126, 34,1.0)', //orange
		 'rgba(142, 68, 173,1.0)', //purple
		 'rgba(44, 62, 80,1.0)'],
		apikey: 'hHHFLF6BaRjzVHm4DMbCdqeC2QEVG9XR',
		googApiKey: 'AIzaSyAgZp2UfAzSNdEK-3ZE0TBC0asXgBb26Qk', 
		timeZoneKey: 'AIzaSyCRLgmgalBQSn_JQ2mAhpYuQzSTWEqSwKI',
		fsAppId: '0a175eb8',
		fsAppKey: 'defecb4c87ed09385f30279c56e56a11'
};


$('#searchFlights').on('submit', function(event){
	event.preventDefault();
	store.prices = []; //empty it out.

	store.departure_date = $(this).find('#departure_date').val();
	//populate the store.origin array with origin airports
	$(this).find('.origin-airport').each(function(){
		store.origins.push(this.value)
	})
	store.destination = $(this).find('#destination').val();

	// let origin = $(this).find('#origin1').val();
	// let origin2 = $(this).find('#origin2').val();
	// let origin3 = $(this).find('#origin3').val();
	getTimeZones([...store.origins, store.destination]);
	createFlightSearchPromises();
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
	}).then((data)=>{
		store.resultsObjects.forEach(result=>{
			result.createDataSets();;
		})
		createChart(store.chartDatasets)
		createSliders()
	})

}


function getTimeZones(arr){
	console.log('tz arr', arr)
	let zones = arr.map(a => airports.find(ap=> ap.code.toLowerCase()===a.toLowerCase()).tz)
	store.timeZones = zones;
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











