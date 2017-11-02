function CheckBoxController($scope,$http,$element,$rootScope){
	$scope.task={},
	$scope.childrenIndex,
	$scope.markDone=function(){

	},
	$scope.begin=function(){
		var newTask=JSON.parse(JSON.stringify($element.prev("task").html()));
		setTimeout(function(){
		$scope.task=JSON.parse(JSON.stringify($element.prev("task").html()));
		$scope.task.model="nut nut jut";
		console.log($element.prev("task").html());
		console.log(JSON.stringify($element.prev("task").html()));
		console.log(JSON.parse(JSON.stringify($element.prev("task").html())));
		console.log($scope.task);
		console.log($element);
		},100);
	},
	$scope.makeTomorrow=function(){

	};
	//$scope.begin();
//console.log($rootScope);
$rootScope.$watch("tasks",function(newVal,oldVal){
	console.log(newVal);
});
}
