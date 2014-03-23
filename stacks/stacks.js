console.log("initializing stacks module ...");

var Stacks = angular.module('mbd.stacks', ['ngResource']);
    
// stack container

Stacks.controller('stackContainer', ['$scope', function($scope) {
	console.log('-> stackContainer'); // TESTING
	$scope.stacks = {};
}]);

// stack view controllers

Stacks.controller('stackController', ['$scope', function($scope) {
	console.log('-> stackController'); // TESTING
}]);

// stack view

Stacks.directive('mbdStack', [function() {
	console.log('-> mbdStack');
	return {
		restrict: 'E',
		require: '^stackContainer',
		scope: {},
		replace: true,
		template: function(tElement, tAttrs) {
			return '<div ng-controller="cardContainer"><div ng-view></div></div>';
		},
		link: function(iElement, iAttrs, controller) {
			console.log("-> mbdStack.link"); // TESTING
		}
	};
}]);

// card container

Stacks.controller('cardContainer', ['$scope', function($scope) {
	console.log('-> cardContainer'); // TESTING
	$scope.cards = [];
}]);

// card view controllers

Stacks.controller('cardController', ['$scope', function($scope) {
	console.log('-> cardController'); // TESTING
}]);

Stacks.controller('stackListController', ['$scope', function($scope) {
	console.log('-> stackListController'); // TESTING
}]);

Stacks.controller('cardListController', ['$scope', function($scope) {
	console.log('-> cardListController'); // TESTING
}]);

// card view

Stacks.directive('mbdCard', [function() {
	console.log('-> mbdCard');
	return {
		restrict: 'E',
		require: '^cardContainer',
		scope: {},
		replace: true,
		transclude: true,
		template: function(tElement, tAttrs) {
			return '<div ng-transclude></div>';
		},
		link: function(iElement, iAttrs, controller) {
			console.log("-> mbdCard.link"); // TESTING
		}
	};
}]);