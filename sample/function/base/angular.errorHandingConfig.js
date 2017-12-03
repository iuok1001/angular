var app = angular.module('ngFunction', []);
app.controller('MyCtrl', function () {
    var vm = this;
    vm.toErrorHandlingConfig = function () {
        var obj = { name: "Any" ,id: "d123"};
        angular.errorHandlingConfig([config]);
        console.log(obj);
    };
});