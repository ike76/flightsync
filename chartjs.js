

let ctx = $('#flightsChart');


let chart;

// $(function(){ // on document ready


function addData(chart, data) {
    
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
    // chart.update({duration: 0});
}
function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
    // chart.update({duration: 0});
}

function updateItinsWithPrice(price){

	let cities = chart.data.datasets;
	cities.forEach(city=>{
		if (!city.dataFiltered){ city.dataFiltered = [] } //make a dataFiltered Array

		while( city.data.length > 0 && city.data[city.data.length-1].y > price){
			// put it in Filtered array
			city.dataFiltered.push(city.data.pop())
		}
		while(city.dataFiltered.length>0 && city.dataFiltered[city.dataFiltered.length-1].y<price){
			// move from filtered back into regular
			city.data.push(city.dataFiltered.pop())
		}
	})
	chart.update();
}

function removeItinsOverPrice(price, city){

	chart.data.datasets.forEach((origCity)=>{
		let filteredData = origCity.data.filter(itin=> Number(itin.y) < price)
		origCity.data = filteredData
	})
	chart.update();
}
function addItinsUnderPrice(price){
	// chart.data.datasets = []
	let newDataSets = [];
	store.chartDatasets.forEach(origCity=>{
		let newData = origCity.data.filter(itin =>	Number(itin.y) < price )
		newDataSets.push(newData);
	})
	chart.data.datasets = newDataSets;

	chart.update();
}

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
let landingTimeSlider = document.getElementById('range-slider');
noUiSlider.create(landingTimeSlider,{
	start: [20, 80],
	connect: [false, true, false],
	range: {
		min: 10,
		max: 100,
	}
})

let moneyFormat = wNumb({
	mark: '.',
	thousand: ',',
	prefix: '$ ',
	decimals: 0
});
function createSliders(){
	// price-filter slider:
	let minPrice = Number(store.prices[0]);
	let maxPrice = Number(store.prices[store.prices.length -1]);
	let maxPriceSlider = document.getElementById('max-slider')
	noUiSlider.create(maxPriceSlider,{
		start: maxPrice,
		connect: [true, false],
		range: {
			'min': minPrice -10,
			'max': maxPrice +10
		}, 
		step: 1,
		// direction: 'rtl',
		// orientation: 'vertical',
	})
	let maxDisplay = $('#max-price-display span')
	maxPriceSlider.noUiSlider.on('update', function(values, handle){
		let price = Number(values[handle]).toFixed(0)
		maxDisplay.html(`$${price}`);
		// some if/else for going up or down. now its doing both each time.
		// addItinsUnderPrice(price);
		updateItinsWithPrice(price);
	})
	
}




// maxDisplay.html('wuzzup')



 // })// end document ready jQuery


// // Format a number:
// moneyFormat.to( 301980.62 );
// 	=> '$ 301,980.62 p.p.'

// // Get a number back:
// moneyFormat.from( '$ 301,980.62 p.p.' );
// 	=> 301980.62
