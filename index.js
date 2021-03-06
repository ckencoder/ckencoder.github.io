var alphabet = '1:;2|/34~`"567[]89{}0!@#$%^&*()-_=+.,<>\' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

$(document).ready(function() {
	$('h1').mouseenter(function() {
		$(this).css('opacity', '1');
	});
	
	$('h1').mouseleave(function() {
		$(this).css('opacity', '.9');
	});
	
	$('#encode').on('click', function() {
		var message = prompt('Message:');
		var key = parseInt(prompt('Key(1-82):'));
		var newMessage = '';
		var x;
		for (x in message) {
			var position = alphabet.indexOf(message[x]);
		   	var newPosition = (position + key) % 83;
		   	var newCharacter = alphabet[newPosition];
		    newMessage += newCharacter;
	    }
		alert('Encoded Message: ' + newMessage);
	});
	
	$('#decode').on('click', function() {
		var message = prompt('Message:');
	    var key = parseInt(prompt('Key(1-82):'));
	    var newMessage = '';
		var x;
	    for (x in message) {
		   	var position = alphabet.indexOf(message[x]);
		   	var newPosition = (position + (83 - key)) % 83;
		   	var newCharacter = alphabet[newPosition];
		    newMessage += newCharacter;
	    }
		alert('Decoded Message: ' + newMessage);
	});
});
