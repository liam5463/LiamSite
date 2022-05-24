$(document).ready(function () {

	$(".clickHere").click(function (e) { 
		e.preventDefault();
		$(".bodyClass").toggleClass("bodyParty");
	});
	
});