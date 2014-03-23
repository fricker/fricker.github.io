'use strict';

console.log("initializing stacks lib ...");

var MBD.Stacks = angular.module('mbd.stacks', []);
    
MBD.Stacks.controller('stackController', [function() {
	console.log('-> stackController');
}]);

MBD.Stacks.controller('cardController', [function() {
	console.log('-> cardController');
}]);

MBD.Stacks.controller('stackListController', [function() {
	console.log('-> stackListController');
}]);

MBD.Stacks.controller('cardListController', [function() {
	console.log('-> cardListController');
}]);