;
(function() {

	'use strict';


	// Modal
	var linksToModal = function() {
		$('.to-player-modal').on('click', function(e) {
			e.preventDefault();
			$('#player-modal').modal('show');
		});

		$('.card-player').on('click', function() {
			$('#player-modal').modal('hide');
		});
	};


	// Document on load.
	$(function() {
		linksToModal();

	});


}());
