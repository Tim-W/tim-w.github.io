/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('adviesM',  function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/advies-m/advies-m.html'
            }
        });
})();