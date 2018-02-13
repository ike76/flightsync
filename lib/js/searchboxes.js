let originAirports = [];
let destAirport = ''

$('.destination-airport').change(function(event) {
	destAirport = this.value
	updateFlightDisplay();
});

$('.origin-airport-dynamic').change(function(event) {
	originAirports.push(this.value);
	$(this).val('')
	console.log(originAirports)
	updateFlightDisplay()
});
$('.display-searches').on('click', 'button', function(event){
	let index = $(this).attr('index')
	originAirports.splice(index, 1); // get rid of this one.
	updateFlightDisplay();
});
$('.display-searches').on('click', '#go-to-destination', e=> $('.destination-airport').focus())

function updateFlightDisplay(){
	let update;
	if (destAirport !== '') {
		update = originAirports.map((airport, i)=>{
			return `<p>from <span class="airport origin2">${airport}</span> to 
			<span class="airport destination">${destAirport}</span>
			<button index="${i}">remove</button>
			</p>`})
	} else {
		update = originAirports.map((airport, i)=>{
			return `<p>from <span class="airport origin2">${airport}</span> to 
			<span class="airport destination"><a href='#' id="go-to-destination"><strong><span class="large-question-mark">?</span></strong></a></span>
			<button index="${i}">remove</button>
			</p>`})

	}

	$('.display-searches').html(update) 

}
