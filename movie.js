angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  
  function mainCtrl ($scope) {
      
    $scope.btn1 = function(form){
    
        console.log(form);
        console.log(form.title);
        
    }
}