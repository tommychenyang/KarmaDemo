/**
 * Created by TommyChen on 4/8/2016.
 */
var controllers=angular.module('Controller',[]);
controllers.controller('listCtrl',['$scope','GundamRepo','Gundam','$location','$filter',function($scope,GundamRepo,Gundam,$location,$filter){
    $scope.content="blahblah";
    $scope.gundams=GundamRepo.query();
 
    $scope.goto=function(id){

        var selected=$filter('filter')($scope.gundams,{_id:id},true);

        if(selected.length>0)
        {
            Gundam.set( selected[0]);
            $location.path('/gundam/'+id);
        }
        else {
           // throw new MyException("no data selected");
            console.log("data error");
        }
    };
}])
.controller('dashboardCtrl',['$scope','GundamRepo','Gundam',function($scope,GundamRepo,Gundam){
        $scope.getdata=function(){
            $scope.selected=Gundam.data;

        };

    }])
.controller('gundamCtrl',['$scope','Gundam','$uibModal','$log',function($scope,Gundam,$uibModal,$log){
        $scope.Editing={
            name:Gundam.data.name,
            year:Gundam.data.year
        };

        $scope.name=Gundam.data.name;
        $scope.open=function(){
            var modalinstance=$uibModal.open({

                animation:true,
                templateUrl:'partial/modal.html',
                controller:'modalCtrl',
                resolve: {
                    Editing: function () {
                        return $scope.Editing;
                    }
                }
            });
            modalinstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

    }])
.controller('modalCtrl',function($scope, $uibModalInstance, Editing){
        $scope.year=Editing.year;
        $scope.name=Editing.name;
    });