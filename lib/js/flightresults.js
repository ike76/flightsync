class FlightResultGroup { // several flight options
	constructor(data, origZone, destZone, origin, destination, color){
		console.log('creating a flightresultgroup with:', data)
		this.rawData = data;
		this.itineraries = this.parseItineraries(data);
		this.orig = origin;
		this.dest = destination;
		this.origZone = origZone;
		this.destZone = destZone;
		this.color = color;
		this.prices = this.addPricesToStore();
		this.times = this.doTravelTimes();
	};
	
	parseItineraries(data){
		let itineraryArray = []
		data.results.forEach(pricePoint => {
			let fare = pricePoint.fare.total_price;
			pricePoint.itineraries.forEach(itinerary=>{
				itinerary.origZone = this.origZone;
				itinerary.destZone = this.destZone;
				itinerary.fare = fare;
				itinerary.travelerPay = this.getTravelerPay(itinerary);
				itinerary.travelerRate = this.travelerRate;
				itinerary.duration = this.getTravelTime(itinerary);
				itinerary.minutes = this.getTravelTime(itinerary).asMinutes();;
				itinerary.depTimeLocal = moment(itinerary.outbound.flights[0].departs_at)
				itinerary.arrTimeLocal = moment(itinerary.outbound.flights[itinerary.outbound.flights.length -1].arrives_at)
				itineraryArray.push(itinerary);
			})
		})
		console.log(itineraryArray);
		return itineraryArray;
	};
	getTravelerPay(itin){
		return 42;
	};
	getTravelTime(itin){ 
		let startTime = moment.tz(itin.outbound.flights[0].departs_at, this.origZone);
		let endTime = moment.tz(itin.outbound.flights[itin.outbound.flights.length -1].arrives_at, this.destZone);
		let travelTime = endTime.diff(startTime, 'minutes', true); // total time in minutes.
		return moment.duration(travelTime, 'minutes'); // a moment.duration() object
	};

	formatItineraryHTML(itin){
		
		let html = `
		<li>
	<div class="flight-result draggable ui-draggable" style="border-color:  ${this.color};">
		<div class="top">
			<div class="left-side">
				<h3 class="price">$${itin.fare}</h3>
			</div>
			<div class="right-side">
				<div class="legs">`
		itin.outbound.flights.forEach(leg=>{
			html += `<div class="leg">
				<p class="maininfo">
					<img src="https://images.kiwi.com/airlines/64/${leg.marketing_airline}.png" alt="">
				${leg.marketing_airline} #${leg.flight_number} ${moment(leg.departs_at).format("ddd MMM D")} | ${leg.origin.airport} ${moment(leg.departs_at).format("h:mma")} <span class="airplane">✈︎</span> ${leg.destination.airport} ${moment(leg.arrives_at).format("h:mma")}
				</p>
			</div>`
		})
		html += `</div>
			</div>
		</div>
		<div class="bottom">
			<div class="small-buttons">
				<button class="btn remove">remove</button>
				<!-- <button class="btn add">add</button> -->
			</div>
				<div class="travel-time">
					total travel time = ${(itin.duration.days()) ? `${itin.duration.days()} days` : '' } ${itin.duration.hours()} hr ${itin.duration.minutes()} min
				</div>
			
		</div>
	</div>
	</li>`
		return html;
	};
	// sortByDuration(arr = this.itineraries){
	// 	return arr.sort((each, others)=>{return each.minutes - others.minutes;});
	// }
	// sortByPrice(arr = this.itineraries){
	// 	return arr.sort((each, others)=>{return each.fare - others.fare})
	// }
	sortByArrivalTimeDelta(targetTime = moment('2018-02-03T13:50'), arr = this.itineraries){
		return arr.sort((each, others)=>{
			let eachDelta = each.arrTimeLocal.diff(targetTime, 'minutes');
			let otherDelta = others.arrTimeLocal.diff(targetTime, 'minutes');
			return Math.abs(eachDelta) - Math.abs(otherDelta);
		});
	}
	addPricesToStore(){
		let pricesArr = this.itineraries.map(itin=>{
			return itin.fare
		});
		// pricesArr.sort((p,e) =>  p-e);
		// let all = pricesArr;
		// let low = pricesArr[0]
		// let high = pricesArr[pricesArr.length -1]
		// let med = pricesArr[Math.floor(pricesArr.length/2)]
		store.prices.push(...pricesArr)
		store.prices.sort((p,o) => p-o )
	};
	doTravelTimes(){
		let timesArr = this.itineraries.map(itin=>{
			return itin.duration._milliseconds
		})
		timesArr.sort((t,e)=> t-e)
		// console.log('trav times', timesArr)
		return {
			all: timesArr,
			low: timesArr[0],
			high: timesArr[timesArr.length -1],
			med: timesArr[Math.floor(timesArr.length/2)]
		}
	}
	displayAllItineraries(itineraryArray = this.itineraries, selector = '.rawResults'){
		let itinHTML = itineraryArray.map(itin => this.formatItineraryHTML(itin));
		$(selector).html(itinHTML);
	};
	getR(itin, maxSize, minSize){
			// if this is the biggest, it would be 1.
			// any other number is a fraction of the biggest.  (a .25 of 1)
			let percentage = itin.duration._milliseconds / this.times.high
			return (maxSize-4) * percentage + minSize;
	};
	createDataSets(){
			let maxSize = 10;
			let minSize = 3;
			// let range = maxSize - minSize;

		function topLine(itin){
			let airport1 = itin.outbound.flights[0].origin.airport
			let html = airport1;
			let flights = itin.outbound.flights;
			for (let i=0; i<flights.length; i++){
				html += ` ✈︎ ${flights[i].destination.airport}`;
			}
			return html;
		}
		function midLine(itin){
			let text = '';
			itin.outbound.flights.forEach((f,i)=>{
				if (i){ // if this is NOT the first one
					text += ` ⎪ ${f.marketing_airline} #${f.flight_number}`
				} else {
					text += `${f.marketing_airline} #${f.flight_number}`;
				}
			})
			return text;
		}
		function botLine(itin){
			let hours = Math.floor(itin.duration.asHours())
			let minutes = itin.duration.minutes()
			return `travel time: ${hours}hr ${minutes}min`
		}
		let dataArray = this.itineraries.map(itin=>{
			return {
				x: itin.arrTimeLocal, 
				y: Number(itin.fare), 
				r: this.getR(itin, maxSize, minSize),
				nonStop: (itin.outbound.flights.length === 1),
				topLine: topLine(itin),
				midLine: midLine(itin),
				botLine: botLine(itin),
				price: `$${itin.fare}`, 
				html: this.formatItineraryHTML(itin),
			};
		});
		let timeset = this.itineraries.map(itin=>{
			return itin.arrTimeLocal
		})

		timeset.sort((t,o) => t-o)

		// set the earliest and latest of all itineraries

		if (timeset[0] < store.timeBounds.earliest) {
			store.timeBounds.earliest = timeset[0];
			console.log('earliest reset to', store.timeBounds.earliest);
		};
		if (timeset[timeset.length - 1] > store.timeBounds.latest){
			store.timeBounds.latest = timeset[timeset.length-1]
			console.log('latest reset to', store.timeBounds.latest);
		};

		dataArray.sort(function(e,o){ return e.y - o.y }) // put them in order of price.
		let dataset = {
			label: this.orig,
			backgroundColor: this.color,
			// radius: 10, 
			data: dataArray,
		};
		store.chartDatasets.push(dataset);
		store.chartTimesets.push(timeset);
	};

}

const resultsArray = []; // several groups of flight options