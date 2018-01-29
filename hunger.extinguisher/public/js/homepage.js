jQuery(function () {
	$('#in_cuisine').prop('disabled', true);
	$('#in_submit').prop('disabled', true);
	$('#in_city').focus();
	var coordinates,city,cuisines;
	var populateCuisines = function() {
		$.ajax({
		  type: 'GET',
		  url: 'https://developers.zomato.com/api/v2.1/cuisines?lat='+coordinates.latitude+'&lon='+coordinates.longitude,
		  headers: {
		  	'Content-Type': 'application/xml',
		    "user-key":"5755223f05e962d6ccd4c2d6e4715d1b"
			},
			params: {
		    	lat:coordinates.latitude,
		    	lon: coordinates.longitude
			},
		  success: function(data) {
		  	$('#mySelect')
			    .find('option')
			    .remove()
			    .end();
			    
			    cuisines = data.cuisines;

		  		$.each(data.cuisines, function(index, value) {
		  			$('#in_cuisine').append('<option value="'+value.cuisine.cuisine_id+'">'+value.cuisine.cuisine_name+'</option>');
		  		});
		  		$('#in_cuisine').prop('disabled', false);
				$('#in_submit').prop('disabled', false);
		  }
		});

		$('#in_cuisine').prop('disabled', true);

	};
	function getcitydetails(facn) {
		 jQuery.getJSON(
            "http://gd.geobytes.com/GetCityDetails?callback=?&fqcn="+facn,
             function (data) {
             	coordinates = {
             		"latitude":data.geobyteslatitude, 
             		"longitude":data.geobyteslongitude
             	};
             	populateCuisines();
        	}
	    );
	};
	
	 jQuery("#in_city").autocomplete({
		source: function (request, response) {
		 jQuery.getJSON(
			"http://gd.geobytes.com/AutoCompleteCity?callback=?&filter=US,CA&q="+request.term,
			function (data) {
			 response(data);
			}
		 );
		},
		minLength: 3,
		select: function (event, ui) {
		 var selectedObj = ui.item;
		 city
		 jQuery("#in_city").val(selectedObj.value);
		 getcitydetails(selectedObj.value);
		return false;
		},
		open: function () {
		 jQuery(this).removeClass("ui-corner-all").addClass("ui-corner-top");
		},
		close: function () {
		 jQuery(this).removeClass("ui-corner-top").addClass("ui-corner-all");
		}
	 });
	 jQuery("#in_city").autocomplete("option", "delay", 100);

	 $('#cc_formdata').submit(function(e) {
	 	e.preventDefault();
	 	$('#in_city_coor').val(JSON.stringify(coordinates))
	 	$('#in_cuisines').val(JSON.stringify(cuisines))
	 	this.submit(); 
	});

    
});
