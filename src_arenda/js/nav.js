$(document).ready(function(){
	$('.cross, .change').click(function(){
		$('.main-li').toggle('slow');
		//$('.change').toggle();

	});

	$('#disc').click(function(){
		$('.discout').toggle();
	})
});