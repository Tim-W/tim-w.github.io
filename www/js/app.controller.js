/**
 * Created by tim on 5-1-15.
 */
(function () {
    'use strict';

    angular
        .module('kaatjeHelpt')
        .controller('appController', homeController);

    homeController.$inject = ['$scope', '$ionicModal'];

    function homeController($scope, $ionicModal) {
        $scope.introductietekst = 'Soms kom je problemen tegen als je wasbare luiers gebruikt. Deze app kan je dan helpen. Lees eerst de gebruiksaanwijzing van je luiers nog een door en check of onze oplossingen toegepast mogen worden. We hopen je te kunnen helpen!';
        $scope.geur = {
            vraag: 'Wat ruik je?',
            opties: [
                {
                    titel: 'Ammoniak/urine',
                    link: 'ammoniak-urine'
                },
                {
                    titel: 'Wasmiddel',
                    link: 'wasmiddel'
                },
                {
                    titel: 'Een muffe geur',
                    link: 'een-muffe-geur'
                },
                {
                    titel: 'Schimmel',
                    link: 'schimmel'
                }
            ]
        };

        $scope.ammoniakUrine = {
            vraag: 'Heb je hard water?',
            opties: [
                {
                    titel: 'Ja',
                    link: 'ammoniak-urine-ja'
                },
                {
                    titel: 'Nee',
                    link: 'ammoniak-urine-nee'
                }
            ]
        };

        $scope.geenHardWater = {
            vraag: 'Hoeveel waspoeder gebruik je in vergelijking met de aanbevolen hoeveelheid op het pak?',
            opties: [
                {
                    titel: 'Meer',
                    link: 'ammoniak-urine-nee-meer'
                },
                {
                    titel: 'Minder',
                    link: 'ammoniak-urine-nee-minder'
                },
                {
                    titel: 'Gelijk',
                    link: 'ammoniak-urine-nee-gelijk'
                }
            ]
        };

        $scope.lekkage = {
            vraag: 'Als je luiers schoon zijn, ruik je dan iets anders naast het waspoeder?',
            opties: [
                {
                    titel: 'Nee',
                    link: 'lekkage-nee'
                },
                {
                    titel: 'Ja',
                    link: 'geur'
                }
            ]
        };

        $scope.waarLektHet = {
            vraag: 'Waar lekt het?',
            opties: [
                {
                    titel: 'Bij de beentjes/rond het middel',
                    link: 'lekkage-nee-beentjes'
                },
                {
                    titel: 'Door de stof heen',
                    link: 'lekkage-nee-stof'
                }
            ]
        };

        $scope.luiersVoorgewassen = {
            vraag: 'Zijn de luiers goed voorgewassen?',
            opties: [
                {
                    titel: 'Nee',
                    link: 'lekkage-nee-beentjes-1'
                },
                {
                    titel: 'Ja',
                    link: 'lekkage-nee-beentjes-1'
                }
            ]
        };

        $scope.stofZichtbaar = {
            vraag: 'Is er stof zichtbaar aan de buitenkant?',
            opties: [
                {
                    titel: 'Nee',
                    link: 'lekkage-nee-beentjes-2'
                },
                {
                    titel: 'Ja',
                    link: 'lekkage-nee-beentjes-2'
                }
            ]
        };


        $scope.lekkenLuiersSnachts = {
            vraag: "Lekken de luiers 's nachts?",
            opties: [
                {
                    titel: 'Nee',
                    link: 'lekkage-nee-beentjes-3'
                },
                {
                    titel: 'Ja',
                    link: 'lekkage-nee-beentjes-3'
                }
            ]
        };

        $scope.totaalVerzadigd = {
            vraag: 'Als de luier lekt, is hij dan totaal verzadigd?',
            opties: [
                {
                    titel: 'Nee',
                    link: 'lekkage-nee-beentjes-4'
                },
                {
                    titel: 'Ja',
                    link: 'lekkage-nee-beentjes-4'
                }
            ]
        };

        $scope.strakGenoeg = {
            vraag: 'Zit de luier strak genoeg om de beentjes en het middel?',
            opties: [
                {
                    titel: 'Nee',
                    link: 'lekkage-nee-beentjes-4-nee'
                },
                {
                    titel: 'Ja',
                    link: 'advies-efc'
                }
            ]
        };

        $scope.leeftijd = {
            vraag: 'Hoe oud is je kind?',
            opties: [{
                titel: 'Jonger dan 6 maanden',
                link: 'advies-dgh'
            },
                {
                    titel: 'Ouder dan 6 maanden',
                    link: 'advies-dgi'
                }]
        };

        $scope.typeLuier = {
            vraag: 'Wat voor type luier gebruik je?',
            opties: [
                {
                    titel: 'Voorgevormd met overbroekje',
                    link: 'luiers-overbroekjes'
                },
                {
                    titel: 'Alles-in-één',
                    link: 'luiers-overbroekjes'
                },
                {
                    titel: 'Pocketluier',
                    link: 'luiers-overbroekjes'
                },
                {
                    titel: 'Prefold met overbroekje',
                    link: 'flap-overbroekje'
                }]
        };

        $scope.flapOverbroekje ={
            vraag: 'Stop je de luier onder de flap van het overbroekje?',
            opties: [
                {
                    titel: 'Nee',
                    link: 'luiers-overbroekjes'
                },
                {
                    titel: 'Ja',
                    link: 'flap-overbroekje-ja'
                }
            ]
        };

        $scope.luiersOverbroekjes ={
            vraag: 'Test je luiers/overbroekjes',
            opties: [
                {
                    titel: 'Verder',
                    link: 'luiers-overbroekjes-1'
                }
            ]
        };

        $scope.luiersOverbroekjes2 ={
            vraag: 'Merkte je bij het testen dat de buitenkant van de luiers/overbroekjes vochtig werd?',
            opties: [
                {
                    titel: 'Nee',
                    link: 'luiers-overbroekjes-nee'
                },
                {
                    titel: 'Ja',
                    link: 'luiers-overbroekjes-ja'
                }
            ]
        };

        $scope.vlekken = {
            vraag: 'Als de luiers schoon zijn, ruik je dan iets anders naast het waspoeder?',
            opties: [
                {
                    titel: 'Nee',
                    link: 'vlekken-nee'
                },
                {
                    titel: 'Ja',
                    link: 'geur'
                }
            ]
        };

        $scope.stipjesLuiers = {
            vraag: 'Zie je zwarte, rode of groene stipjes op de luiers?',
            opties: [
                {
                    titel: 'Nee',
                    link: 'vlekken-nee-nee'
                },
                {
                    titel: 'Ja',
                    link: 'vlekken-nee-ja'
                }
            ]
        };

        $scope.uitslag = {
            vraag: 'Als de luiers schoon zijn, ruik je dan iets anders naast het waspoeder?',
            opties: [
                {
                    titel: 'Nee',
                    link: 'uitslag-nee'
                },
                {
                    titel: 'Ja',
                    link: 'geur'
                }
            ]
        };

        $scope.huidKind = {
            vraag: 'Hoe ziet de huid van je kind eruit? Rode plekken met bultjes eromheen? Zie je het vooral in de huidplooien?',
            opties: [
                {
                    titel: 'Nee',
                    link: 'uitslag-nee-nee'
                },
                {
                    titel: 'Ja',
                    link: 'uitslag-nee-ja'
                }
            ]
        };

        $scope.keuzeschermTekst = 'Wat voor probleem heb je?';

        $ionicModal.fromTemplateUrl('directives/modals/hard-water-extra-info.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.hardWaterModal = modal;
        });

        $scope.openModal = function () {
            $scope.hardWaterModal.show();
        };

        $ionicModal.fromTemplateUrl('directives/modals/goede-oplossing.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.goedeOplossingModal = modal;
        });

        $scope.goedeOplossingGevonden = function () {
            $scope.goedeOplossingModal.show();
        };

        $ionicModal.fromTemplateUrl('directives/modals/geen-goede-oplossing.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.geenGoedeOplossingModal = modal;
        });

        $scope.geenGoedeOplossingGevonden = function () {
            $scope.geenGoedeOplossingModal.show();
        };
    }
})();