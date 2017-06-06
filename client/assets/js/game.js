var toggleProfile = function() {
	$('.dropdown-toggle').on('click', function(e) {
		e.preventDefault();
		$('.top-nav > li').addClass('open');
	});
}

var loadTooltip = function() {
	$('[data-toggle="tooltip"]').tooltip()
}

// Document on load.
$(function() {
	toggleProfile();
	loadTooltip();
});
