app.directive('panelJovas', function() {
  return {
  	transclude: true,
    templateUrl: "componets/panelJovas/panelJovas.html",
    link: function($scope, $element, attr, parentDirectCtrl){
    	$scope.title = attr.title;
    	$scope.processosList = [{id:1, name:'teste',teste:'teste2'}];
    }
  };

});