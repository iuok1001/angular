var app = angular.module('ngFunction',[]);
app.controller('MyCtrl', function () {
    var vm = this;
    //监听页面上的姓名，并改变
    //Deprecated: (since 1.5.0) (to be removed in 1.7.0)
    //Use String.prototype.toLowerCase instead.
    vm.toLowercase = function () {
        vm.lowerName = angular.lowercase(vm.name);
        vm.prototypeName = vm.name.toLowerCase();
    };

});

