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
		  'api-key': "674576b4c7b548809ad5fb4c8909865b",
		  'q': "obama",
		  'begin_date': "20121228",
		  'end_date': "20000210"
		});

		$.ajax({
		  url: url,
		  method: 'GET',
		}).done(function(result) {
	  	console.log(result);
		}).fail(function(err) {
	  	throw err;
		});

	});

	$("#clearButton").on("click", function() {
		clearSearch();
	});
	
});