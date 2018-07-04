var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http){
	$scope.data=[];
	$scope.getAll=function(){
		$http({
			method : "get",
			url : "studentWebService/getAll"
		}).then(function(res){
			console.log(res.data);
			$scope.data = res.data;
		});
	}
});