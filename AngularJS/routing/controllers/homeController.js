app.controller("homeController", function homeController($scope, $route) {
    $scope.message = "Home Page";
    
//    preventing route change
    $scope.$on("$routeChangeStart", function (event, next, current) {
        if (!confirm("Are you sure you want to navigate away")) {
            event.preventDefault();
        }
    });
});
