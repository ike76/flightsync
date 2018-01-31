// $(function(){





let ctx = $('#flightsChart');

let chart;

function createChart(datasets){
	 chart = new Chart(ctx, {
	    type: 'bubble',
	    data: {
	        datasets: datasets,
        },

	    options: {
	        scales: {
	            xAxes: [{
	                type: 'time',
	                position: 'bottom',
	                time: {
				        displayFormats: {
				           'minute': 'h:mm a',
				           'hour': 'h a',
				           'day': 'h:mm a',
				        }
		            }
	            }]
	        
		    }
		},
	});
}

// filter out landing times
let slider = document.getElementById('range-slider');
noUiSlider.create(slider,{
	start: [20, 80],
	connect: [false, true, false],
	range: {
		'min': 0,
		'max': 100
	}
})

let moneyFormat = wNumb({
	mark: '.',
	thousand: ',',
	prefix: '$ ',
	decimals: 0
});

// price-filter slider:
let maxPriceSlider = document.getElementById('max-slider')
noUiSlider.create(maxPriceSlider,{
	start: 750,
	connect: [true, false],
	range: {
		'min': 100,
		'max': 750
	}, 
	step: 1,
})
let maxDisplay = $('#max-price-display span')
maxPriceSlider.noUiSlider.on('update', function(values, handle){
	let price = Number(values[handle]).toFixed(0)
	maxDisplay.html(`$${price}`)
})



// maxDisplay.html('wuzzup')



// })// end document ready jQuery


// // Format a number:
// moneyFormat.to( 301980.62 );
// 	=> '$ 301,980.62 p.p.'

// // Get a number back:
// moneyFormat.from( '$ 301,980.62 p.p.' );
// 	=> 301980.62
