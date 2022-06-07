$(document).ready(function () {

	$(".clickHere").click(function (e) { 
		e.preventDefault();
		$(".bodyClass").toggleClass("bodyParty");
	});

	$(".getAQuote").click(function (e) {
		e.preventDefault();
		$.get("https://api.quotable.io/random", function(data){
			$(".textGoesHere").text(data.content);
		});
	})
	
});