var alphabet = ' abcdefghijklmnopqrstuvwxyz';

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
		   	var newPosition = (position + key) % 27;
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
		   	var newPosition = (position + (27 - key)) % 27;
		   	var newCharacter = alphabet[newPosition];
		    newMessage += newCharacter;
	    }
		alert('Decoded Message: ' + newMessage);
	});
});
