var app = angular.module('ngFunction', []);
app.controller('MyCtrl', function () {
    var vm = this;
    vm.toJson = function () {
        var obj = { name: "Any" ,$$id: "d123"};
        console.log(angular.toJson(obj));
        console.log(angular.toJson(obj,true));
    };
});