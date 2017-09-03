(function () {
    "use strict";
    
    angular
            .module('XSoftware', ['ui.bootstrap', 'ui.router', 'angular-loading-bar'])
            .config(configure);
    
    var dashboardState = {
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: 'views/dashboard.html'
    };

    var searchReportState = {
        name: 'searchreport',
        url: '/searchreport',
        templateUrl: 'views/searchreport.html'
    };

    
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function configure($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
        $stateProvider
                .state(dashboardState)
                .state(searchReportState);
    }

})();
