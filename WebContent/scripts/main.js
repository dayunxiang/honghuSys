
require.config({
	urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        'angular': '../lib/angular/angular',
        'angular-route': '../lib/angular-route/angular-route',
        'domReady': '../lib/requirejs-domready/domReady',
        'jquery': '../lib/jquery/jquery.min',
        'highcharts': '../lib/highcharts/highcharts',
        'ol': '../lib/ol/ol',
        'BootStrap': '../lib/bootstrap/js/bootstrap.min',
        //'layer': '../lib/layer/layer',
        //'easyui': '../lib/easyui/jquery.easyui.min',
        'table': '../lib/bootstrap-table/bootstrap-table',
        'angular-animate': '../lib/angular-animate/angular-animate',
        'UIBootstrap': '../lib/UIBootstrap/ui-bootstrap-custom-tpls-1.1.2',
        
        'app': './app'


    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-animate':{
            deps: ['angular']
        },
        'BootStrap': {
            deps: ['jquery']
        },
        'table':{
        	deps:['jquery','BootStrap']
        },
        'UIBootstrap': {
            deps: ['angular', 'angular-animate']
        }
        //'easyui': {
        //    deps: ['jquery']
        //}
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});

require( [ 
	    'app',
	    // 
	    'bootstrap',
	    // 
	    'controllers/controllers', 
	    'services/services',
		'directives/directives', 
		'filters/filters' ], 
	function(app) {
		'use strict';
		app.app.config(['$routeProvider', function ($routeProvider,$locationProvider) {
//			$locationProvider.html5Mode(true); 
		    $routeProvider.when('/map', {
		        templateUrl: 'views/map.html',
		        controller: 'loadMapController'
		    });

		    $routeProvider.when('/login', {
		        templateUrl: 'views/login.html',
		        controller: 'loginController'
		    });

		    $routeProvider.when('/excel', {
		        templateUrl: 'views/excel.html',
                controller:'excelController'
		    })

		    $routeProvider.otherwise({
		        redirectTo: '/map'
		    });
		}]);

	}
);