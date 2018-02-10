store.partIndex = 0;
moveAlong()

function moveAlong(){
	setDirectionsMessage()
	showHideStuff();
}


$('.btn.next, .btn.searchButton').click( ()=>{
	console.log('verify', verify(store.partIndex))
	if( verify() ){
		store.partIndex += 1; // load up the next one
		moveAlong();
	}  else {

		setDirectionsMessage(true);
	}
})

$('.btn.prev').click( ()=>{
	store.partIndex -= 1;
	moveAlong();
})

$('.instructions').on('click', '.prev', ()=>{
	if (store.partIndex > 0) {store.partIndex -= 1};
	setDirectionsMessage()
	showHideStuff()
})

function formatResponseAirport(response){
	return {
		lat: Number(response.lat),
		lng: Number(response.lon),
		airport: response.code,
		city: response.city,
		tz: response.tz,
	}
}

function handleAirportInput(response, index){
	if (response){
		let flightObj = formatResponseAirport(response)
		// if its the first step, make it the destination
		if(store.partIndex===0){
		 store.destinationLatLng = flightObj
		}
		//otherwise check if it is already in the origin array, if not, put it in there.
		else if (!store.originsLatLng.find(ap=> ap.airport === flightObj.airport)){
		 store.originsLatLng[index] = flightObj
		}
	} else {
		store.originsLatLng[index] = {} // wipe that one out
	}

	 displayOriginAirports()
	 doMapMarkers();

}

function displayOriginAirports(flightObj){
	let $column = $('.rightSide')
	$column.find('.flight-search-block').remove()
	function makeHtml(orig, i){
		let dest = store.destinationLatLng;
		return `
	<div class="flight-search-block" originAirport="${orig.airport}">
		<div class="x-out">
			<a href="#"><i class="far fa-times-circle"></i></a>
		</div>
		<div>
			<h1 ><span style="color: ${store.colors[i]};">${orig.airport}</span><i class="fas fa-arrow-circle-right"></i><span class="">${dest.airport}</span></h1>
			<p class="cities"><span class="city">${orig.city}</span> to <span class="city">${dest.city}</span></p>
		</div>
	</div>

		`
	}
	if(store.originsLatLng.length){
		store.originsLatLng.forEach((orig, i)=>{
			if(typeof orig.lat !== 'undefined') $column.append(makeHtml(orig, i))
		})
	}
	// if(flightObj){
	// 	let nextIndex = $('.rightSide').find('.flight-search-block').length
	// 	$(makeHtml(flightObj, nextIndex)).hide().appendTo($column).fadeIn();
	// }

}

function verify(num = store.partIndex){ // return true if this step is verified
	if (num === 0) { return typeof store.destinationLatLng.city === 'string' };
	if (num === 1) { return moment(store.departure_date).isValid() }
	if (num === 2) { return store.originsLatLng.length } // if theres at least one to search on
	if (num === 3) {}
	if (num === 4) {}
	if (num === 5) {}
}

function showHideStuff(num = store.partIndex){
	if (num === 0) {
		$('#destination').show()
		$('#answerQuery').show().focus();
		$('.display-airport').show()
		$('#departure_date').hide()
		$('.btn.prev').prop('disabled', true);

	};
	if (num === 1) {
		console.log('showHide called with num', num)
		// pick a date
		$('.btn.next').prop('disabled', true);
		$('.btn.prev').prop('disabled', false);
		$('.originAirportInputs').hide()
		if (store.departure_date && store.departure_date.isValid()) { $('.btn.next').prop('disabled', false) }
		$('#departure_date').show().focus();
		$('#departure_date').val(store.departure_date.format('YYYY-MM-DD'))
		$('.display-airport').hide();
		$('.btn.next').text('Next  ➡︎').removeClass('searchFlights')
		$('#answerQuery').hide()
		$('.btn.next').show()
		$('.searchButton').hide()
	}
	if (num === 2) {
		console.log('showHide called with num', num)
		// choose departure airports
		$('#departure_date').hide();
		$('.originAirportInputs').show()
		$('.originAirportInputs').find('input:first').focus()	
		$('.btn.next').hide()
		$('.searchButton').show()
		$('.slogan').fadeOut();

	}
	if (num === 3) {
		// SEARCHING for results.   (waiting)
		// put something in content area
		// $('.intro-block').hide();
		$('.center-screen').html( getWaitHtml() ).css('visibility', 'visible')
		$('.searchSide').hide()
		console.log('showHide called with num', num)
		$('.center-column').hide()
		$('.rightSide .flight-search-block').hide()
		$('.btn.prev, .btn.next, .btn.searchButton').hide()
		$('.originAirportInputs').hide();

	}
	if (num === 4) {
		// results are back - all good
		console.log('showHide called with num', num)
		$('.rightSide').show()
		$('#charthelp').show()
		$('.center-screen').html('').hide()
		doSmallMap();
		$('.chart-sliders-container').fadeIn()
	}
	if (num === 5) {}
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

function setDirectionsMessage(){
	let partsText = [
		{
			num: 1,
			comm: 'Please enter a <strong style="text-decoration: underline;">destination</strong> airport:',
			sub: '(Where will travelers MEET?)'
		},
		{
			num: 2,
			comm: 'Please pick a departure date',
			sub: '',
		},
		{
			num: 3,
			comm: 'Please choose departure airports',
			sub: "(Where are travelers starting?)",
		},
		
	];

	function getHtml(){
		let part = partsText[store.partIndex]
		return `
			<div class="row center-even">
					<h1>Step ${part.num}:</h1>
			</div>
			<div class="row center-even">
				<h2>${part.comm}</h2>
				<p>${part.sub ? part.sub : ''}</p>
			</div>		`
	}
	function getFinalHtml(){
		// put info about sliders, dots, buttons, etc.  
	}

	if(store.partIndex <= 2  ) {
		$('.instructions').html( getHtml() )
	} else { 
		$('.intro-block').html( getFinalHtml() )
	}
	
	
}




