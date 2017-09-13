import './stylesheets/normalize.css';
import './stylesheets/type.scss';
import './stylesheets/layout.scss';
import './stylesheets/buttons.scss';
import './stylesheets/colors.scss';
import './stylesheets/images.scss';
import './stylesheets/breakpoints.scss';
import './favicons/favicons';

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