/**
 * Created by tim on 4-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('linkButton',  function () {
            return {
                restrict: 'E',
                scope: {
                    link: '=link',
                    type: '=type'
                },
                templateUrl: 'directives/link/link.html',
                transclude: true
            }
        });
})();