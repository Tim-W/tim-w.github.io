/**
 * Created by tim on 4-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('linkButtonOutline',  function () {
            return {
                restrict: 'E',
                scope: {
                    link: '=link',
                    type: '=type'
                },
                templateUrl: 'directives/link-outline/link.html',
                transclude: true
            }
        });
})();