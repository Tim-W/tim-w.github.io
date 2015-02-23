/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('adviesO',  function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/advies-o/advies-o.html'
            }
        });
})();