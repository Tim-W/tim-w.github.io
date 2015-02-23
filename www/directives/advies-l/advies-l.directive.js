/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('adviesL',  function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/advies-l/advies-l.html'
            }
        });
})();