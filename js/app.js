(function() {
  function config($locationProvider, $stateProvider) {
  $locationProvider
      .html5Mode({
          enabled: true,
          requireBase: false
       });
   $stateProvider
       .state('main', {
           url: '/',
           templateUrl: '/templates/main.html'
       });
   }
  angular
     .module('ngApp', ['ui.router','yaru22.md'])
 })();
