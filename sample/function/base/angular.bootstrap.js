var app = angular.module('ngFunction', []);
app.controller('MyCtrl', function ($scope) {
    var vm = this;
    $scope.name = "hello,World!";
    vm.name2 = "hello,World222!";
});
var app2 = angular.module('ngFunction2', []);
app2.controller('MyCtrl2', function ($scope) {
    var vm = this;
    $scope.name = "222hello,World!";
    vm.name2 = "222hello,World222!";
});
angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById('div1'), ['ngFunction']);
    angular.bootstrap(document.getElementById('div2'), ['ngFunction2']);
});