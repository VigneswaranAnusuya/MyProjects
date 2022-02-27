
document.getElementById("Screen").addEventListener("click",pather);
var htmlString="<div id='_##' class='detail'>"+
	 				"<div class='important'><i class='fa fa-star-o star #color1#' aria-hidden='true'></i></div>"+
	 				"<div class='content'>"+
	 					"#title#"+
	 				"</div>"+
	 				"<div class='detailBottom'>"+
	 					"<i class='fa fa-check movingIcon done #color2#' aria-hidden='true'></i>"+
	 					"<i class='fa fa-trash movingIcon delete' aria-hidden='true'></i>"+
	 				"</div>"+
	 			"</div>";


//construct list by array
var constructToDo= function(val){
	var allToDo;
	if(val==undefined){
		allToDo=readAllTodo();
	}
	else if(val=="fav"){
		allToDo=importantToDo();
	}
	else if(val=="check"){
		allToDo=completedToDo();
	}
	var result="";
	for(var i=0;i<allToDo.length;i++){
		var important=allToDo[i].isImportant ? "fa0":"";
		var complete=allToDo[i].isComplete ? "fa0":"";
		var temp=htmlString.replace("#title#",allToDo[i].title).replace("##",allToDo[i].id).replace("#color1#",important).replace("#color2#",complete);
		result+=temp;
		var ele1=makeElement("div",{id:allToDo[i].id,class:"detail"});
		ele2=makeElement("div",{class:"important"});
		var ele3=makeElement("i",{class:("fa fa-star-o star "+important), ariaHidden:"true"});
		ele2.appendChild(ele3);
	}
	document.querySelector("#table").innerHTML=result;
};
//changes path
var eve;
function pather(e){
	console.log(e.target);
	eve=e.target;
	var idd;
	var allToDo=readAllTodo();
	if(eve.classList.contains("star")){
		idd=eve.parentElement.parentElement.id.slice(1);
		isImportantToDo(idd);
	}
	else if(eve.classList.contains("done")){
		idd=eve.parentElement.parentElement.id.slice(1);
		isTodoComplete(idd);
	}
	else if(eve.classList.contains("delete")){
		idd=eve.parentElement.parentElement.id.slice(1);
		deleteToDo(idd);		
	}
	else if(eve.id=="add"){
		changePage();	
	}
	else if(eve.classList.contains("content")){
		idd=eve.parentElement.id.slice(1);
		changePage(idd);
		toChange=true;
		ide=idd;
	}
	else if(eve.id=="cancel"){
		changePage("cancel");
	}
	else if(eve.parentElement.classList.contains("favorites")){
		var flag=eve.parentElement.classList.toggle("true");
		if(!flag){
			constructToDo("fav");
			return;
		}
	}
	else if(eve.parentElement.classList.contains("checked")){
		var flag=eve.parentElement.classList.toggle("true");
		if(!flag){
			constructToDo("check");
			return;
		}
	}
	constructToDo();
};



constructToDo();