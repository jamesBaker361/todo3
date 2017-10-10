angular.module('list', [])
.directive('jamList',function(){
	return{
		templateUrl: 'angular/list/list.template.html',
		controller: ListController
	}
})
