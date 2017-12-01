var app = angular.module('ngFunction', []);
app.controller('MyCtrl', function () {
    var vm = this;

    vm.toIsUndefined = function () {
        var test1 = 2;
        var test2 = 'undefined';
        var test3 = null;
        var test4 = undefined;
        var firstResult = angular.isUndefined(test1);
        console.log(firstResult);
        var secondResult = angular.isUndefined(test2);
        console.log(secondResult);
        var thirdResult = angular.isUndefined(test3);//false
        console.log(thirdResult);
        var fourthResult = angular.isUndefined(test4);
        console.log(fourthResult);
    };

    vm.toIsDefined = function () {
        var test1 = 2;
        var test2 = 'undefined';
        var test3 = null;
        var test4 = undefined;
        var firstResult = angular.isDefined(test1);
        console.log(firstResult);
        var secondResult = angular.isDefined(test2);
        console.log(secondResult);
        var thirdResult = angular.isDefined(test3);//true
        console.log(thirdResult);
        var fourthResult = angular.isDefined(test4);
        console.log(fourthResult);
    };

    vm.toIsObject = function () {
        var test1 = 2;
        var test2 = 'undefined';
        var test3 = null;
        var test4 = new Date();
        var test5 = undefined;
        var firstResult = angular.isObject(test1);
        console.log(firstResult);
        var secondResult = angular.isObject(test2);
        console.log(secondResult);
        var thirdResult = angular.isObject(test3);
        console.log(thirdResult);
        var fourthResult = angular.isObject(test4);
        console.log(fourthResult);
        var fifthResult = angular.isObject(test5);
        console.log(fifthResult);
    };

    vm.toIsString = function () {
        var test1 = 2;
        var test2 = 'undefined';
        var test3 = null;
        var test4 = new Date();
        var test5 = 'hello, world';
        var firstResult = angular.isString(test1);
        console.log(firstResult);
        var secondResult = angular.isString(test2);
        console.log(secondResult);
        var thirdResult = angular.isString(test3);
        console.log(thirdResult);
        var fourthResult = angular.isString(test4);
        console.log(fourthResult);
        var fifthResult = angular.isString(test5);
        console.log(fifthResult);
    };

    vm.toIsNumber = function () {
        var test1 = 2;
        var test2 = 'undefined';
        var test3 = null;
        var test4 = new Date();
        var test5 = 'hello, world';
        var firstResult = angular.isNumber(test1);
        console.log(firstResult);
        var secondResult = angular.isNumber(test2);
        console.log(secondResult);
        var thirdResult = angular.isNumber(test3);
        console.log(thirdResult);
        var fourthResult = angular.isNumber(test4);
        console.log(fourthResult);
        var fifthResult = angular.isNumber(test5);
        console.log(fifthResult);
    };

    vm.toIsDate = function () {
        var test1 = 2;
        var test2 = 'undefined';
        var test3 = null;
        var test4 = new Date();
        var test5 = '2017-12-1 09:02:46';
        var firstResult = angular.isDate(test1);
        console.log(firstResult);
        var secondResult = angular.isDate(test2);
        console.log(secondResult);
        var thirdResult = angular.isDate(test3);
        console.log(thirdResult);
        var fourthResult = angular.isDate(test4);
        console.log(fourthResult);
        var fifthResult = angular.isDate(test5);
        console.log(fifthResult);
    };

    vm.toIsArray = function () {
        var test1 = 2;
        var test2 = 'undefined';
        var test3 = null;
        var test4 = new Date();
        var test5 = 'hello, world';
        var test6 = [{'id':'123', 'name':'zhangsan', 'age':5}];
        var firstResult = angular.isArray(test1);
        console.log(firstResult);
        var secondResult = angular.isArray(test2);
        console.log(secondResult);
        var thirdResult = angular.isArray(test3);
        console.log(thirdResult);
        var fourthResult = angular.isArray(test4);
        console.log(fourthResult);
        var fifthResult = angular.isArray(test5);
        console.log(fifthResult);
        var sixthResult = angular.isArray(test6);
        console.log(sixthResult);
    };

    vm.toIsFunction = function () {
        var _console = function (v) {
            return v * 2;
        };
        var getResult = function (fn, val) {
            return (fn || angular.noop)(val);
        };
        var firstResult = getResult(angular.isFunction, _console);//6
        console.log(firstResult);
    };

    vm.toIsElement = function () {
        var test1 = 2;
        var test2 = 'undefined';
        var test3 = null;
        var test4 = new Date();
        var test5 = 'hello, world';
        var test6 = [{'id':'123', 'name':'zhangsan', 'age':5}];
        var test7 = document.getElementById("isDiv");
        var firstResult = angular.isElement(test1);
        console.log(firstResult);
        var secondResult = angular.isElement(test2);
        console.log(secondResult);
        var thirdResult = angular.isElement(test3);
        console.log(thirdResult);
        var fourthResult = angular.isElement(test4);
        console.log(fourthResult);
        var fifthResult = angular.isElement(test5);
        console.log(fifthResult);
        var sixthResult = angular.isElement(test6);
        console.log(sixthResult);
        var seventhResult = angular.isElement(test7);
        console.log(seventhResult);
    };
});