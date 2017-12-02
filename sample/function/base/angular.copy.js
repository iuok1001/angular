var app = angular.module('ngFunction', []);
app.controller('MyCtrl', function () {
    var vm = this;
    vm.toCopy = function () {
        var a = {
            name: 'bijian',
            address: 'shenzhen',
            family: {
                num: 6,
                amount: '80W'
            }
        };
        var b = {};

        var r = angular.copy(a, b);
        console.log('a:' + JSON.stringify(a));
        console.log('b:' + JSON.stringify(b));
        console.log('r:' + JSON.stringify(r));

        a.address = 'hanzhou';
        a.family.amount = '190W';
        console.log('a:' + JSON.stringify(a));
        console.log('b:' + JSON.stringify(b));
        console.log('r:' + JSON.stringify(r));
    };
});