angular.module('binaryApp',[])
	.controller('MainController', ['$http', '$scope', function($http, $scope){
		$scope.publicTotal = 0;
		$scope.stargazersTotal = 0;
		$http.get('https://api.github.com/users/B1naryStudio/repos').success(function(data, status, headers, config){
			$scope.repositories = data;
			data.forEach(function(item){
				if (!item.private){
					$scope.publicTotal++;
				}
				$scope.stargazersTotal += item.stargazers_count;
			});
		});

		$scope.icon = {
			'JavaScript' : 'js.png',
			'PHP' : 'php.png',
			'C#' : 'csharp.png',
			'HTML' : 'html.png'
		};

		 $scope.filter = {};
	    
	    $scope.filterByCategory = function (repository) {
	        return $scope.filter[repository.language] || noFilter($scope.filter);
	    };
	    
	    function noFilter(filterObj) {
	        for (var key in filterObj) {
	            if (filterObj[key]) {
	                return false;
	            }
	        }
	        return true;
	    }

	}]);