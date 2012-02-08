/**
 * jQuery content slider.  
 * @version 0.1
 * @author Daniel Groves
 */


/**
 * Runs the init() function once the document is ready. 
 */
$(document).ready(function() {
	init();
});


/**
 * Runs the required function in order to get the document ready, including setting up 
 * click listeners and enabling to automatic slide switcher.
 */
function init()
{
	// Change to the first slide
	sliderChanger('1');
	
	// Append a click listener to all of the controls
	$('#controls li').click(function() {
		// Grab the id of the selected control and pads to the changeSlide() function
		var id = this.id;
		changeSlide(id);
	});
	
	// Initate the autochanger
	autoChanger();
}

/**
 * Find the ID of the of the slide that corresponds with the selected control removes 
 * 'cont-' from the start in order to pass the ID number on to sliderChanger() method.
 * @param id - the html id of the selected slide controller. 
 */
function changeSlide( id )
{
	var slide = id.replace('cont-', '');
	sliderChanger( slide )
}

/**
 * Converts the ID of into the ID of the slide to be shown, hides the old slide and
 * shows the new one. Also sets the class of the selected slide to 'selected' so 
 * it can be targeted. 
 * @param id - the id number of the slide to be shown. 
 */
function sliderChanger( id )
{
	var slide = $('#slide' + id);
	
	$('.slide').fadeOut('500');
	$('.slide').removeClass('selected');
	slide.addClass('selected');
	slide.delay(500).fadeIn('500');
	
}

/**
 * Finds the total number of slides that are configured to work with the slider.
 * @return Int - Total number of slides available. 
 */
function numberOfSlides()
{
	var noSlides = $('.slide:last').attr('id');
	noSlides = noSlides.replace('slide', '');
	
	return noSlides;
}

/**
 * Changes the slides on a timer set to an interval of four seconds. 
 * Finds the number of the currently selected slide and then adds one to select
 * the next slide. If the new number exceeds the number of slides available to resets
 * back to the start of the slides. 
 */
function autoChanger()
{
	window.setTimeout(function() {
		var currSlide = $('.selected').attr('id');
		currSlide = currSlide.replace('slide', '');
		var nextSlide = null;
		
		if (parseInt(currSlide) == numberOfSlides())
			nextSlide = '1';
		else
			nextSlide = parseInt(currSlide) + 1;
		
		sliderChanger( nextSlide );
		autoChanger();
	}, 4000);
}