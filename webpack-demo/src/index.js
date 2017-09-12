import './normalize.css';
import './type.css';
import './layout.css';
import './buttons.css';
import './colors.css';
import './breakpoints.css';

$('.mobile-nav-btn').click(function(e){
		$('.mobile-nav').slideToggle();
		// this prevents the browser from doing the default link action
		e.preventDefault();
	});

var $window = $(window);
	  $window.on('resize', function (){
        if ($window.width() > 800)
        {
            $('.mobile-nav').hide();
        }
    });