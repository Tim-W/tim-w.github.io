/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('adviesA',  function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/advies-a/advies-a.html'
            }
        });
})();