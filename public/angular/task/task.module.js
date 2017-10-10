angular.module('task', []).directive('jamTask',function(){ 
	return{
		templateUrl: 'angular/task/task.template.html',
		controller: TaskController
	}
})
