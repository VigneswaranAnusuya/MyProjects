//variables a as alpha(range of all) and c for increasing range
var a=20,c=0;
//ans store ans,idd stops timer,random methods
var ans,idd,command=1;
//stores operatr signs
var operator="+";
//keeps seconds count
var seconds=10;
//value to stop timer from speeding
var flag=true;
//stores score
var score=0;
//array keeps operators
var symbls=["+"];
//upades ques in page
function show(val){
	if(val<102){
		a=val;
		ques(operator);
	}
	else{
		a=val.value;
		
	}
	document.getElementById("rangeValue").style.left=(2*a)+"px";
	document.getElementById("rangeValue").innerText=a;
	document.getElementById("rangeBox").value=a;
	ques(operator);
	
}
//gives random number
function rn(limit){
	return Math.round(Math.random()*limit);
}
//gives value to question
function ques(sy){
	operand1=rn(a);
	operand2=rn(a);
	sy=symbol(sy);
	if(sy==undefined){
		sy=operator;
	}
	operator=(sy);
	ans=solve(operand1,operand2,operator);
	
}
//solves ques and stores answer
function solve(operand1,operand2,operator){
	document.getElementById("operator").innerText=operator;
	if(operator=="+"){
		ans= operand1+operand2;	
	}
	else if(operator=="-"){
		ans= operand1-operand2;	
	}
	else if(operator=="*"){
		ans= operand1*operand2;	
	}
	else if(operator=="/"){
		ans=rn(a/4);
		operand1=ans*operand2;	
	}

	console.log(ans);
	document.getElementById("operand1").innerText=operand1;
	document.getElementById("operand2").innerText=operand2;
	return ans;
}
//checks if the answer is correct
function check(val){
	guess=val.value;
	//compares values
	if(guess==ans){
		seconds+=2;
		if(flag){
			idd=setInterval(time,1500);
			flag=false;
		}
		document.getElementById("ansInput").value="";		
		ques(operator);
		score=score+(a/10);
		comment();
		c++;
		//changes range of ques
		if((c==5)){
			c=0;
			a+=10;
			show(a);
		}
	}
}
//stores and removes operator from array
function symbol(sy){
	if(sy.checked==true){
		symbls.push(sy.value);
		command+=1;
	}
	else if(symbls.length==1){
		sy.checked=true;
	}
	else if(sy.checked==false){
		for(var i=0;i<=command;i++){
			if(symbls[i]==sy.value){
				break;
			}
		}
		symbls.splice(i,i+1);
		command-=1;
	}
	return symbls[rn(command)];
}
//gives random comments
function comment(){
	arr=["awesome!","fantastic!","fablous!","nice!","wonderful!"]
	randomElement=rn(1);
	num=rn(arr.length-1);
	document.getElementById("comments"+(randomElement+1)).style.top=rn(100);
	document.getElementById("comment"+(randomElement+1)).style.display="block";
	document.getElementById("comments"+(randomElement+1)).innerText=arr[num];
	setTimeout(hide,1200,randomElement);
}
//keeps timings
function time(val){
	
	document.getElementById("seconds").innerText=seconds--;
	document.getElementById("runClock").style.width=270-(30*seconds)+"px";
	if(seconds==-1){
		clearInterval(idd);
		complete();
	}
}
//dislays score after player gets out
function complete(){
	document.getElementById("show").style.display="block";
	document.getElementById("scoreCard").style.display="block";
	document.getElementById("yourScore").innerText=score;
}
//resets game
function again(){
	document.getElementById("show").style.display="none";
	document.getElementById("scoreCard").style.display="none";
	score=0;
	flag=true;
	seconds=10;
	ques(operator);
	document.getElementById("runClock").style.width="0px";
	document.getElementById("ansInput").value="";
	document.getElementById("seconds").innerText=seconds;			
}
//hides comment after 1s
function hide(randomElement){
	document.getElementById("comment"+(randomElement+1)).style.display="none";
}
//updates ques when page loads
ques("+");
