/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('adviesF',  function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/advies-f/advies-f.html'
            }
        });
})();