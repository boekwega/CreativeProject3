// e is the event
$("#searchButton1").click(function(e) {

    //log what the event was
    console.log(e);
    //get the value
    var movieTitle = $("#searchBox1").val();
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
        // add p to the end of json in case 
        // you run into cores errors
        dataType: "jsonp",
        success: function(parsed_json) {

            var items = parsed_json['items'];

            //log the json return
            console.log(parsed_json);

            if (parsed_json['Error'] != null) {
                $("#movieInfo1").html("Error: movie not found");
            }
            else {
                var Title = "Title: " + parsed_json['Title'];
                $("#movieInfo1").html(Title);
            }
        }
    })

});

// e is the event
$("#searchButton2").click(function(e) {

    //log what the event was
    console.log(e);
    //get the value
    var movieTitle = $("#searchBox2").val();
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
        // add p to the end of json in case 
        // you run into cores errors
        dataType: "jsonp",
        success: function(parsed_json) {

            var items = parsed_json['items'];

            //log the json return
            console.log(parsed_json);

            if (parsed_json['Error'] != null) {
                $("#movieInfo2").html("Error: movie not found");
            }
            else {
                var Title = "Title: " + parsed_json['Title'];
                $("#movieInfo2").html(Title);
            }
        }
    })

});
