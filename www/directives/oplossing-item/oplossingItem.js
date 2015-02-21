(function () {
    'use strict';

    angular
        .module('kaatjeHelpt.directives')
        .directive('oplossingItem', oplossingItem);

    oplossingItem.$inject = ['$window'];

    /* @ngInject */
    function oplossingItem($window) {
        // Usage:
        // 
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'directives/oplossing-item/oplossing-item.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
})();