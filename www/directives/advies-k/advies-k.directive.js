/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('adviesK',  function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/advies-k/advies-k.html'
            }
        });
})();