'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('loginApp', ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {

//        $routeProvider.caseInsensitiveMatch: true;
        //for all caseInsensitive
        
        $routeProvider
            .when("/home", {
                templateUrl: "templates/home.html",
                controller: "homeController"
            })
            .when("/courses", {
                templateUrl: "templates/courses.html",
                controller: "courseController",
                //caseInsensitiveMatch: true
                // to set caseInsensitive
            })
            .otherwise({
                redirectTo: '/home'
            });
        $locationProvider.html5Mode(true);


    });
