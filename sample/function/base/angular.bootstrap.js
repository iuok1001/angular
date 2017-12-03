var app = angular.module('ngFunction', []);
app.controller('MyCtrl', function ($scope) {
    $scope.name = "hello,World!";
    $scope.name2 = "hello,World2!";
});

angular.bootstrap(document, ['ngFunction']);