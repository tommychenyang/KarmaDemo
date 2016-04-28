/**
 * Created by TommyChen on 4/8/2016.
 */
var directives=angular.module('Directive',[]);
directives.directive('gundamBlock',function(){
  return{
      restrict:'EA',
      scope:{
          name:'=',
          year:'='
      },
      link:function(scope,ele,attr){
        ele.bind('click',function(e){
            e.preventDefault();
            event.stopPropagation();
        });
      },
      templateUrl:'partial/GundamBlock.tpl.html'

  };
});