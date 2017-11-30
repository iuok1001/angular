var app = angular.module('ngFunction',[]);
app.controller('MyCtrl', function () {
    var vm = this;
    var values = {name: 'misko', gender: 'male'};
    var test = [{name: 'misko', gender: 'male'},{name: 'misko2', gender: 'male2'}];
    var log = [];
    vm.toForEach = function () {
        angular.forEach(values, function(value, key) {
            this.push(key + ': ' + value);
        }, log);
        //expect(log).toEqual(['name: misko', 'gender: male']);
        console.log(log);
        console.log(values);

        angular.forEach(test,function (item) {
           console.log(item.gender);
        });
    };

});