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
                    templateUrl: 'lekkage/nee/stof.html'
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
                .state('lekkage-nee-beentjes-4-nee', {
                    url: '/lekkage/nee/beentjes/4/leeftijd',
                    templateUrl: 'lekkage/nee/beentjes/1/2/3/4/nee/leeftijd.html'
                })
                .state('lekkage-nee-stof', {
                    url: '/lekkage/nee/type-luier',
                    templateUrl: 'lekkage/nee/stof/type-luier.html'
                })
                .state('flap-overbroekje', {
                    url: '/lekkage/nee/stof/flap-overbroekje',
                    templateUrl: 'lekkage/nee/stof/flap-overbroekje/flap-overbroekje.html'
                })
                .state('luiers-overbroekjes', {
                    url: '/lekkage/nee/stof/luiers-overbroekjes',
                    templateUrl: 'lekkage/nee/stof/luiers-overbroekjes/luiers-overbroekjes.html'
                })
                .state('luiers-overbroekjes-1', {
                    url: '/lekkage/nee/stof/luiers-overbroekjes-1',
                    templateUrl: 'lekkage/nee/stof/luiers-overbroekjes/1/1.html'
                })
                .state('luiers-overbroekjes-2', {
                    url: '/lekkage/nee/stof/luiers-overbroekjes-2',
                    templateUrl: 'lekkage/nee/stof/luiers-overbroekjes/1/2/2.html'
                })
                .state('luiers-overbroekjes-ja', {
                    url: '/lekkage/nee/stof/luiers-overbroekjes-ja',
                    templateUrl: 'lekkage/nee/stof/luiers-overbroekjes/1/2/ja/ja.html'
                })
                .state('luiers-overbroekjes-nee', {
                    url: '/lekkage/nee/stof/luiers-overbroekjes-nee',
                    templateUrl: 'lekkage/nee/stof/luiers-overbroekjes/1/2/nee/nee.html'
                })
                .state('luiers-overbroekjes-nee-1', {
                    url: '/lekkage/nee/stof/luiers-overbroekjes-nee-1',
                    templateUrl: 'lekkage/nee/stof/luiers-overbroekjes/1/2/nee/1/1.html'
                })
                .state('flap-overbroekje-ja', {
                    url: '/lekkage/nee/stof/flap-overbroekje/ja',
                    templateUrl: 'lekkage/nee/stof/flap-overbroekje/ja/ja.html'
                })


                .state('vlekken', {
                    url: '/vlekken',
                    templateUrl: 'vlekken/vlekken.html'
                })
                .state('vlekken-nee', {
                    url: '/vlekken/nee',
                    templateUrl: 'vlekken/nee/nee.html'
                })
                .state('vlekken-nee-nee', {
                    url: '/vlekken/nee/ja',
                    templateUrl: 'vlekken/nee/nee/nee.html'
                })
                .state('vlekken-nee-ja', {
                    url: '/vlekken/nee/ja',
                    templateUrl: 'vlekken/nee/ja/ja.html'
                })

                .state('uitslag', {
                    url: '/uitslag',
                    templateUrl: 'uitslag/uitslag.html'
                })
                .state('uitslag-nee', {
                    url: '/uitslag/nee',
                    templateUrl: 'uitslag/nee/nee.html'
                })
                .state('uitslag-nee-nee', {
                    url: '/uitslag/nee/ja',
                    templateUrl: 'uitslag/nee/nee/nee.html'
                })
                .state('uitslag-nee-ja', {
                    url: '/uitslag/nee/ja',
                    templateUrl: 'uitslag/nee/ja/ja.html'
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
                }).state('eindscherm-p', {
                    url: '/eindscherm-p',
                    templateUrl: 'directives/eindschermen/ons-advies-p.html'
                }).state('eindscherm-o', {
                    url: '/eindscherm-o',
                    templateUrl: 'directives/eindschermen/ons-advies-o.html'
                })



                .state('advies-dgh', {
                    url: '/advies-efc',
                    templateUrl: 'directives/advies-dgh.html'
                })
                .state('advies-efc', {
                    url: '/advies-efc',
                    templateUrl: 'directives/advies-efc.html'
                })
                .state('advies-dgi', {
                    url: '/advies-efc',
                    templateUrl: 'directives/advies-dgi.html'
                })
                .state('advies-pc', {
                    url: '/advies-pc',
                    templateUrl: 'directives/advies-pc.html'
                });


            $urlRouterProvider.otherwise('/');
        })
})();