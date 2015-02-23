/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('adviesI',  function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/advies-i/advies-i.html'
            }
        });
})();