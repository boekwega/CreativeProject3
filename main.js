// e is the event
$("#2009EmmaButton").click(function(e) {

    //log what the event was
    console.log(e);
    //get the value
    var value = $("#2009EmmaButton").val();
    //log the value
    console.log(value);
    //the default behavior is to refresh the whole page
    e.preventDefault();

    //Two ways of displaying the value
    $("#2009EmmaDisplay").text(value);
    $("#otherDisplayOption").text(value);

    var apiURL = "http://www.omdbapi.com/?apikey=9ee2a57e&t=";
    // apiURL += movieTitle

});
