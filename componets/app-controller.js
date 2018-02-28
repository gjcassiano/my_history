app.controller('HomeController', function($scope, $rootScope, $timeout, $mdConstant) {
    $rootScope.loading = true;
    $scope.$on('$viewContentLoaded', function() {

        $timeout(function() { $rootScope.loading = false;}, 10);
        
    });

    $scope.seperatorKeys = [$mdConstant.KEY_CODE.ENTER,$mdConstant.KEY_CODE.SPACE,
    	$mdConstant.KEY_CODE.COMMA, $mdConstant.KEY_CODE.SPACE, 10, 8629];
	$scope.values = [];

	$scope.addChips = function(chips) {
		console.log(chips);
		var chipsArray = chips.split(',');
		angular.forEach(chipsArray, function(chip) {
			if ($scope.values.indexOf(chip) == -1) {
				$scope.values.push(chip);
			}
		});
		return null;
	};

    // $rootScope.loading = false;
    // console.log($rootScope.loading);
});