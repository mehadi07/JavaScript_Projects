app.controller("courseController", function courseController($scope, $route) {
    $scope.courses = [
        "C#",
        "ASP.NET",
        "ANGULAR",
        "NODE.JS"
    ];
    
    //    preventing route change

    $scope.$on("$routeChangeStart", function (event, next, current) {
        if (!confirm("Are you sure you want to navigate away")) {
            event.preventDefault();
        }
    });
});
