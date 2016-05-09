(function($) {
    
    // closes the responsive menu on click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
	
})(jQuery); 