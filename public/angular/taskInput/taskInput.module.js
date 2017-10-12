angular.module('taskInput', []).directive('jamTaskInput',function(){ 
	return{
		require: 'ngModel',
		templateUrl: 'angular/taskInput/taskInput.template.html',
		controller: TaskInputController
	}
})
