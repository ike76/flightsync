store.partIndex = 0;
moveAlong()

function moveAlong(){
	setDirectionsMessage()
	showHideStuff();
}


$('.btn.next').click( ()=>{
	console.log('verify', verify(store.partIndex))
	if( verify() ){
		store.partIndex += 1; // load up the next one
		moveAlong();
	}  else {

		setDirectionsMessage(true);
	}
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
	$column.html('')
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
	if (num === 2) {}
	if (num === 3) {}
	if (num === 4) {}
	if (num === 5) {}
}

function showHideStuff(num = store.partIndex){
	if (num === 0) {
		$('#destination').show()

	};
	if (num === 1) {
		console.log('showHide called with num', num)
		// pick a date
		$('.btn.next').prop('disabled', true);
		$('.display-airport').hide();
		$('#departure_date').show().focus();
		$('#departure_date').val('2018-06-15')

		$('#answerQuery').hide()

	}
	if (num === 2) {
		console.log('showHide called with num', num)
		// choose departure airports
		$('#departure_date').hide();

		$('.originAirportInputs').show()
		$('.originAirportInputs').find('input:first').focus()

	}
	if (num === 3) {
		console.log('showHide called with num', num)
	}
	if (num === 4) {
		console.log('showHide called with num', num)
	}
	if (num === 5) {}
}

function setDirectionsMessage(err = false){
	let partsText = [
		{
			num: 1,
			comm: 'Please enter a <strong style="text-decoration: underline;">destination</strong> airport code:',
			err: 'please enter a valid airport code'
		},
		{
			num: 2,
			comm: 'please pick a departure date',
			err: 'error: please choose a date',
		},
		{
			num: 3,
			comm: 'Please choose departure airports',
			err: 'please enter a valid airport code',
		}
	];

	function getHtml(){
		let part = partsText[store.partIndex]
		return `
			<div class="row center-even">
					<h1>Step ${part.num}:</h1>
			</div>
			<div class="row center-even">
				<h2>${!err ? part.comm : part.err}</h2>
			</div>		`
	}

	partHtml = getHtml()
	$('.instructions').html( partHtml )
	
}




