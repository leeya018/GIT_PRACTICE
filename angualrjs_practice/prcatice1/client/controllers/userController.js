app.controller('myController', ['$scope', 'userService', userController]);

function userController($scope, userService) {
  $scope.user = userService.getUserById(1)
}
