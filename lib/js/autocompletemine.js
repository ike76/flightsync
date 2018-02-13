$(function() {


$('#arrivalAirport, .originAirportInputs input').autocomplete({
	// appendTo: '#answerQuery',
	// delay: 500,
	minLength: 4,
	source: airportsMap,
	
	}
)



});

// const airportsMapPrint = airports.map(ap=> {
// 	return {label: `${ap.city}, ${ap.state}: ${ap.name} - ${ap.code}` , value: ap.code }
// })

// const jAirport = JSON.stringify(airportsMapPrint, 0, 1)

