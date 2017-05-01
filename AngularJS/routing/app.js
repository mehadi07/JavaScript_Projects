'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('loginApp', ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "templates/home.html",
                controller: "homeController"
            })
            .when("/courses", {
                templateUrl: "templates/courses.html",
                controller: "courseController"
            })
            .otherwise({
                redirectTo: '/home.html'
            });

    });
