$(document).ready(function() {

	// Show the sub menu based on the url
	// BUG when you're on the root of the URL all of the submenu's show.
	var url = window.location.pathname,
	urlRegExp = new RegExp(url.replace(/\/$/,''));
	$('.ds-navigation li > a').each(function(){
	   if(urlRegExp.test($(this).attr('href'))){
		   $(this).addClass('active');
		   $(this).parent().parent().parent('li').addClass('active');
	   }
	});

	// YOUR CUSTOM JS


});
