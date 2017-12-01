var app = angular.module('ngFunction', []);
app.controller('MyCtrl', function () {
    var vm = this;
    vm.toIdentity = function () {
        var _console = function (v) {
            return v * 2;
        };
        var getResult = function (fn, val) {
            return (fn || angular.identity)(val);
        };
        //等同于如下写法
        /*function getResult(fn, input) {
            if(angular.isFunction(fn)){
                return input;
            }
            return fn(input);
        };*/
        var firstResult = getResult(_console, 3);//6
        console.log(firstResult);
        var secondResult = getResult(null, 3);//undefined
        console.log(secondResult);
        var thirdResult = getResult(undefined, 3);// undefined
        console.log(thirdResult);
        var fourthResult = getResult(function(n) { return n * 3; }, 3);// 9
        console.log(fourthResult);
    };
});