/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('navButtons',  function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/nav-buttons/nav-buttons.html',
                controller: function ($scope, $ionicHistory, $ionicNavBarDelegate) {
                    $scope.goHome = function () {
                        $ionicHistory.nextViewOptions({
                            disableAnimate: false,
                            disableBack: true,
                            historyRoot: true
                        });
                        $ionicHistory.clearHistory();
                        $ionicHistory.clearCache();
                    }
                }
            }
        });
})();