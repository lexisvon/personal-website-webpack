import './stylesheets/normalize.css';
import './stylesheets/type.css';
import './stylesheets/layout.css';
import './stylesheets/buttons.css';
import './stylesheets/colors.css';
import './stylesheets/breakpoints.css';

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