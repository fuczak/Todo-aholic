var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {	
	$scope.formData = {};

	//display all todos upon landing on the page
	$http.get('/api/todos')
		.success(function(data) {
			$scope.todos = data;
			console.log(data)
		})
		.error(function(data) {
			console.log('Error: '+ data);
		});

	//when submitting the add form, send the text to the node API
	$scope.createTodo = function() {		
		$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	//delete a todo after checking it
	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
			.success(function(data) {
				$scope.todos = data;
				console.log(data);
			})
			.error(function (data) {
				console.log('Error: ' + data);
			});
	};
}