   $(function(){

    // initialize input widgets first
    $('#dateTimePicker .time').timepicker({
        'showDuration': true,
        'timeFormat': 'g:ia'
    });

    $('#dateTimePicker .date').datepicker({
        'format': 'm/d/yyyy',
        'autoclose': true
    });

    // initialize datepair
    $('#dateTimePicker').datepair();
   })