var t=10;
var pp=document.getElementById("ppp");
var image=["https://tse3.mm.bing.net/th?id=OIP.FcTXkLxB9Gbz4hDThAyEnQAAAA&pid=Api&P=0&w=153&h=151","https://tse2.mm.bing.net/th?id=OIP.5vLRTTM-aMsgtSoBdAmVawAAAA&pid=Api&P=0&w=174&h=171","https://tse2.mm.bing.net/th?id=OIP.WHZ4OatADODSo8fq3-ThBQAAAA&pid=Api&P=0&w=153&h=151"];
//var img1=document.getElementById("paper");
//var img2=document.getElementById("scissor");
//var img3=document.getElementById("rock");

//var time=document.getElementById("start");
var s=0;
function hello(){
	heya();
	
    
	//document.getElementById("start").id="hola";
	if(t<=0){
         
		clearInterval(countdown);
		t=10;
		var ima= ["https://tse3.mm.bing.net/th?id=OIP.FcTXkLxB9Gbz4hDThAyEnQAAAA&pid=Api&P=0&w=153&h=151","https://tse2.mm.bing.net/th?id=OIP.5vLRTTM-aMsgtSoBdAmVawAAAA&pid=Api&P=0&w=174&h=171","https://tse2.mm.bing.net/th?id=OIP.WHZ4OatADODSo8fq3-ThBQAAAA&pid=Api&P=0&w=153&h=151"];
        var x= Math.floor(Math.random()*3);
        document.getElementById("img").style.visibility="visible";
	    document.getElementById("img").src=ima[x];
	
		document.getElementById("count").innerText="Time over";
		document.getElementById("count").style.color="red";
        document.getElementById("count").style.fontWeight="normal";
		document.getElementById("start").style.display="block";
		document.getElementById("start").innerText="Play Again";
		document.getElementById("hola").style.display="none";
		//document.getElementById("start").id="hola";
		//document.getElementById("hola").style.display="block";
		//if(pp.src=="https://tse3.mm.bing.net/th?id=OIP.FcTXkLxB9Gbz4hDThAyEnQAAAA&pid=Api&P=0&w=153&h=151"){
			//s=s+1;
		//}
		hola();
		//document.getElementById("start").style.display="block";
	}
	else{
		
		document.getElementById("headline").style.display="none";
		document.getElementById("hola").style.display="flex";
		document.getElementById("count").innerText="Choose fast you have time left: "+t+" seconds";
		document.getElementById("count").style.color="black";
		document.getElementById("start").style.display="none";
		document.getElementById("img").style.visibility="hidden";
		//document.getElementsByClassName("hola").style.display="flex";
		t=t-1;

		
	}
	
	//setInterval(countdown,1000);


}
function rock(){
	//document.getElementById("choose").style.display="none";
	//document.getElementById("you").style.display="block";
	document.getElementById("ppp").style.visibility="visible";
	document.getElementById("ppp").src="https://tse2.mm.bing.net/th?id=OIP.5vLRTTM-aMsgtSoBdAmVawAAAA&pid=Api&P=0&w=174&h=171";
}
function paper(){
	//document.getElementById("you").style.display="block";
	document.getElementById("ppp").style.visibility="visible";
	document.getElementById("ppp").src="https://tse3.mm.bing.net/th?id=OIP.FcTXkLxB9Gbz4hDThAyEnQAAAA&pid=Api&P=0&w=153&h=151";
}
function scissor(){
	//document.getElementById("you").style.display="block";
	document.getElementById("ppp").style.visibility="visible";
	document.getElementById("ppp").src="https://tse2.mm.bing.net/th?id=OIP.WHZ4OatADODSo8fq3-ThBQAAAA&pid=Api&P=0&w=153&h=151";
}

function heya(){
	document.getElementById("you").style.display="block";
	//document.getElementById("choose").style.display="block";

}

//var xx= setTimeout(heya,10000);
//function heya(){

//
function hola(){
	//var chose=document.getElementById("choose").style.display;
	var score=document.getElementById("score");
	document.getElementById("headline").style.display="block";
	var rock="https://tse2.mm.bing.net/th?id=OIP.5vLRTTM-aMsgtSoBdAmVawAAAA&pid=Api&P=0&w=174&h=171";
	var paper="https://tse3.mm.bing.net/th?id=OIP.FcTXkLxB9Gbz4hDThAyEnQAAAA&pid=Api&P=0&w=153&h=151";
	var sci="https://tse2.mm.bing.net/th?id=OIP.WHZ4OatADODSo8fq3-ThBQAAAA&pid=Api&P=0&w=153&h=151";
	var x=document.getElementById("ppp").src;
	var j= document.getElementById("img").src;
	if((x==paper && j==rock) || (x==rock && j==sci) || (x==sci && j==paper)){
		document.getElementById("headline").innerText="You Won!";
		document.getElementById("headline").style.color="green";
		//document.getElementById("choose").style.display="none"
		s=s+1;
	}
	else if((x==paper && j==paper) || (x==rock && j==rock) || (x==sci && j==sci)){
		document.getElementById("headline").innerText="Its a Tie!";
		document.getElementById("headline").style.color="blue";
		//document.getElementById("choose").style.display="none"
		s=s+0;
	}
	
	else{
		document.getElementById("headline").innerText="You Lost!";
		document.getElementById("headline").style.color="red";
		//document.getElementById("choose").style.display="none";
		s=s-1;
	}
	score.style.display="block";
	score.innerText="score: "+s;
}
