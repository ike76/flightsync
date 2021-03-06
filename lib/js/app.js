


function validateAirportCode(textbox){
	let response = airports.find(a=> a.code === textbox.val().toUpperCase().trim() ) || '';
	// if ( typeof response.code !== 'undefined' && response.code !== store.destinationLatLng.airport) // make sure 
	return response;
}



$('#arrivalAirport').bind('keyup blur autocompleteclose',function(event){
	// validate airport
	let response = validateAirportCode($(this))
	console.log(response);
	if (response){ // if you have a valid airport
		$(this).closest('.arrival-airport').find('.airport-code').removeClass('unknown').html(response.code)
		handleAirportInput(response);
		} else {
			$(this).closest('.arrival-airport').find('.airport-code').addClass('unknown').html('?')
			$('.btn.next').prop('disabled', true)
		}
})


$('#departure_date').val(store.departure_date.format('YYYY-MM-DD'))
$('#departure_date').change(function(event){
	let date = $(this).val();
	let valid = (moment(date).isValid() && moment(date) > moment().subtract(1,'days') && moment(date) < moment().add(1,'years'));
	if (valid) store.departure_date = moment(date)
})

$('.originAirportInputs input').bind('keyup blur autocompleteclose',function(event){
	let response = validateAirportCode($(this))
	let index = $(this).attr('originIndex')
	if (response){
		$(this).attr('airport', response.code)
		$(this).closest('li').find('.airport-code').removeClass('unknown').html(response.code)
		 handleAirportInput(response, index)
	} else {
		$(this).closest('li').find('.airport-code').addClass('unknown').html('?')
		handleAirportInput(null, index)
	}
})


$('nav').on('click', 'li',  function(e){
	$(this).closest('nav').find('li').removeClass('active')
	$(this).addClass('active')
	let stepNum = $(this).attr('step')
	$(`.page${stepNum}`).show()
	$('.page').not(`.page${stepNum}`).hide()
})

// remove intro box, planes
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
		$('.center-screen').html( getWaitHtml() ).css('visibility', 'visible') // searching for . . . spinning thing
		store.prices = []; //empty it out.
		store.destination = store.destinationLatLng.airport;
		createFlightSearchPromises();
		$('.searchButton').prop('disabled', true).addClass('disabled')
	} else {
		$('.error-message').html( readyToSearch() )  
	}
})

function createFlightSearchPromises(){

	const promises = store.originsLatLng
		.filter(origin=> typeof origin.airport !== 'undefined') // get rid of empties
		.filter(origin=> origin.airport !== store.destinationLatLng.airport) // get rid of same orig / dest pairings
		.map(origin => {
				console.log('making Promise for', origin.airport)
				return new Promise((resolve, reject)=>{
					handleFlightSearch(origin.airport, resolve, reject)
				}).catch(err=> console.log('error from Promise', err, origin.airport))
			}
		)

	Promise.all(promises).then(flightPlansArr => {
		// check flightPlansArr make sure they're objects not just a string
		let rejectedAirports = flightPlansArr.filter(flight=> typeof flight === 'string');
		if (rejectedAirports.length){
			// show error page explaining rejected airport(s)
			store.rejectedAirports = rejectedAirports;
			showErrorPage(rejectedAirports)
		} else {
			store.resultsObjects = flightPlansArr.map((flightPlan, i)=> {
				return new FlightResultGroup(flightPlan, store.originsLatLng[i].tz, store.destinationLatLng.tz, store.originsLatLng[i].airport, store.destinationLatLng.airport, store.colors[i])
			})
		}
	}).then(()=>{
		handleResultsObjects();
	}).catch( (err)=>{
		console.log('error from catch on Promise.all', err)
	} )
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
	}).done(data => resolve(data))
	.fail(err => {
		console.log(`there was an error:`, err)
		resolve(originString) // if no data, it returns the ORIGIN airport
	});
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
				<a href="javascript:window.location.reload(true)"><p>click to retry search</p></a>
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




function doPlanes(){
	setTimeout(()=>{ landPlane(1) }, 400)
	setTimeout(()=>{ landPlane(2) }, 400)
	setTimeout(()=>{ landPlane(3) }, 1000)
	setTimeout(()=>{ landPlane(4) }, 1800)

	function landPlane(num){
		let plane = $(`.plane${num}`)
		let text = $(`.arrTime${num}`)
		plane.removeClass('start').addClass('end')
		text.css('opacity', 100);
	}
}

$( doPlanes() )









