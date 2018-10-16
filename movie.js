angular.module('app', [])
    .controller('mainCtrl',
        function($scope, $http) {

            $scope.btn1 = function(form) {

                console.log(form);
                console.log(form.title);

                var apiURL = "https://www.omdbapi.com/?apikey=9ee2a57e&t=";
                apiURL += form.title;

                //log the url
                console.log("the url was " + apiURL);

                $http.get(apiURL).then(function(response) {

                    console.log("The response was: " + response);
                    console.log("response.Error: " + response.Error);
                    console.log("response.data: " + response.data);
                    $scope.movieInfo1 = response.data;

/* We're at the point where we're getting all the information back from the 
api and now we need to figure out how to parse through it.

Also, we need to figure out how to deal with an invalid movie title.*/


                });

            }


        })
