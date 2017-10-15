function ListController($scope,$http){
	$scope.tasks=[
	/*
		{done:false,today:true,description:"anal",microTasks:[],layer:0},
		{done:false,today:true,description:"oral",microTasks:[],layer:0},
		{done:false,today:true,description:"vaginal",microTasks:[],layer:0},
		{done:false,today:true,description:"earlobe",microTasks:[],layer:0}
		*/

	],
	$scope.getTasks=function(){
		/*
		console.log('tasks be gottens');
		$http.post('/task',{}).then(function(response){
			console.log(response);
			$scope.tasks=response.data;
		},function(failure){
			console.log("something went wrong! statusText: "+failure.statusText);
			console.log(failure);
		});
		*/
	}
}