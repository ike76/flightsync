let ctx = $('#flightsChart');

let now = moment();
let inTenMinutes = moment().add(10, 'minutes');
let inOneHour = moment().add(1, 'hour');
let thirtyMinutesAgo = moment().subtract(30, 'minutes');
let now2 = moment().add(15, 'minutes');
let inTenMinutes2 = moment().add(20, 'minutes');
let inOneHour2 = moment().subtract(1, 'hour');
let thirtyMinutesAgo2 = moment().subtract(39, 'minutes');

let orange = 'rgba(204, 80, 0, 0.8)'
let pink = 'rgba(153, 0, 143, 0.8)'
let blue = 'rgba(0, 47, 255, 0.8)'
let green = 'rgba(0, 255, 135, 0.8)'
let yellow = 'rgba(255, 255, 0, 0.8)'

function createChart(flightData){
	var scatterChart = new Chart(ctx, {
	    type: 'scatter',
	    data: {
	        datasets: [{
	            label: 'Person 1',
	            backgroundColor: orange,
	            radius: 5,
	            data: flightData,
	        }]
        },

	    options: {
	        scales: {
	            xAxes: [{
	                type: 'time',
	                position: 'bottom',
	                time: {
				        displayFormats: {
				           'millisecond': 'h:mm a',
				           'second': 'h:mm a',
				           'minute': 'h:mm a',
				           'hour': 'h:mm a',
				           'day': 'h:mm a',
				           'week': 'h:mm a',
				           'month': 'h:mm a',
				           'quarter': 'h:mm a',
				           'year': 'h:mm a',
				        }
		            }
	            }]
	        
		    }
		},
	});
}
