/**
 * Created by TommyChen on 4/11/2016.
 */

"use strict";

describe("GundamApp Controller", function () {

    beforeEach(module('GundamApp'));

    describe("listCtrl",function(){

        var scope, ctrl,Gundamrepo;

            beforeEach(inject(function( $rootScope, $controller) {

            Gundamrepo={
                get: function(id){

                },
                query:function(){

                }
            };
                spyOn(Gundamrepo, 'query').and.returnValue(123);
            scope = $rootScope.$new();
            ctrl = $controller('listCtrl', {$scope: scope,GundamRepo:Gundamrepo});
        }));

        it("check scope.content initialization",function(){
            expect(scope.content).toEqual('blahblah');

        });

        it("should get data when service called",function(){


           expect(typeof scope.gundams).toEqual('number');
           expect(Gundamrepo.query).toHaveBeenCalled();

        })
    });

});