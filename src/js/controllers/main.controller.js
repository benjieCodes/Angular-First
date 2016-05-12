function MainController ($scope) {

  $scope.allTasks = [];
  $scope.addTask = function (taskString) {
    $scope.allTasks.push(taskString)
    $scope.task = "";
  }

  $scope.buttonStatus = 'Have not been clicked'
  $scope.clicked = function () {
    $scope.buttonStatus = "Have been clicked"
  }
}
export { MainController };
