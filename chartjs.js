

let ctx = $('#flightsChart');


let chart;


function createChart(datasets){
	 chart = new Chart(ctx, {
	    type: 'bubble',
	    pointRadius: 10,
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
	            yAxes: [{
	            	ticks: {
	            		callback: function(label, index, labels){
	            			return `$${label}`
	            		}
	            	},
	            }]
		    },// end scales
		    tooltips: {
		    	callbacks: {
		    		beforeTitle: function(){
		    		},
					title: function(tooltipItem, data){
						let datasetIndex = tooltipItem[0].datasetIndex
						let dataIndex = tooltipItem[0].index
						itinObject = data.datasets[datasetIndex].data[dataIndex]
						return itinObject.topLine
					},
					// afterTitle: function(){
					// 	return 'after title'
					// },
					// beforeLabel: function(){
					// 	return 'BEFORE LABEL'
					// },
					label: function(tooltipItem, data){
						let datasetIndex = tooltipItem.datasetIndex
						let dataIndex = tooltipItem.index
						itinObject = data.datasets[datasetIndex].data[dataIndex]
						return itinObject.midLine
					},
					// afterLabel: function(){
					// 	return 'afterLabel'
					// },
					// body: function(tooltipItem, data){
					// 	return "hello body"
					// },
					afterBody: function(tooltipItem, data){
						let datasetIndex = tooltipItem[0].datasetIndex
						let dataIndex = tooltipItem[0].index
						itinObject = data.datasets[datasetIndex].data[dataIndex]
						return itinObject.botLine
					},
					footer: function(tooltipItem, data){
						let datasetIndex = tooltipItem[0].datasetIndex
						let dataIndex = tooltipItem[0].index
						itinObject = data.datasets[datasetIndex].data[dataIndex]
						return itinObject.price;
					},
		    	}
		    }
		} //end options

	})// end new Chart block
}// end function createChart



$('#flightsChart').on('click', function(e){
	let clicked = chart.getElementAtEvent(e)[0];
	if (typeof clicked !== 'undefined'){
		let datasetIndex = clicked._datasetIndex;
		let dataIndex = clicked._index;
		let itinObj = chart.data.datasets[datasetIndex].data[dataIndex]
		$('.rawResults').append(itinObj.html)
	}
	

	// console.log('clicked', clicked[0]._model.backgroundColor)
	
}) // click dots on map

	

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
		step: 10,
		// direction: 'rtl',
		// orientation: 'vertical',
	})
	let maxDisplay = $('#max-price-display span')
	maxPriceSlider.noUiSlider.on('update', function(values, handle){
		let price = Number(values[handle]).toFixed(0)
		maxDisplay.html(`$${price}`);
		store.filterPoints.price = price;
		updateItins();
	})

	// time bounds slider:

	let landingTimeSlider = document.getElementById('range-slider');
	noUiSlider.create(landingTimeSlider,{
		start: [store.timeBounds.earliest.unix(), store.timeBounds.latest.unix()],
		connect: [false, true, false],
		range: {
			min: store.timeBounds.earliest.unix(),
			max: store.timeBounds.latest.unix(),
		},
		step: 100,
	})
	landingTimeSlider.noUiSlider.on('update', function(values, handle){
		$('.earliest').html(moment.unix(values[0]).format('ddd h:mma '));
		$('.latest').html(moment.unix(values[1]).format('ddd h:mma '));
		store.filterPoints.times = values
		updateItins();
	})

	$('#nonStopCheckBox').on('change', function(){
		this.checked ? store.filterPoints.nonStopOnly = true : store.filterPoints.nonStopOnly = false;
		updateItins();
	})



	function updateItins(timeValues = store.filterPoints.times, cutoffPrice = store.filterPoints.price, nonStopOnly = store.filterPoints.nonStopOnly){
		chart.data.datasets.forEach(city=>{
			if (typeof city.dataFiltered === 'undefined'){ city.dataFiltered = [] }; // set up filtered array
			let keep = [];
			let filterOut = [];
			[...city.dataFiltered, ...city.data].forEach(e => {

				if (e.y > cutoffPrice) {filterOut.push(e); } 
				else if (e.x < moment.unix(timeValues[0])) {filterOut.push(e); console.log('too early', e) } 
				else if (e.x > moment.unix(timeValues[1])) {filterOut.push(e); console.log('too late', e) } 
				else if (nonStopOnly && !e.nonStop) {filterOut.push(e); console.log('nonstops only', e) }
				else keep.push(e)
			})
			city.data = keep;
			city.dataFiltered = filterOut;
		})
		chart.update({duration:50})
	}
	
}

// handle chosen flights button clicks (delete, add?, book?)
$('.rawResults').on('click', '.remove', function(event){
	$(this).closest('.flight-result').fadeOut();
})
$('.rawResults').on('click', '.book', function(event){
	$(this).closest('.flight-result').fadeOut();
})


