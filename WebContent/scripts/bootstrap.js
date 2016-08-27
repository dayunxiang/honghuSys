/**
 * bootstraps angular onto the window.document node NOTE: the ng-app attribute
 * should not be on the index.html when using ng.bootstrap
 */
//
define([ 'angular', 'domReady', 'app' ], function(angular, domReady) {
	require([ 'domReady!' ], function(document) {
		angular.bootstrap(document, [ 'app' ]);
	});
});
