(function () {
    "use strict";
    const ipcRenderer = require('electron').ipcRenderer;

    angular
            .module('XSoftware')
            .controller('SearchReportController', SearchReportController);

    SearchReportController.$inject = ['$scope'];

    function SearchReportController($scope) {
        $scope.sortType = 'name';
        $scope.sortReverse = false;
        $scope.searchFish = '';

        $scope.reports = ipcRenderer.sendSync('searchReportNo', '234625629');
        $scope.reports = [
            {id: 'Cali Roll', report_no: 'Crab', shape_cut: 2, carat_weight: 0.90},
            {id: 'Philly', report_no: 'Tuna', shape_cut: 4, carat_weight: 0.80},
            {id: 'Tiger', report_no: 'Eel', shape_cut: 7, carat_weight: 0.70},
            {id: 'Rainbow', report_no: 'Variety', shape_cut: 6, carat_weight: 0.60}
        ];
    }

})();
