var app=angular.module('toDoList',['list','ngRoute','taskInput','checkBox'])

app.controller('toDoList',['$scope','$location','$rootScope','$http',function($scope,$location,$rootScope,$http){

}]);
/*
app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'angular/list/list.template.html',
		controller:ListController
	})
})


app.directive('jamList',function(){
	return{
		//templateUrl: 'angular/list/list.template.html',
		template:"blaxe it faggggot",
		controller: ListController
	}
})
*/