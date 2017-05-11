app.controller("homeController", function homeController($scope, $route, $rootScope, $log) {
    $scope.message = "Home Page";

    //    Route change events

    $rootScope.$on("$locationChangeStart", function () {
        $log.debug("$locationChangeStart fired");
    });

    $rootScope.$on("$routeChangeStart", function () {
        $log.debug("$routeChangeStart fired");
    });

    $rootScope.$on("$locationChangeSuccess", function () {
        $log.debug("$locationChangeSuccess fired");
    });

    $rootScope.$on("$routeChangeSuccess", function () {
        $log.debug("$routeChangeSuccess fired");
    });
});
