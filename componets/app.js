
'use strict';

var app = angular.module("jovas", ["ngMaterial", "ngRoute", "ngMessages", "mdDataTable"]);

//route
app.config(function($routeProvider, $mdThemingProvider) {
    $routeProvider.when("/", {
        controller: "HomeController",
        templateUrl: "componets/home.html"
    }).when("/processos", {
        templateUrl: "componets/processos/processos.html"    
    }).when("/audiencias", {
        templateUrl: "componets/audiencias/audiencias.html"
    }).when("/relatorios", {
        templateUrl: "componets/relatorios/relatorios.html"    
    }).when("/usuarios", {
        templateUrl: "componets/usuarios/usuarios.html"
    }).otherwise({
        redirectTo: '/'
    });

// 	Set theme

    $mdThemingProvider.definePalette('jovas', {
    '50': '#43526A',
    '100': '#f2f9fe',
    '200': '#bde1fc',
    '300': '#79c3f8',
    '400': '#5cb6f7',
    '500': '#43526A',
    '600': '#00CEC4',
    '700': '#0c8eeb',
    '800': '#0b7ccd',
    '900': '#096bb0',
    'A100': '#ffffff',
    'A200': '#f2f9fe',
    'A400': '#5cb6f7',
    'A700': '#0c8eeb',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300 A100 A200 A400'
	});
	$mdThemingProvider.theme('default')
                    .primaryPalette('jovas');
});

// .config(function ($mdThemingProvider) {
//   $mdThemingProvider.theme("default").primaryColor("blue").accentColor("red");
// });

