var app = angular.module('ngFunction', []);
app.controller('MyCtrl', function () {
    var vm = this;
    vm.toExtend1 = function () {
        var a = {
            name: 'bijian',
            address: 'shenzhen',
            family: {
                num: 6,
                amount: '80W'
            }
        };
        var b = {};

        var r = angular.extend(b, a);
        console.log('a:' + JSON.stringify(a));
        console.log('b:' + JSON.stringify(b));
        console.log('r:' + JSON.stringify(r));

        a.address = 'hanzhou';
        a.family.amount = '190W';
        console.log('a:' + JSON.stringify(a));
        console.log('b:' + JSON.stringify(b));
        console.log('r:' + JSON.stringify(r));
    };

    vm.toExtend2 = function () {
        var a = {
            name: 'bijian',
            address: 'shenzhen',
            family: {
                num: 6,
                amount: '80W'
            }
        };
        var z = {
            family: {
                amount: '150W',
                mainSource: '经营公司'
            }
        };
        var b = {};

        var r = angular.extend(b, a, z);
        console.log('a:' + JSON.stringify(a));
        console.log('b:' + JSON.stringify(b));
        console.log('r:' + JSON.stringify(r));
        b.address = 'hanzhou';
        b.family.amount = '180W';
        console.log('a:' + JSON.stringify(a));
        console.log('b:' + JSON.stringify(b));
        console.log('r:' + JSON.stringify(r));
    };

});