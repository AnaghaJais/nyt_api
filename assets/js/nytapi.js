$(document).ready(function() {

	var searchTerm;
	var numRecords;
	var startYear;
	var endYear;
	
	function clearSearch() {
		searchTerm = "";
		numRecords = "";
		startYear = "";
		endYear = "";
	}

	$("#searchButton").on("click", function() {

			
			searchTerm = $("#search-term").val();
			numRecords = $("#num-record").val();
			startYear = $("#start-year").val();
			endYear = $("#end-year").val();

			//var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
			//url += '?' + "q=" + searchTerm"&api-key=674576b4c7b548809ad5fb4c8909865b";

			
/*
			$.ajax({
			  url: url,
			  method: 'GET',
				}).done(function(result) {
		  
		  	console.log(result);
				}).fail(function(err) {
		  throw err;
		});
*/
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
		  'api-key': "7816a52515ce4ce0b8ef442c2a524c15",
		  'q': searchTerm,
		  'begin_date': startYear,
		  'end_date': endYear
		});

			//url += "&fl=";

		$.ajax({
		  url: url,
		  method: 'GET',
		}).done(function(result) {
	  	console.log(result);
	  	$("#gifs-appear-here").html(result.response.docs[0].headline);

	  	$("#title").append(result.response.docs[0].headline);
	  	$("#author").append(result.response.docs[0].byline.original);
	  	$("#section").append("Section: " + result.response.docs[0].section_name);

		}).fail(function(err) {

	  	throw err;
		});

	});

	$("#clearButton").on("click", function() {
		clearSearch();
	});
	
});