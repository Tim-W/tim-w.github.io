/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('adviesP',  function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/advies-p/advies-p.html'
            }
        });
})();