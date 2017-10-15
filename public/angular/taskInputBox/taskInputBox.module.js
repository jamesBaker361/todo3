angular.module('taskInputBox', []).directive('jamTaskInputBox',function(){ 
	return{
		templateUrl: 'angular/taskInputBox/taskInputBox.template.html',
		controller: TaskInputBoxController
	}
})
