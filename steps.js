store.partIndex = 0;


$('.instructions').on('click', '.next', ()=>{
	console.log('verify', verify(store.partIndex))
	if( verify() ){
		store.partIndex += 1; // load up the next one
		setDirectionsMessage()
		showHideStuff()
	}  else {
		setDirectionsMessage(true);
	}
})

$('.instructions').on('click', '.prev', ()=>{
	if (store.partIndex > 0) {store.partIndex -= 1};
	setDirectionsMessage()
	showHideStuff()
})

function verify(num = store.partIndex){ // return true if this step is verified
	if (num === 0) { return typeof store.destinationLatLng.city === 'string' };
	if (num === 1) {}
	if (num === 2) {}
	if (num === 3) {}
	if (num === 4) {}
	if (num === 5) {}
}

function showHideStuff(num = store.partIndex){
	if (num === 0) {
		$('#destination').show()
		$('label[for="destination"]').show();
		$('.js-airport-code').html(store.destinationLatLng.airport).hide()

	};
	if (num === 1) {
		console.log('showHide called with num', num)
		$('#destination').hide()
		$('label[for="destination"]').hide();
		$('.js-airport-code').html(store.destinationLatLng.airport).show()
		$('.datepicker input').css('visibility', 'visible')

	}
	if (num === 2) {
		console.log('showHide called with num', num)
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
			a: 'Where to?',
			b: 'enter a destination airport',
			err: 'please enter a valid airport code'
		},
		{
			num: 2,
			a: 'On which day?',
			b: 'please pick a departure date',
			err: 'please choose a date',
		},
	];

	function getHtml(){
		let part = partsText[store.partIndex]
		return `
		<div class="row center-even">
			<button type="button" class="btn prev">⬅︎  Prev</button>
			<div>
				<h1>Step ${part.num}:</h1>
				<h2 class="step-directions">${part.a}</h2>
			</div>
			<button type="button" class="btn next">Next  ➡︎</button>
		</div>
		<div class="row center-even">
			<p>${err ? part.err : part.b}</p>
		</div>
		`
		// return `<div class="row center-even">
		// 			<button type="button" class="btn back"><< Back </button><h1>Step ${stepNum}:</h1><button type="button" class="btn next">Next >></button>
		// 		</div>
		// 		<h2>${directions}</h2>`
	}

	partHtml = getHtml()
	$('.instructions').html( partHtml )
	
}




