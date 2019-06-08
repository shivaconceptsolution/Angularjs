var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html'
   
  })

  .when('/contact', {
    templateUrl : 'pages/contact.html'
    
  })

  .when('/about', {
    templateUrl : 'pages/team.html'
     })
  

  .otherwise({redirectTo: '/'});
});

