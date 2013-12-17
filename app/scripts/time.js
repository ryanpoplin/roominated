$(document).ready(function() {

	populateHours(8, 5)

	var moveHours = counter(0)
	var moveMinutes = counter(0)
	moveHours('hours-down', 'hours', -1)
	moveHours('hours-up', 'hours', 1)
	moveMinutes('minutes-down', 'minutes', -1)
	moveMinutes('minutes-up', 'minutes', 1)
})

function populateHours(start, num) {
	var hours = [];

	for (i = start; i < (num + 12); i++) {

		if (i > 12) {
			hours.push(i - 12)	
		} else {
			hours.push(i)
		}
	}

	$('.hours').append('<div class="slot"></div>')

	hours.forEach(function(hour) {
		$('.hours').append('<div class="slot">' + hour + '</div>')
	})
}

function counter(count) {
	return function (button, div, direction) {
		$('.' + button).on('click', function() {
			var sliderTop = parseInt($('.' + div).css('top').slice(0, -2));
			var slotHeight = $('.slot').height();

			if (direction > 0) {

				if (Math.abs(count) < ($('.' + div).children().length - 2)) {
					$('.' + div).css('top', ((count * slotHeight) - slotHeight).toString() + 'px')
					count--
					
				}

			}

			if (direction < 0) {
				
				if (count < 0) {
					$('.' + div).css('top', ((count * slotHeight) + slotHeight).toString() + 'px')
					count++
					
				}
			}
		})
	}
}

function findValue(klass) {
	var slotHeight = $('.slot').height();
	var sliderTop = parseInt($('.' + klass).css('top').slice(0, -2));

	$('.' + klass).children().each(function(index) {

		if ((index * slotHeight) === (Math.abs(sliderTop) + slotHeight)) {
			console.log(this)
			console.log('this is the val: ', $(this).text())
		}

		// console.log(this)
		// console.log(index)

		// console.log($(this).height())
		// console.log($(this).css('top'))
	})
}



