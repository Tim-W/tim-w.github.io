/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('adviesJ',  function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/advies-j/advies-j.html'
            }
        });
})();