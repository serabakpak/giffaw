var endpointTrending = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';
var endpointSearch = 'http://api.giphy.com/v1/gifs/search?';

$(document).on("ready", function(){
	
	// loads top 25 trending gifs
	$.ajax( {
			method: 'GET',
			url: endpointTrending,
			success: onSuccess,
			error: onError
		});

	// user can search for gifs with input field
	$('.form-inline').on('submit', function (event) {
		event.preventDefault();				
		$.ajax( {
			method: 'GET',
			url: endpointSearch,
			data: $('.form-inline').serialize(),
			success: onSuccess,
			error: onError
		});
	})
});

function onSuccess(json) { 
	$(".gif-gallery").empty();
	for (var i = 0; i < json.data.length; i++) {
    	$(".gif-gallery").append('<img src="' + json.data[i].images.fixed_height.url + '">');
	}  
}

function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
}
