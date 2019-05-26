var myNirav = angular.module('myNirav', ['ngRoute']);
myNirav.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    //route for home page
        .when('/', {
            templateUrl: './Mainpage.html',
            controller: 'maincontroller'
        })
        .when('/aboutus', {
            templateUrl: './LoginPage.html',
            controller: 'Loginpagecontroller'
        })
});
myNirav.controller('maincontroller', function($scope) {
    $scope.message = 'Your job search for Bengaluru ends here';
});


myNirav.controller('Loginpagecontroller', function($scope) {

});