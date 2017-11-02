function ListController($scope,$http,$element,$compile,$injector){
	$scope.tasks=[],
	/*$scope.mapTasks=function(){
		//make a new lil directive for this with its own methods to update tasks and shit
	},
	$scope.oneTask=function(t){
		return(t);
	},
	$scope.getTasks2=function(){
		//console.log(JSON.parse(JSON.stringify($http.post('/tasks',{}).$$state)));
	},
	$scope.getTasks=function(){
		console.log("getTasks");
		if(untasked){
			/*
			future james: make an event listener that changes untasked to true when new tasks are submitted
			
		$http.post('/tasks',{}).then(function(response){
			console.log(response);
			$scope.tasks=response.data;
			untasked=false;
		},function(failure){
			console.log("something went wrong! statusText: "+failure.statusText);
			console.log(failure);
			untasked=false;
		});
		}
	}; */
	$scope.getTasks=function(){
	$http.post('/tasks',{}).then(function(response){
			console.log(response);
			$scope.tasks=response.data;
			untasked=false;
			$scope.fuckDirectives();
		},function(failure){
			console.log("something went wrong! statusText: "+failure.statusText);
			console.log(failure);
			untasked=false;
		});
},
$scope.taskDone=function(id){
	console.log("ayyy");
	console.log(id);
},
$scope.fuckDirectives=function(){
for(var h=0;h<$scope.tasks.length;h++){
	var temp=angular.element("<div><button class=doneButton id=doneButton"+$scope.tasks[h].id+" ng-click=taskDone("+5+") ></button><button class=laterButton id=laterButton"+$scope.tasks[h].id+" ></button></div>");
	temp.attr({
		class:"checkBox layer"+$scope.tasks[h].layer+" index"+$scope.tasks[h].index,
		id:"list"+$scope.tasks[h].id
	});
	$element.append(temp);
	var $injector = angular.injector(['ng']);
	var scope = angular.element(temp).scope();
	$compile(temp)(scope);
	$injector.invoke(["$compile", "$rootScope", function($compile, $rootScope){
    var $scope = scope;
    $compile(temp.contents())($scope);
    //$scope.$digest(); 
}]);
}
};
$scope.getTasks();
}