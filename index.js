var alphabet = '1234567890!@#$%^&*()-_=+ abcdefghijklmnopqrstuvwxyz';

$(document).ready(function() {
	$('h1').mouseenter(function() {
		$(this).css('opacity', '1');
	});
	
	$('h1').mouseleave(function() {
		$(this).css('opacity', '.9');
	});
	
	$('#encode').on('click', function() {
		var message = prompt('Message:');
		var key = parseInt(prompt('Key:'));
		var newMessage = '';
		var x;
		for (x in message) {
			var position = alphabet.indexOf(message[x]);
		   	var newPosition = (position + key) % 41;
		   	var newCharacter = alphabet[newPosition];
		    newMessage += newCharacter;
	    }
		alert('Encoded Message: ' + newMessage);
	});
	
	$('#decode').on('click', function() {
		var message = prompt('Message:');
	    var key = parseInt(prompt('Key:'));
	    var newMessage = '';
		var x;
	    for (x in message) {
		   	var position = alphabet.indexOf(message[x]);
		   	var newPosition = (position + (41 - key)) % 41;
		   	var newCharacter = alphabet[newPosition];
		    newMessage += newCharacter;
	    }
		alert('Decoded Message: ' + newMessage);
	});
});
