angular.module('binaryApp',[])
	.controller('MainController', ['$http', '$scope', function($http, $scope){
		$http.get('https://api.github.com/users/B1naryStudio/repos').success(function(data, status, headers, config){
			$scope.repositories = data;
		});

		$scope.icon = {
			'JavaScript' : 'js.png',
			'PHP' : 'php.png',
			'C#' : 'csharp.png'
		};

	}]);