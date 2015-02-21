/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('adviesH',  function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/advies-h/advies-h.html'
            }
        });
})();