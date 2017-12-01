var app = angular.module('ngFunction', []);
app.controller('MyCtrl', function () {
    var vm = this;
    vm.toNoop = function () {
        var _console = function (v) {
            return v * 2;
        };
        var getResult = function (fn, val) {
            return (fn || angular.noop)(val);
        };
        var firstResult = getResult(_console, 3);//6
        console.log(firstResult);
        var secondResult = getResult(null, 3);//undefined
        console.log(secondResult);
        var thirdResult = getResult(undefined, 3);// undefined
        console.log(thirdResult);
        var fourthResult = getResult(_console, undefined);// NaN
        console.log(fourthResult);
    };
});