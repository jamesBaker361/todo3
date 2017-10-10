angular.module('taskInput', []).directive('jamTaskInput',function(){ 
	return{
		templateUrl: 'angular/taskInput/taskInput.template.html',
		controller: TaskInputController
	}
})
