angular.module('checkBox', []).directive('jamCheckBox',function(){ 
	return{
		templateUrl: 'angular/checkBox/checkBox.template.html',
		require:ListController,
		controller: CheckBoxController,
		scope:{
			childrenIndex: "=childrenIndex"
		},
		link:function(scope,element){
			console.log(scope);
		}
	}
})
