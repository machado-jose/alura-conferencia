function activeScroll(selector)
{
	$(selector).click(function(event){
		event.preventDefault();
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);
	});
}

activeScroll('a[href*=panel-form]');
activeScroll('a[href*=panel-speaker]');
activeScroll('a[href*=panel-about]');