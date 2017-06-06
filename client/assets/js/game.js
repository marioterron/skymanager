;
(function() {

	'use strict';

	var linksToModal = function() {

		// Event for change a player in lineup
		$('.to-player-modal').on('click', function(e) {
			e.preventDefault();
			$('#player-modal').modal('show');

			$('.card-player').on('click', function() {
				$('#player-modal').modal('hide');
			});
		});

		// Event for make a bid
		$('.to-bid-modal').on('click', function(e) {
			e.preventDefault();
			$('#bid-modal').modal('show');

			$('.update-bet').on('click', function() {
				$('#bid-modal').modal('hide');
			});

			$('.close-bet').on('click', function() {
				$('#bid-modal').modal('hide');
			});
		});

		// Event for update a bid
		$('.to-update-bid-modal').on('click', function(e) {
			e.preventDefault();
			$('#update-bid-modal').modal('show');
		});

		// Event for check bids for a player
		$('.to-check-bid-modal').on('click', function(e) {
			e.preventDefault();
			$('#check-bid-modal').modal('show');
		});

		// Event for check bids for a player
		$('.to-update-profile-modal').on('click', function(e) {
			e.preventDefault();
			$('#update-profile-modal').modal('show');
		});
	};

	var toggleProfile = function() {
		$('.dropdown-toggle').on('click', function(e) {
			e.preventDefault();
			$('.top-nav > li').addClass('open');
		});
	}

	// Document on load.
	$(function() {
		linksToModal();
		toggleProfile();
	});
}());
