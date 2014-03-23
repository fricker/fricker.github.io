console.log("initializing stacks lib ...");

var Stacks = angular.module('mbd.stacks', []);
    
Stacks.controller('stackController', [function() {
	console.log('-> stackController');
}]);

Stacks.controller('cardController', [function() {
	console.log('-> cardController');
}]);

Stacks.controller('stackListController', [function() {
	console.log('-> stackListController');
}]);

Stacks.controller('cardListController', [function() {
	console.log('-> cardListController');
}]);