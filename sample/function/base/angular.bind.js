var app = angular.module('ngFunction', []);
app.controller('MyCtrl', function () {
    var vm = this;
    vm.toBind = function () {
        var obj = { name: "Any" };
        var fn = function (Adj) {
            console.log(this.name + "is a boy!!! And he is " + Adj + " !!!");
        };
        var f = angular.bind(obj, fn, "handsome");
        f();//Any is a boy!!! And he is handsome!!!
        var t = angular.bind(obj, fn);
        t("ugly");// Any is a boy!!! And he is ugly!!!
    };
});