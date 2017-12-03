var app = angular.module('ngFunction', []);
app.controller('MyCtrl', function () {
    var vm = this;
    vm.toElement = function () {
        var element = angular.element(document.getElementsByName('myDiv')[0]);
        console.log(element);
    };
});