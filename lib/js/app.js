

function validateAirportCode(textbox){
	let response = airports.find(a=> a.code === textbox.val().toUpperCase().trim() ) || '';
	// if ( typeof response.code !== 'undefined' && response.code !== store.destinationLatLng.airport) // make sure 
	return response;
}

$('#arrivalAirport').bind('keyup blur autocompleteclose',function(event){
	// validate airport
	let response = validateAirportCode($(this))
	console.log(response);
	let $airportDisplay = $('.display-airport')
	if (response){ // if you have a valid airport
		// console.log('response', response);
		$(this).closest('.arrival-airport').find('.airport-code').removeClass('unknown').html(response.code)

		$airportDisplay.hide().html(displayAirport(response)).fadeIn();
		// $('.btn.next').prop('disabled', false)
		handleAirportInput(response);
		} else {
			$(this).closest('.arrival-airport').find('.airport-code').addClass('unknown').html('?')
			$('.btn.next').prop('disabled', true)

		}
})

// $('#answerQuery').on('autocompleteclose', function(){
// 	alert('there ya go')
// })
$('#departure_date').val(store.departure_date.format('YYYY-MM-DD'))
$('#departure_date').change(function(event){
	let date = $(this).val();
	let valid = (moment(date).isValid() && moment(date) > moment().subtract(1,'days') && moment(date) < moment().add(1,'years'));
	console.log('is it valid?', valid);
	if (valid) {
		// $('.btn.next').prop('disabled', false);
		store.departure_date = moment(date)
		// $('.slogan').fadeOut()
		// $('.dateDisplay h2').hide().html(store.departure_date.format('dddd MMM Do YYYY')).fadeIn()
	} else {
		// $('.btn.next').prop('disabled', true);

	}
})

$('.originAirportInputs input').bind('keyup blur autocompleteclose',function(event){
	let response = validateAirportCode($(this))
	let index = $(this).attr('originIndex')
	if (response){
		$(this).attr('airport', response.code)
		$(this).closest('li').find('.airport-code').removeClass('unknown').html(response.code)
		// $(this).val(response.code.toUpperCase())
		// $(this).prop('disabled', true)
		 handleAirportInput(response, index)
	} else {
		$(this).closest('li').find('.airport-code').addClass('unknown').html('?')
		handleAirportInput(null, index)
	}
})


// $('.rightSide').on('click', '.x-out', function(event){
// 	let airport = $(this).closest('.flight-search-block').attr('originairport')
// 	let goner = store.originsLatLng.find((ap)=> ap.airport === airport)
// 	remove(store.originsLatLng, goner);
// 	displayOriginAirports();
// 	doMapMarkers();
// 	let thisInput = $(`.originAirportInputs [airport=${airport}]`)
// 	thisInput.prop('disabled', false)
// 	thisInput.val('')
// 	thisInput.focus();

// 	console.log('thisInput', thisInput)
// })


$('nav').on('click', 'li',  function(e){
	$(this).closest('nav').find('li').removeClass('active')
	$(this).addClass('active')
	let stepNum = $(this).attr('step')
	$(`.page${stepNum}`).show()
	$('.page').not(`.page${stepNum}`).hide()
})



$('#close-instructions, li[step="1"]').on('click', function(){
	$('.center-message').fadeOut();
	$('.three-columns').css('visibility', 'visible')
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

function readyToSearch(){
	if ( store.originsLatLng.filter(orig => typeof orig.airport !== 'undefined').length < 1 ) return 'please enter departure airport(s)';
	else if ( !store.departure_date ) return 'please enter a departure date';
	else if ( store.departure_date < moment().subtract(1,'days') || store.departure_date > moment().add(2,'years') ) return 'invalid date';
	else if ( typeof store.destinationLatLng.airport === 'undefined') return 'please enter a destination airport';
	else return true;
}


// handle flight search
$('.searchButton').on('click', function(event){
	// event.preventDefault();
	if (readyToSearch() === true){
		$('nav li[step=2]').click();
		$('.error-message').empty();
		$('.center-screen').html( getWaitHtml() ).css('visibility', 'visible')
		store.prices = []; //empty it out.
		store.destination = store.destinationLatLng.airport;
		createFlightSearchPromises();
		$('.searchButton').prop('disabled', true).addClass('disabled')
	} else {
		$('.error-message').html( readyToSearch() )  
	}

})

function createFlightSearchPromises(){
	// const timeZones = [ ...store.origins, store.destination ].map(airport => {
	// 	return new Promise((resolve, reject)=>{
	// 		getTimeZoneName(airport, resolve)
	// 	})
	// })

	const promises = store.originsLatLng
		.filter(origin=> typeof origin.airport !== 'undefined') // get rid of empties
		.filter(origin=> origin.airport !== store.destinationLatLng.airport) // get rid of same orig / dest pairings
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
		// store.partIndex ++
		// moveAlong()
		

	}).catch( (err)=>{
		console.log('error from catch on Promise.all', err)
	} )

}

function handleAirportInput(response, index){
	if (response){
		let flightObj = formatResponseAirport(response)
		// if its the first step, make it the destination
		if(!index){
		 store.destinationLatLng = flightObj // if no index is given, it is the (only) destination airport
		}
		//otherwise check if it is already in the origin array, if not, put it in there.
		else if (!store.originsLatLng.find(ap=> ap.airport === flightObj.airport)){
		 store.originsLatLng[index] = flightObj
		}
	} else {
		store.originsLatLng[index] = {} // wipe that one out
	}

	 // displayOriginAirports()
	 doMapMarkers();

}

function formatResponseAirport(response){
	return {
		lat: Number(response.lat),
		lng: Number(response.lon),
		airport: response.code,
		city: response.city,
		tz: response.tz,
	}
}

function getWaitHtml() {
		let html = `
			<h3>Searching for flights:</h3> `;
			store.originsLatLng.forEach((orig, i)=>{
				if(typeof orig.airport !== 'undefined'){
					html += `<h4><span style="color: ${store.colors[i]};">${orig.airport}</span> <i class="fas fa-arrow-circle-right"></i> ${store.destinationLatLng.airport}</h4>`
				}
			})
			html +=
			`
			<i class="fas fa-spinner fa-pulse"></i>
		`
		return html;
	}

function handleResultsObjects(){
	console.log('store results objects', store.resultsObjects)
	store.resultsObjects.forEach(result=>{
		result.createDataSets();;
	})
	createChart(store.chartDatasets)
	createSliders()
	doSmallMap()
	$('.chart-sliders-container').fadeIn()
	$('.center-screen').fadeOut();
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










