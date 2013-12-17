$(document).ready(function() {

	expandDate();

})

function collapseDate() {
	$('#filter-submit').one('click', function() {

		$('#filter-submit').css('opacity', '0')
		$('#filter').css('height', '28px')
		$('.selected').css('opacity', '0')
		$('.date-container').css('margin-left', '80px')
		$('.date-container').css('margin-top', '-22px')

		expandDate()
	})

}

function expandDate() {
	$('.fade-out').one('click', function() {

		$('#filter-submit').css('opacity', '1')
		$('#filter').css('height', '100px')
		$('.selected').css('opacity', '1')
		$('.date-container').css('margin-left', '40px')
		$('.date-container').css('margin-top', '10px')

		collapseDate()
	})
}