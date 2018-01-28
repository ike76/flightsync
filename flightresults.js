class FlightResultGroup { // several flight options
	constructor(data){
		console.log(data)
		this.rawData = data;
		this.itineraries = this.parseItineraries(data);
	};
	formatHTML(){

	};
	parseItineraries(data){
		let itineraryArray = []
		data.results.forEach(pricePoint => {
			let fare = pricePoint.fare.total_price;
			pricePoint.itineraries.forEach(itinerary=>{
				itinerary.fare = fare;
				itineraryArray.push(itinerary);
			})
		})
		return itineraryArray;
	};
	formatItineraryHTML(itin){
		let html = `
			<div class="flight-result">
				<h3 class="price">$${itin.fare}</h3>`;

				itin.outbound.flights.forEach(leg=> {
					html += `<div class="leg">
						<p class="maininfo">${leg.marketing_airline} #${leg.flight_number} Departs ${leg.origin.airport} ${moment(leg.departs_at).format("ddd MMM D @ h:mma")} | Arrives ${leg.destination.airport} at ${moment(leg.arrives_at).format("h:mma")}</p>
					</div>`
				})
		html += '</div>';
		return html;
	};
	displayAllItineraries(itineraryArray = this.itineraries, selector = '.rawResults'){
		let itinHTML = itineraryArray.map(itin => this.formatItineraryHTML(itin));
		$(selector).html(itinHTML);
	};
}

const resultsArray = []; // several groups of flight options