app.controller('MainController', function MainController($scope) {

    var country ={
        name: "USA",
        capital: "Washington, D.C",
        flag:"/img/flag.us.png "
    };
    $scope.country = country;
});
