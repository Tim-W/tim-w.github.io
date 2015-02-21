/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('adviesB',  function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/advies-b/advies-b.html'
            }
        });
})();