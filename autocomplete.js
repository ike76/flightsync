$(function() {

function log( message ) {
	$( "<div>" ).text( message ).prependTo( "#log" );
	$( "#log" ).scrollTop( 0 );
	}

$( "#city" ).autocomplete({
	source: function( request, response ) {
		$.ajax({
			url: "https://api.sandbox.amadeus.com/v1.2/airports/autocomplete",
			dataType: "json",
			data: {
			apikey: "hHHFLF6BaRjzVHm4DMbCdqeC2QEVG9XR",
			term: request.term
				},
			success: function( data ) {
			response( data );
				}
		});
	},
	minLength: 3,
	select: function( event, ui ) {
		log( ui.item ?
		"Selected: " + ui.item.label :
		"Nothing selected, input was " + this.value);
		},
	open: function() {
		$( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
		},
	close: function() {
		$( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
		}
});
});