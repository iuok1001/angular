var app = angular.module('ngFunction', []);
app.controller('MyCtrl', function () {
    var vm = this;
    vm.toReloadWithDebugInfo = function () {
        var obj = { name: "Any" ,id: "d123"};
        angular.reloadWithDebugInfo(true);
        console.log(obj);
    };
});