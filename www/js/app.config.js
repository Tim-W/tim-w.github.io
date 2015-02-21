/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home.html'
                })
                .state('keuzescherm', {
                    url: '/keuzescherm',
                    templateUrl: 'keuzescherm.html'
                })
                .state('geur', {
                    url: '/geur',
                    templateUrl: 'geur/geur.html'
                })
                .state('ammoniak-urine', {
                    url: '/ammoniak-urine',
                    templateUrl: 'geur/ammoniak-urine/ammoniak-urine.html'
                })
                .state('ammoniak-urine-ja', {
                    url: '/ammoniak-urine-ja',
                    templateUrl: 'geur/ammoniak-urine/ja/ammoniak-urine-ja.html'
                })
                .state('ammoniak-urine-nee', {
                    url: '/ammoniak-urine-nee',
                    templateUrl: 'geur/ammoniak-urine/nee/ammoniak-urine-nee.html'
                })
                .state('ammoniak-urine-nee-gelijk', {
                    url: '/ammoniak-urine-nee-gelijk',
                    templateUrl: 'geur/ammoniak-urine/nee/gelijk/ammoniak-urine-nee-gelijk.html'
                })
                .state('ammoniak-urine-nee-meer', {
                    url: '/ammoniak-urine-nee-meer',
                    templateUrl: 'geur/ammoniak-urine/nee/meer/ammoniak-urine-nee-meer.html'
                })
                .state('ammoniak-urine-nee-minder', {
                    url: '/ammoniak-urine-nee-minder',
                    templateUrl: 'geur/ammoniak-urine/nee/minder/ammoniak-urine-nee-minder.html'
                })
                .state('wasmiddel', {
                    url: '/wasmiddel',
                    templateUrl: 'geur/wasmiddel/wasmiddel.html'
                })
                .state('een-muffe-geur', {
                    url: '/een-muffe-geur',
                    templateUrl: 'geur/een-muffe-geur/een-muffe-geur.html'
                })
                .state('schimmel', {
                    url: '/schimmel',
                    templateUrl: 'geur/schimmel/schimmel.html'
                })
                .state('lekkage', {
                    url: '/lekkage',
                    templateUrl: 'lekkage/lekkage.html'
                })
                .state('lekkage-nee', {
                    url: '/lekkage/nee',
                    templateUrl: 'lekkage/nee/waar-lekt-het.html'
                })
                .state('lekkage-nee-beentjes', {
                    url: '/lekkage/nee/beentjes',
                    templateUrl: 'lekkage/nee/beentjes/beentjes.html'
                })
                .state('lekkage-nee-beentjes-1', {
                    url: '/lekkage/nee/beentjes/1',
                    templateUrl: 'lekkage/nee/beentjes/1/1.html'
                })
                .state('lekkage-nee-beentjes-2', {
                    url: '/lekkage/nee/beentjes/2',
                    templateUrl: 'lekkage/nee/beentjes/1/2/2.html'
                })
                .state('lekkage-nee-beentjes-3', {
                    url: '/lekkage/nee/beentjes/3',
                    templateUrl: 'lekkage/nee/beentjes/1/2/3/3.html'
                })
                .state('lekkage-nee-beentjes-4', {
                    url: '/lekkage/nee/beentjes/4',
                    templateUrl: 'lekkage/nee/beentjes/1/2/3/4/4.html'
                })
                .state('advies-efc', {
                    url: '/lekkage/nee/beentjes/4/advies-efc',
                    templateUrl: 'lekkage/nee/beentjes/1/2/3/4/ja/advies-efc.html'
                })
                .state('lekkage-nee-beentjes-4-nee', {
                    url: '/lekkage/nee/beentjes/4/leeftijd',
                    templateUrl: 'lekkage/nee/beentjes/1/2/3/4/nee/leeftijd.html'
                })








                .state('eindscherm-a', {
                    url: '/eindscherm-a',
                    templateUrl: 'directives/eindschermen/ons-advies-a.html'
                }).
                state('eindscherm-b', {
                    url: '/eindscherm-b',
                    templateUrl: 'directives/eindschermen/ons-advies-b.html'
                }).state('eindscherm-c', {
                    url: '/eindscherm-c',
                    templateUrl: 'directives/eindschermen/ons-advies-c.html'
                }).state('eindscherm-d', {
                    url: '/eindscherm-d',
                    templateUrl: 'directives/eindschermen/ons-advies-d.html'
                }).state('eindscherm-e', {
                    url: '/eindscherm-e',
                    templateUrl: 'directives/eindschermen/ons-advies-e.html'
                }).state('eindscherm-f', {
                    url: '/eindscherm-f',
                    templateUrl: 'directives/eindschermen/ons-advies-f.html'
                }).state('eindscherm-g', {
                    url: '/eindscherm-g',
                    templateUrl: 'directives/eindschermen/ons-advies-g.html'
                }).state('eindscherm-h', {
                    url: '/eindscherm-h',
                    templateUrl: 'directives/eindschermen/ons-advies-h.html'
                }).state('eindscherm-m', {
                    url: '/eindscherm-m',
                    templateUrl: 'directives/eindschermen/ons-advies-m.html'
                });


            $urlRouterProvider.otherwise('/');
        })
})();