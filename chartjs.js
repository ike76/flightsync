

let ctx = $('#flightsChart');


let chart;

// $(function(){ // on document ready


// function removeItinsOverPrice(price, city){

// 	chart.data.datasets.forEach((origCity)=>{
// 		let filteredData = origCity.data.filter(itin=> Number(itin.y) < price)
// 		origCity.data = filteredData
// 	})
// 	chart.update();
// }
// function addItinsUnderPrice(price){
// 	// chart.data.datasets = []
// 	let newDataSets = [];
// 	store.chartDatasets.forEach(origCity=>{
// 		let newData = origCity.data.filter(itin =>	Number(itin.y) < price )
// 		newDataSets.push(newData);
// 	})
// 	chart.data.datasets = newDataSets;

// 	chart.update();
// }

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
	            }],
		    }
		},
	});
}


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
		start: maxPrice +5,
		connect: [true, false],
		range: {
			'min': minPrice -10,
			'max': maxPrice +10
		}, 
		step: 50,
		// direction: 'rtl',
		// orientation: 'vertical',
	})
	let maxDisplay = $('#max-price-display span')
	maxPriceSlider.noUiSlider.on('update', function(values, handle){
		let price = Number(values[handle]).toFixed(0)
		maxDisplay.html(`$${price}`);
		store.filterPoints.price = price;
		updateItins();
		// some if/else for going up or down. now its doing both each time.
		// addItinsUnderPrice(price);
		// updateItinsWithPrice(price);
	})

	// time bounds slider:
	// Create a new date from a string, return as a timestamp.

	let landingTimeSlider = document.getElementById('range-slider');
	noUiSlider.create(landingTimeSlider,{
		start: [store.timeBounds.earliest.unix(), store.timeBounds.latest.unix()],
		connect: [false, true, false],
		range: {
			min: store.timeBounds.earliest.unix(),
			max: store.timeBounds.latest.unix(),
		},
		step: 2500,
	})
	// let lateDisplay = $('.earliest')
	// let earlyDisplay = $('.latest')
	landingTimeSlider.noUiSlider.on('update', function(values, handle){
		$('.earliest').html(moment.unix(values[0]).format('ddd h:mma '));
		$('.latest').html(moment.unix(values[1]).format('ddd h:mma '));
		store.filterPoints.times = values
		updateItins();
		// updateItinsWithTimes(values)
		// console.log(values[0])
	})

	// function updateItinsWithPrice(price){
	// 	if (chart.filterFlag !== 'price'){
	// 		chart.filterFlag = 'price';
	// 		chart.data.datasets.forEach(city=>{
	// 			city.data.sort((e,o)=> e.y - o.y)
	// 		})
	// 		console.log('city.datas sorted by price');
	// 	}
	// 	chart.data.datasets.forEach(city=>{
	// 		if (typeof city.dataFiltered === 'undefined'){ city.dataFiltered = [] };
	// 		while( city.data.length > 0 && city.data[city.data.length-1].y > price){ // if there
	// 			// put it in Filtered array
	// 			city.dataFiltered.push(city.data.pop())
	// 		};
	// 		while(city.dataFiltered.length>0 && city.dataFiltered[city.dataFiltered.length-1].y < price){
	// 			// move from filtered back into regular
	// 			city.data.push(city.dataFiltered.pop())
	// 		};
	// 	})
	// 	chart.update();
	// }
	// function updateItinsWithTimes(values){ // this isn't working.   they all disappear.

	// 	if (chart.filterFlag !== 'time'){  // set it to time and sort it if this is the first call.
	// 		chart.filterFlag = 'time';
	// 		chart.data.datasets.forEach(city=>{
	// 			city.data.sort((e,o)=> e.x - o.x)
	// 			console.log('city.data sorted by landing time');
	// 		})
	// 	}

	// 	chart.data.datasets.forEach(city=>{
	// 		if (typeof city.dataFiltered === 'undefined'){ city.dataFiltered = [] }; // set up filtered array
	// 		let keep = [];
	// 		let filterOut = [];
	// 		[...city.dataFiltered, ...city.data].forEach(e=>{
	// 			if (e.x > values[0] && e.x < values[1]) {keep.push(e)}
	// 				else filterOut.push(e)
	// 		})
	// 		city.data = keep;
	// 		city.dataFiltered = filterOut;
	// 	})


		// chart.data.datasets.forEach(city=>{
		// 	if (typeof city.dataFiltered === 'undefined'){ city.dataFiltered = [] };

		// 	if (city.data.length > 0) {

		// 		city.data.forEach(e=>{
		// 			while(e.x < values[0]){ city.dataFiltered.push(city.data.pop())}
		// 			while(e.x > values[1]){ city.dataFiltered.push(city.data.pop())}
		// 		})
		// 	}
		// 	// if data has itins earlier than value[0], move them to filtered

		// 	// if data has itins LATER than value[1], move them to filtered.
		// })

	// 	chart.update();
	// }
	function updateItins(timeValues = store.filterPoints.times, cutoffPrice = store.filterPoints.price){
		chart.data.datasets.forEach(city=>{
			if (typeof city.dataFiltered === 'undefined'){ city.dataFiltered = [] }; // set up filtered array
			let keep = [];
			let filterOut = [];
			[...city.dataFiltered, ...city.data].forEach(e => {
				if (e.y > cutoffPrice 
					|| e.x < moment.unix(timeValues[0]) 
					|| e.x > moment.unix(timeValues[1])
					)
					 {
					filterOut.push(e);
					console.log('filter', e)
				}
					else keep.push(e)
			})
			city.data = keep;
			city.dataFiltered = filterOut;
		})
		chart.update({duration:0})
	}
	
}




// maxDisplay.html('wuzzup')



 // })// end document ready jQuery


// // Format a number:
// moneyFormat.to( 301980.62 );
// 	=> '$ 301,980.62 p.p.'

// // Get a number back:
// moneyFormat.from( '$ 301,980.62 p.p.' );
// 	=> 301980.62
