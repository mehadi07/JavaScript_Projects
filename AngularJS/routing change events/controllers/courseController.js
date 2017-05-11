app.controller("courseController", function courseController($scope, $route) {
    $scope.courses = [
        "C#",
        "ASP.NET",
        "ANGULAR",
        "NODE.JS"
    ];

    //    preventing route change

    $scope.$on("$locationChangeStart", function (event, next, current) {
        if (!confirm("Are you sure you want to navigate away : " + next))
//         used locationChangeStart instead of routeChangeStart .used next to show the original path

        {
            event.preventDefault();
        }
    });
});
