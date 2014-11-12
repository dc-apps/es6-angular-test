'use strict';
// IMPORTS
// Shared
import {DefaultCtrl} from 'components';

// view1
import {View1Ctrl} from 'view1/view1';

// App dependencies
angular.module('myApp', [
  'ngRoute'
]).

/* Wire up factories like this
factory('MyFactory', nameOfImportedFactory).
*/

// Routing
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'view1/view1.html',
		controller: View1Ctrl,
		controllerAs: 'view1'
	}).
	otherwise({redirectTo: '/view1'});
}]);