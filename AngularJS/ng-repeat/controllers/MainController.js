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

    var countries = [
        {
            name: "UK",
            cities: [
                {
                    name: "London"
                }, {
                    name: "Birmingham"
                }, {
                    name: "Manchester"
                }]
                    },
        {
            name: "USA",
            cities: [
                {
                    name: "Los Angeles"
                }, {
                    name: "Chicago"
                }, {
                    name: "Houston"
                }]
                    },
        {
            name: "India",
            cities: [
                {
                    name: "Hyderabad"
                }, {
                    name: "Chennai"
                }, {
                    name: "Mumbai"
                }]
                    }
                ];

    $scope.employees = employees;
    $scope.countries = countries;

});
