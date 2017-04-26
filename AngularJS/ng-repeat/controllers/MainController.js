app.controller('MainController', function MainController($scope) {

    var employees = [{
            firstName: "Ben",
            lastName: "Hastings",
            gender: "Male",
            salary: 55000
    }, {
            firstName: "Sara",
            lastName: "Paul",
            gender: "Female",
            salary: 68000
    }, {
            firstName: "Mark",
            lastName: "Holland",
            gender: "Male",
            salary: 57000
    },
        ];
    
    $scope.employees = employees;
    
});
