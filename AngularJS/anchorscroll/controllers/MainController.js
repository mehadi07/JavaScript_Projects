app.controller('MainController', function MainController($scope, $location, $anchorScroll) {
    $scope.scrollTo = function (scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll.yOffset = 20;
        $anchorScroll();
    }
});
