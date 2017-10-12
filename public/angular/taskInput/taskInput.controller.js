function TaskInputController($scope,$http){
	$scope.task={done:false,today:true,description:"",microTasks:[],layer:0,child:false},
	sendTasks=[],
	currentLayer=0,
	currentTask=0,
	pressedEnter=false,
	pressedSpaceOnce=false,
	pressedSpaceTwice=false,
	colors=["#8ca9d8","#dc9ee2","#a2e29e"],
	$scope.change,
	$scope.pressEnter=function(){
		if(pressedEnter&&pressedSpaceTwice){
			currentLayer++;
		}
	},
	$scope.newInputText=function(){
		var input="<br><input type=\"text\" class=\"taskInputText\" id=\"newText\" >";
		//$("#taskInputForm").append(input);
		$(":focus").after(input);
		$("#newText").focus().select();
	},
	$scope.inputTextClick=function(){
		var focus=$(":focus");
		if(focus.attr("layer")){
			currentLayer=focus.attr("layer");
			currentTask=focus.attr("task");
		}

	},
	$scope.newTask=function(){
		console.log()
		var idNew="L"+currentLayer.toString()+"T"+currentTask.toString();
		pressedEnter=false;
		pressedSpaceTwice=false;
		pressedSpaceOnce=false;
		color=colors[currentTask%3];
		$("#newText").attr({
			class: "taskInputText layer"+currentLayer.toString()+" task"+currentTask.toString(),
			id: idNew,
			layer: currentLayer,
			name:"L"+currentLayer.toString()+"T"+currentTask.toString(),
			task: currentTask
		}).css({
			"margin-left": (5*currentLayer).toString()+"vw",
			"background-color":color
		});
		//$(".taskInputText").removeAttr("autofocus selected");
		//var input="<input type=\"text\" class=\"taskInputText layer"+currentLayer.toString()+"\"  id=\"L"+currentLayer.toString()+"T"+currentTask.toString()+"\"  name=\"L"+currentLayer.toString()+"T"+currentTask.toString()+"\" layer="+currentLayer+" task="+currentTask+" ><br>";
		//autofocus=\"autofocus\" onfocus=\"this.select()\"
		//onLoad=\"console.log(45);this.focus();this.selct()\"
		//$("#taskInputForm").append(input);
		$('#'+idNew).focus().select();
	}
	$scope.keyPressed=function(e){
		switch(e.originalEvent.key){
			case("Enter"):
				if(pressedEnter){
					//nothing should happen?
				}else{
					$scope.newInputText();
					pressedEnter=true;
				}
				break;
			case(" "):
				if(pressedEnter&&(!pressedSpaceOnce)){
					pressedSpaceOnce=true;
				}
				if(pressedEnter&&(pressedSpaceOnce)&&(!pressedSpaceTwice)){
					pressedSpaceTwice=true;
					//$scope.newTask();
					//should starts a new subtask
				}
				if(pressedSpaceTwice&&pressedSpaceOnce){
					currentLayer++;
					$scope.newTask();
					//should start a new subtask
				}
				break;
			case("Backspace"):
				if(pressedEnter){
					currentLayer--;
				}
				if(currentLayer<0){
					currentLayer=0;
				}
				break;
			default:
				console.log(e);
				if(pressedEnter){
					if(pressedSpaceTwice){
						currentLayer++;
						pressedSpaceTwice=false;
						pressedSpaceOnce=false;
						$scope.newTask();
						//this makes a subtask
					}else{
						currentTask++;
						pressedEnter=false;
						//this makes a new task
						$scope.newTask();
					}
				}else{

				}
		}
		/*
		console.log(e.originalEvent.key);
		console.log("pressedEnter",pressedEnter);
		console.log("currentLayer",currentLayer);
		console.log("currentTask",currentTask);
		console.log("pressedSpaceTwice",pressedSpaceTwice);
		console.log("pressedSpaceOnce",pressedSpaceOnce);
		*/
	}
	$scope.submitTask=function(){
		$http.patch('/task',$scope.task);
	},
	$scope.makeMicroTask=function(desc){
		$scope.task.microTasks.push(
			{
				description: desc,
				today:true,
				done:false,
				microTasks:[],
				layer:$scope.task.layer+1,
				child:true
			}
		)
	},
	$scope.buttonClick=function(){
		console.log('clique');
		console.log($(".taskInputText"));

		freshTasks=$(".layer0");
		for(var c=0;c<freshTasks.length;c++){
			//if()
			junk={
				//description:freshTasks[c].html(),
				
			}
		}
	}
}
