$(function() {

	$('#myButton').on('click', function(event) {
		event.preventDefault();
		$('#hidden-text').toggle();
	});

});
