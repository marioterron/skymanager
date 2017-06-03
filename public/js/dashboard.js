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


		$('.to-bid-modal').on('click', function(e) {
			e.preventDefault();
			$('#bid-modal').modal('show');
		});

		$('.update-bet').on('click', function() {
			$('#bid-modal').modal('hide');
		});

		$('.close-bet').on('click', function() {
			$('#bid-modal').modal('hide');
		});


		$('.to-update-bid-modal').on('click', function(e) {
			e.preventDefault();
			$('#update-bid-modal').modal('show');
		});

	};


	// Document on load.
	$(function() {
		linksToModal();
	});
}());
