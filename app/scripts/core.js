var App = {
	Models: {},
	Collections: {},
	Views: {},
	Rooms: null
};

// Add data from this 'Room' model into Parse...
App.Models.Room = Backbone.Model.extend({
	initialize: function() {
		console.log("Backbone 'Room' model has been initialized...");
	}/*,
	defaults: function() {
		timeSlots: [
			"8:00 A.M.",
			"8:30 A.M.",
			"9:00 A.M.",
			"9:30 A.M.",
			"10:00 A.M.",
			"10:30 A.M.",
			"11:00 A.M.",
			"11:30 A.M.",
			"12:00 P.M.",
			"12:30 P.M.",
			"1:00 P.M.",
			"1:30 P.M.",
			"2:00 P.M.",
			"2:30 P.M.",
			"3:00 P.M.",
			"3:30 P.M.",
			"4:00 P.M.",
			"4:30 P.M.",
			"5:00 P.M."
		]
	}*/
});

$(function() {

	var ouyaRoom = new App.Models.Room({
		name: "Ouya Room",
		timeSlots: [
			"8:00 A.M.",
			"8:30 A.M.",
			"9:00 A.M.",
			"9:30 A.M.",
			"10:00 A.M.",
			"10:30 A.M.",
			"11:00 A.M.",
			"11:30 A.M.",
			"12:00 P.M.",
			"12:30 P.M.",
			"1:00 P.M.",
			"1:30 P.M.",
			"2:00 P.M.",
			"2:30 P.M.",
			"3:00 P.M.",
			"3:30 P.M.",
			"4:00 P.M.",
			"4:30 P.M.",
			"5:00 P.M.",
			"5:30 P.M."
		]
	});
	
	var ouyaText = ouyaRoom.get("name");
	
	$("#room-name").text(ouyaText);

	var smallRoom = new App.Models.Room({
		name: "Small Room"
	});

	var smallText = smallRoom.get("name");

	$("#right-arrow").click(function() {
		$("#room-name").text(smallText);
	});

	$("#left-arrow").click(function() {
		$("#room-name").text(ouyaText);
	});

	var ouyaTimes = ouyaRoom.get("timeSlots");
                    
    displayTimeSlots(ouyaTimes);
    
    function displayTimeSlots(timeSlots) {
        for(var i = 0; i < timeSlots.length; i = i + 1) {
            var str = "<div class='time-slot'>" + 
                          "<h3>" + timeSlots[i] + "</h3>" +
                      "</div>" 
            $("#core-container").append(str);
        }
    }

});