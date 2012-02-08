$(document).ready(function() {

	init();
	
});

function init()
{
	sliderChanger('1');
	
	$('#controls li').click(function() {
		var id = this.id;
		changeSlide(id);
	});
	
	autoChanger();
}

function changeSlide( id )
{
	var slide = id.replace('cont-', '');
	sliderChanger( slide )
}

function sliderChanger( id )
{
	var slide = $('#slide' + id);
	
	$('.slide').fadeOut('500');
	$('.slide').removeClass('selected');
	slide.addClass('selected');
	slide.delay(500).fadeIn('500');
	
}

function numberOfSlides()
{
	var noSlides = $('.slide:last').attr('id');
	noSlides = noSlides.replace('slide', '');
	
	return noSlides;
}

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