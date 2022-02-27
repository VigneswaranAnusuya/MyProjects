	var myToDoList = [
		{
			id:1,
			title:"mom  ",
			description:"take her to hospital",
			isImportant:true,
			isComplete:false
		},
		{
			id:2,
			title:"dad",
			description:"take him to hospital",
			isImportant:false,
			isComplete:false
		}
	];
	
	//add new todo
	var addNewTodo = function(titl,desc){
		
		var idd = myToDoList.length == 0 ? 1 : myToDoList[myToDoList.length-1].id+1;
		
		myToDoList.push({
		
			id:idd,
			title:titl,
			description:desc,
			isImportant : false,
			isComplete : false
		});
		constructToDo();
	};
	
	//delete todo
	var deleteToDo = function(idd){
		for(var i=0;i<myToDoList.length;i++){
			if(myToDoList[i].id == idd){
				myToDoList.splice(i,1);
				break;
			}
		}
	};
	
	//reading
	var readAllTodo = function(){
		return myToDoList;
	};

	//taking specific todo
	var takeTodo=function(idd){
		for(var i=0;i<myToDoList.length;i++){
			if(myToDoList[i].id == idd){
				return myToDoList[i];
			}
		}
	};
	
	//updatig todo
	var updateToDo= function(idd,titl,desc){
		for(var i=0;i<myToDoList.length;i++){
			if(myToDoList[i].id == idd){
				myToDoList[i].title=titl;
				myToDoList[i].description=desc;
			}
		}
	}

	//updating completion
	var isTodoComplete = function(idd){
		for(var i=0;i<myToDoList.length;i++){
			if(myToDoList[i].id == idd){
				myToDoList[i].isComplete = !myToDoList[i].isComplete;
				break;
			}
		}
	};
	
	//add important
	var isImportantToDo = function(idd){
		for(var i=0;i<myToDoList.length;i++){
			if(myToDoList[i].id == idd){
				myToDoList[i].isImportant = !(myToDoList[i].isImportant);
				break;
			}
		}
	};

	//gets all important todo's
	var importantToDo =function(){
		var arr=[];
		for(var i=0;i<myToDoList.length;i++){
			if(myToDoList[i].isImportant){
				arr.push(myToDoList[i]);
			}
		}
		return arr;
	}

	//gets all competed todo's
	var completedToDo=function(){
		var arr=[];
		for(var i=0;i<myToDoList.length;i++){
			if(myToDoList[i].isComplete){
				arr.push(myToDoList[i]);
			}
		}
		return arr;
	};

	var makeElement = function(eleType,props,txt){
		var el =  document.createElement(eleType);
		if(txtNode==undefined){
			var txtNode = document.createTextNode(txt);
			el.appendChild(txtNode);
		}
		var keys = Object.keys(props);
		for(var i=0;i<keys.length;i++){
			el.setAttribute(keys[i],props[keys[i]]);
		}
		return el;
	}