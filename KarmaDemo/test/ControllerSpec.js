/**
 * Created by TommyChen on 4/11/2016.
 */

"use strict";

describe("GundamApp Controller", function () {
    
    beforeEach(module('GundamApp'));
    describe("dashboardCtrl", function () {
        it("should have $scope.getdata() to get data from Gundam service", function () {
            var gundamService = {                
                data: [1,2,3]
            };
            var scope;
            inject(function ($rootScope, $controller) {
                //inject controller
                scope = $rootScope.$new();
                $controller("dashboardCtrl", { $scope: scope, Gundam: gundamService });
                
            });
          

            scope.getdata();
          
            expect(scope.selected).toEqual([1, 2, 3]);
 
        });
    });
    describe("listCtrl", function () {


        var mockSearchFilter = function (array, expression, comparator) { //mocking $filter('filter')
            return [1];


        };
        beforeEach(function () {
            module(function ($provide) {
                $provide.value('filterFilter', mockSearchFilter);
            });
        });


        var scope, ctrl,Gundamrepo,location,filter;

            beforeEach(inject(function( $rootScope, $controller,$location,$filter) {

            Gundamrepo={
                get: function(id){

                },
                query:function(){

                }
            };
            spyOn(Gundamrepo, 'query').and.returnValue([{ name: '1', _id: '1' }, { name: '2', _id: '2' }]);
            filter = $filter;
            location = $location;
           
            scope = $rootScope.$new();
            ctrl = $controller('listCtrl', { $scope: scope, GundamRepo: Gundamrepo,filter:$filter });
           
        }));

        it("check scope.content has been correctly initialized",function(){
            expect(scope.content).toEqual('blahblah');

        });

        it("$scope.gundams should contains data from Repository", function () {


            // expect(typeof scope.gundams).toEqual('object');
            expect(scope.gundams[1]._id).toEqual('2');
            expect(scope.gundams[0].name).toEqual('1');
            expect(Gundamrepo.query).toHaveBeenCalled();

        });
        it("should $scope.redirect() redirect to right url ", function () {
            
            var url = '/somepage';
            
            spyOn(location, 'path');
            scope.redirect(url);
            expect(location.path).toHaveBeenCalledWith(url);

        });
        it("should $scope.goto() redirecto to right url", inject(function () {
            var id = 1;
            
            spyOn(location, 'path');
            

            scope.gundams = [{ name: '1', _id: '1' }, { name: '2', _id: '2' }];
            scope.goto(1);
            
            
            expect(location.path).toHaveBeenCalledWith("/gundam/"+id);
           
        }));

        it("should be able to change $scope.content through $scope.change()", function () {
            var str = "changed";

            scope.change(str);
            expect(scope.content).toEqual("changed");
        });
    });

});