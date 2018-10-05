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
                $("#movieInfo1").html("Title \"" + movieTitle + "\" not found");
            }
            else {
                var Title = "Title: " + parsed_json['Title'];
                var Rated = "Rated: " + parsed_json['Rated'];
                var Ratings = "Rating: N/A";

                if (parsed_json['Ratings'].length > 1) {
                    Ratings = "Ratings: " + parsed_json['Ratings'][1]['Value'];
                }

                var Runtime = "Runtime: " + parsed_json['Runtime'];
                var Genre = "Genre: " + parsed_json['Genre'];
                var BoxOffice = "Box office: " + parsed_json['BoxOffice'];

                var everything = Title + "<br>" + Rated + "<br>" + Ratings +
                    "<br>" + Runtime + "<br>" + Genre + "<br>" + BoxOffice;
                $("#movieInfo1").html(everything);

                $("#searchBox1").val("");

                var PosterURL = parsed_json['Poster'];
                console.log("poster url was " + PosterURL);

                if (PosterURL == "N/A") {
                    $("#poster1").attr("src", "");
                }
                else {
                    $("#poster1").attr("src", PosterURL);
                }

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
                $("#movieInfo2").html("Title \"" + movieTitle + "\" not found");
            }
            else {
                var Title = "Title: " + parsed_json['Title'];
                var Rated = "Rated: " + parsed_json['Rated'];
                var Ratings = "Rating: N/A";

                if (parsed_json['Ratings'].length > 1) {
                    Ratings = "Ratings: " + parsed_json['Ratings'][1]['Value'];
                }

                var Runtime = "Runtime: " + parsed_json['Runtime'];
                var Genre = "Genre: " + parsed_json['Genre'];
                var BoxOffice = "Box office: " + parsed_json['BoxOffice'];
                var everything = Title + "<br>" + Rated + "<br>" + Ratings +
                    "<br>" + Runtime + "<br>" + Genre + "<br>" + BoxOffice;
                $("#movieInfo2").html(everything);

                $("#searchBox2").val("");

                var PosterURL = parsed_json['Poster'];
                console.log("poster url was " + PosterURL);
                
                if (PosterURL == "N/A") {
                    $("#poster2").attr("src", "");
                }
                else {
                    $("#poster2").attr("src", PosterURL);
                }

                
            }
        }
    })

});;
