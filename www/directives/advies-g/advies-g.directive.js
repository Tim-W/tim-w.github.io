/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('adviesG',  function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/advies-g/advies-g.html'
            }
        });
})();