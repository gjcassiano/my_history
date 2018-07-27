app.controller('HomeController', function($scope, $rootScope, $timeout, $mdConstant) {
    $rootScope.loading = true;
    $scope.$on('$viewContentLoaded', function() {

        $timeout(function() { $rootScope.loading = false; console.log('cahgned.');}, 5000);
        
    });

    $scope.scrollEvent = function(e){
    	console.log(e);
    }

    $scope.upCount =  10;
    $scope.downCount =  10;
});