var app = angular.module('app', ['ngSanitize']);
app.controller('mainCtrl',
    function($scope, $http) {

        $scope.search = function(order, input_title) {

            console.log(input_title);

            var apiURL = "https://www.omdbapi.com/?apikey=9ee2a57e&t=";
            apiURL += input_title;

            //log the url
            console.log("the url was " + apiURL);

            $http.get(apiURL).then(function(response) {

                if (response.data["Response"] == "False") {

                    if (order == 1) {
                        $scope.info1 = response.data["Error"];
                        $scope.poster1 = "";
                    }
                    else if (order == 2) {
                        $scope.info2 = response.data["Error"];
                        $scope.poster2 = "";
                    }
                }
                else {

                    var title = response.data["Title"];
                    var rated = response.data["Rated"];
                    var ratings = response.data["Ratings"][1]['Value'];
                    var runtime = response.data["Runtime"];
                    var genre = response.data["Genre"];
                    var boxOffice = response.data["BoxOffice"];
                    var posterURL = response.data["Poster"];

                    var everything = "Title: " + title + "<br>" + "Rated: " +
                        rated + "<br>" + "Ratings: " + ratings + "<br>" +
                        "Runtime: " + runtime + "<br>" + "Genre: " + genre + "<br>" +
                        "Box office: " + boxOffice;

                    if (order == 1) {
                        $scope.info1 = everything;
                        $scope.poster1 = posterURL;
                    }
                    else if (order == 2) {
                        $scope.info2 = everything;
                        $scope.poster2 = posterURL;
                    }
                }

            });

        }

    })
