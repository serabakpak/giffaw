var endpoint = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

var endpoint2 = 'http://api.giphy.com/v1/gifs/search?';

$(document).on("ready", function(){
	
	//ajax captures the json object into json variable
	$.ajax( {
			method: 'GET',
			url: endpoint,
			success: onSuccess,
			error: onError
		});

	$('.form-inline').on('submit', function (event) {
		event.preventDefault();
		var formData = $(this).serialize();
		$(".gif-gallery").empty();		
		$.ajax( {
			method: 'GET',
			url: endpoint2 + $('.form-inline').serialize(),
			success: onSubmitReqSuccess,
			error: onError
		});
	})

function onSuccess(json) { 
	
	for (var i = 0; i < json.data.length; i++) {
    	$(".gif-gallery").append('<img src="' + json.data[i].images.fixed_height.url + '">');
	}  
}

function onSubmitReqSuccess(json) {
	console.log(json);
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


});


