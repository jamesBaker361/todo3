function TaskInputController($scope,$http,$compile){
	$scope.tree=new Tree("root"),
	parentNode=$scope.tree._root,
	currentLayer=0,
	currentNode={},
	pressedEnter=false,
	pressedSpaceOnce=false,
	pressedSpaceTwice=false,
	colors=["#8ca9d8","#dc9ee2","#a2e29e"],
	$scope.begin=function(){
		$scope.tree._root.id="treeroot";
		$scope.tree._root.model="tree._root";
		currentNode=$scope.tree._root.addChild({description:""});
	},
	$scope.newInputText=function(){
		var input=angular.element("<br><input type=\"text\" class=\"taskInputText\" id=\"newText\" >");
		$(":focus").after(input);
		$("#newText").focus().select();
	},
	$scope.inputTextClick=function(){
		var focus=$(":focus");
		if(focus.attr("ng-model")){
			var newNode="$scope."+(focus.attr("ng-model").substring(0,focus.attr("ng-model").length-17));
			console.log(newNode);
			console.log(eval(newNode));
			currentNode=newNode;
			parentNode=newNode.parent;
			currentLayer=focus.attr("layer");
			console.log(currentLayer);
		}

	},
	$scope.newTask=function(isSubTask){
		if(isSubTask){
			c=currentNode.addChild({description:""});
			currentNode=c;
			parentNode=currentNode.parent;
		}else{
			currentNode=parentNode.addChild({description:""});
		};
		//var idNew;
		pressedEnter=false;
		pressedSpaceTwice=false;
		pressedSpaceOnce=false;
		color=colors[Math.floor(3*Math.random())];
		$("#newText").prev().focus().select();
		$("#newText").remove();
		var input=angular.element("<input type=\"text\" ng-click=\"inputTextClick()\" layer="+currentLayer+" id="+currentNode.id+" class=\"taskInputText ng-pristine ng-valid ng-not-empty ng-touched\" ng-model="+currentNode.model+".data.description"+" >");
		$compile(input)($scope);
		if(parentNode.id=="treeroot"){
			input.appendTo($("#taskInputForm")).focus().select();
		}else{
			console.log($("#"+parentNode.id));
			input.insertAfter($("#"+parentNode.id)).focus().select();
		}
		$("#"+currentNode.id).focus().select()
		.css({
			"margin-left": (5*currentLayer).toString()+"vw",
			"background-color":color
		});
	},
	$scope.keyPressed=function(e){
		//console.log(currentNode);
		switch(e.originalEvent.key){
			case("Enter"):
				if(pressedEnter){

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
					//should starts a new subtask
				}
				if(pressedSpaceTwice&&pressedSpaceOnce){
					currentLayer++;
					$scope.newTask(true);
					
					//should start a new subtask
				}
				break;
			case("Backspace"):
				if(pressedEnter&&(parentNode!=$scope.tree._root)){
					currentNode=parentNode;
					parentNode=currentNode.parent;
					currentLayer--;
						if(currentLayer<0){
							currentLayer=0;
						}
						$scope.newTask();
				}
				break;
			default:
				//console.log(e);
				if(pressedEnter){
					if(pressedSpaceTwice){
						
						//this makes a subtask
					}else{
						//this makes a new task
						$scope.newTask();
					}
				}else{

				}
		}
	}
	$scope.submitTask=function(){
		$http.patch('/task',$scope.tree);
	}
}
