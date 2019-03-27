console.log('hi');

/*Toggling nav*/
$('#nav').click(function(){
	$('.button').toggle();
});

/*initially para2 and its button is hidden*/
$('#para2').hide();
$('.btn-hide').hide();


/* adding a menu item - chips*/
$('.btn-xtra').click(function(){
	$('ul').append('<li>Chips</li>')

});


/* removing the last item in the list */
$('.btn-remove').click(function(){
	$('li').last().remove();
});

/* Changing opacity of the para lighter*/
$('.btn-light').click(function(){
	$('#para1').css("opacity","0.2");
});

/* Changing the opacity  of para darker*/
$('.btn-dark').click(function(){
	$('#para1').css("opacity","1");
});

/* scrolling to the section in single page application*/
$('#user-name').click(function(){
	$('html,body').animate({
		scrollTop:$("#username").offset().top},1000);
	});

/* showing more text*/
$('.btn-show').click(function(){
	$('#para2').slideDown(2000);
	$('.btn-hide').show();
	$('.btn-show').hide();

});

/*showing less text*/
$('.btn-hide').click(function(){
	$('#para2').slideUp(2000);
	$('.btn-hide').hide();
	$('.btn-show').show();

});



















