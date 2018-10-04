// e is the event
$("#searchButton").click(function(e) {

    //log what the event was
    console.log(e);
    //get the value
    var movieTitle = $("#searchBox").val();
    //log the value
    console.log("user searched for " + movieTitle);
    //the default behavior is to refresh the whole page
    e.preventDefault();

    var apiURL = "https://www.omdbapi.com/?apikey=9ee2a57e&t=";
    apiURL += movieTitle;

    //log the url
    console.log("the url was " + apiURL);

    $.ajax({
        url: apiURL,
        dataType: "json",
        success: function(parsed_json) {

            var items = parsed_json['items'];

            //log the json return
            console.log(parsed_json);

            if (parsed_json['Error'] != null) {
                $("#movieInfo").html("Error: movie not found");
            }
            else {
                var Rated = "Rated: " + parsed_json['Rated'];
                $("#movieInfo").html(Rated);
            }
        }
    })

});
