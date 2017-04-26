app.controller('MainController', function MainController($scope) {

    var country ={
        name: "USA",
        capital: "Washington, D.C",
        flag:"/img/flag.us.png ",
        comment:"Awesome"
    };
    $scope.country = country;
    // for 2 way binding purpose 
    $scope.comment = country.comment;
});
