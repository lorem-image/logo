// create factory aliases for any 3rd party component
// in order to make them testable and to use them through angular's DI mechanism
// this also prevents accessing unsafe global variables and please jshint
// @usage:
// angular.module('loremImageLogoApp').controller('someController', function(jQuery) {
//   // use jQuery here, as it's not a global var pinned on the window object
//   // later on, if you want to use jqueryLite instead of jQuery, you could easily modify
// })

(function() {
  'use strict';

  var module = angular.module('loremImageLogoApp'),

      // function that creates a factory returning the actual global variable
      createFactory = function (dependency) {
        module.factory(dependency, ['$window', function ($window) {
          return $window[dependency];
        }]);
      },

      // this is the list of the used js dependencies
      jsDependencies = ['jQuery', '_'];

  // store them as avalue in angular
  // so we can test all th dependencies
  module.value('jsDependencies', jsDependencies);

  // special case for $ jQuery
  module.factory('$', ['$window', function($window) {
    return $window.jQuery;
  }]);

  angular.forEach(jsDependencies, createFactory);
})();
