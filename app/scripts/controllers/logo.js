'use strict';

angular.module('loremImageLogoApp')
  .controller('LogoCtrl', ['$scope', '$timeout', '$safeApply', '_', function ($scope, $timeout, $safeApply, _) {


    // $scope.loadingState = true;
    // $timeout(function() {
    //   $scope.loadingState = false;
    // }, 1000);

    $scope.sections = ['No Section'].concat('abstract animals business cats city food nightlife fashion people nature sports technics transport'.split(' ').sort())
      .map(function(section) {
        return {
          label: section,
          value: section === 'No Section' ? null : section
        };
      });

    $scope.imageParams = {
      width: 150,
      height: 150,
      grayscale: false,
      section: $scope.sections[0]
    };

    $scope.paramsToUrl = function() {
      var imageUrl = 'http://lorempixel.com';

      if($scope.imageParams.grayscale) {
        imageUrl += '/g';
      }

      imageUrl += '/' + $scope.imageParams.width + '/' + $scope.imageParams.height;

      if($scope.imageParams.section && $scope.imageParams.section.value) {
        imageUrl += '/' + $scope.imageParams.section.value;

        if($scope.imageParams.index) {
          imageUrl += '/' + $scope.imageParams.index;
        } else if($scope.imageParams.text) {
          imageUrl += '/' + encodeURIComponent($scope.imageParams.text);
        }
      }

      $scope.imageUrl = imageUrl;
    };

    $scope.getUncachedImageUrl = function(cacheToken) {
      return $scope.imageUrl + '?no-cache=' + cacheToken;//(cacheToken || ((+ new Date) + '_' + Math.random()));
    };

    $scope.$watch('imageParams', _.throttle(function() {
      $scope.paramsToUrl();
      $safeApply();
    }, 100, true) , true);
  }]);
