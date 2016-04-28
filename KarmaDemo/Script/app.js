/**
 * Created by TommyChen on 4/8/2016.
 */

angular.module('GundamApp',['ngRoute','Controller','Directive','Service','Filter','ui.bootstrap'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'partial/dashboard.html',
        controller:'dashboardCtrl'
    })
        .when('/list',{
            templateUrl:'partial/gundam-list.html',
            controller:'listCtrl'
        })
        .when('/gundam/:id',{
            templateUrl:'partial/gundam-view.html',
            controller:'gundamCtrl'
        })
        .otherwise({redirectTo:'/'});

    }]);
/*.run('MyException',function(){
        function MyException(message) {
            this.name = 'MyException';
            this.message= message;
        }
        MyException.prototype = new Error();
        MyException.prototype.constructor = MyException;
    });*/