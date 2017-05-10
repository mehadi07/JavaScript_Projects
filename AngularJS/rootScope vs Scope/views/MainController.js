 app.controller("redColourController", function ($scope, $rootScope) {
         $rootScope.rootScopeColour = "I am Root Scope Colour";
         $rootScope.redColour = "I am Red Colour";
     })
     .controller("greenColourController", function ($scope) {
         $scope.greenColour = "I am Green Colour";
     })
