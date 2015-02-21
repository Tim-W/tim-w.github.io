/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('adviesD',  function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/advies-d/advies-d.html'
            }
        });
})();