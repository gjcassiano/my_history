app.controller('ToolbarController', function($scope, $rootScope) {
	$scope.title = "Jovas App";

	$scope.checkActiveUrl = function (hash) {
		return location.hash.startsWith(hash);
	}
	
	$scope.goto = function (url) {
		location.href = url;
	}

});