$(document).ready(function () {

	$(".clickHere").click(function (e) { 
		e.preventDefault();
		$(".bodyClass").toggleClass("bodyParty");

		$.get("https://api.quotable.io/random", function(data){
			$(".textGoesHere").text(data.content);
		});

	});
	
});