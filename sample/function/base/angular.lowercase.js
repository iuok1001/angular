var app = angular.module('ngFunction',[]);
app.controller('MyCtrl', function ($scope) {
    var vm = this;
    //监听页面上的姓名，并改变
    vm.toLowercase = function () {
        vm.lowerName = angular.lowercase(vm.name);
    };

});

