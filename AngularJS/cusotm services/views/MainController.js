
app.controller('MainController', function MainController($scope, stringService) {
    // need to inject the service 

    $scope.transformString = function (input) {

        $scope.output = stringService.processingString(input);
    }
});
