
	var newPage=false;
	var toChange=false;
	var ide;

//changes page
var changePage = function(idd){
	if(!newPage){
			newPage=true;
			document.querySelector("#cancel").style.display="block";
			document.querySelector("#new").style.zIndex="1";
			if(idd!=undefined){
				document.querySelector("#addingTitle").value=takeTodo(idd).title;
				document.querySelector("#addingDescription").value=takeTodo(idd).description;
			}
			else{
				document.querySelector("#addingTitle").value="";
				document.querySelector("#addingDescription").value="";
			}
	}
	else{
		newPage=false;
		document.querySelector("#cancel").style.display="none";
		var title=document.querySelector("#addingTitle").value;
		var desc=document.querySelector("#addingDescription").value;
		if(toChange){
			toChange=false;
			updateToDo(ide,title,desc);
		}
		else if(idd=="cancel"){

		}
		else{
			addNewTodo(title,desc);
		}
		document.querySelector("#new").style.zIndex="-1";	
	}
}

