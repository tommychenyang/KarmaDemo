/**
 * Created by TommyChen on 4/8/2016.
 */
var services= angular.module('Service',['ngResource']);

services.factory('GundamRepo',['$resource',function($resource){

    return $resource('api/gundam/:id',{},{

        query:{method:'GET',isArray:true},
        get:{method:'GET',params:{id:''}}
    });
}]);
services.factory('Gundam',function(){
   var factory={};
    factory.data={id:'',name:'',year:''};
    factory.set=function(d){
        this.data=d;
    };
    return factory;

});
services.factory('$exceptionHandler',['$injector', function($injector) {
    return function(exception, cause) {
        exception.message += ' (caused by "' + cause + '")';
        throw exception;
    };
}]);