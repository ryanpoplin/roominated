$(document).ready(function() {

	displayDate();
	moveOptionsDown();	

})

function displayDate() {

	var date = $('.current-month').text() + ' ' + $('.current-day').text() + ' ' + $('.current-year').text()

	$('.current-date').text(date)
}

function moveOptionsDown() {
	$('.current-date').one('click', function() {
		$('.options-container').css('top', '50px')
		$('.room').css('top', '430px')

		moveOptionsUp()
	})

}

function moveOptionsUp() {
	$('.current-date').one('click', function() {
		$('.options-container').css('top', '-61px')
		$('.room').css('top', '50px')

		moveOptionsDown()
	})

}