setInterval(function(){
var dt = new Date();
var sec = dt.getSeconds();
var min = dt.getMinutes();
var h = dt.getHours();
for(var m = 1;m <= 41;m++){
	document.getElementsByTagName('div')[m].style.backgroundColor = "#330000";
	document.getElementsByTagName('div')[m].style.boxShadow = "none";
	document.getElementsByTagName('div')[m].style.opacity = ".7";
}
//-----------------------------------------SATI-----------------------------------------
if(h.toString()[1] == undefined){
	if(h.toString()[0] == 0){
		var arr = [38,36,39,41,40,37,31,30,29,32,33,34];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[0] == 1){
		var arr = [38,36,39,41,40,37,30,33];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[0] == 2){
		var arr = [38,36,39,41,40,37,31,30,28,32,34];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[0] == 3){
		var arr = [38,36,39,41,40,37,31,30,28,33,34];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[0] == 4){
		var arr = [38,36,39,41,40,37,29,28,30,33];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[0] == 5){
		var arr = [38,36,39,41,40,37,31,29,28,33,34];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[0] == 6){
		var arr = [38,36,39,41,40,37,31,29,28,32,33,34];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[0] == 7){
		var arr = [38,36,39,41,40,37,31,30,33];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[0] == 8){
		var arr = [38,36,39,41,40,37,31,29,30,28,32,33,34];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[0] == 9){
		var arr = [38,36,39,41,40,37,31,29,30,28,33,34];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
}else{
	if(h.toString()[0] == 1){
		var arr = [40,37];
		for(var i=0;i < arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[0] == 2){
		var arr = [38,37,35,39,41];
		for(var i=0;i < arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[1] == 0){
		var arr = [31,30,29,32,33,34];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[1] == 1){
		var arr = [30,33];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[1] == 2){
		var arr = [31,30,28,32,34];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[1] == 3){
		var arr = [31,30,28,33,34];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[1] == 4){
		var arr = [29,28,30,33];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[1] == 5){
		var arr = [31,29,28,33,34];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[1] == 6){
		var arr = [31,29,28,32,33,34];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[1] == 7){
		var arr = [31,30,33];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[1] == 8){
		var arr = [31,29,30,28,32,33,34];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(h.toString()[1] == 9){
		var arr = [31,29,30,28,33,34];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
}
//-----------------------------------------MIN------------------------------------------
if(min.toString()[1] == undefined){
	if(min.toString()[0] == 0){
		var arr = [2,1,4,6,5,3,10,8,11,13,12,9];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[0] == 1){
		var arr = [2,1,4,6,5,3,9,12];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[0] == 2){
		var arr = [2,1,4,6,5,3,10,9,7,11,13];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[0] == 3){
		var arr = [2,1,4,6,5,3,10,9,7,12,13];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[0] == 4){
		var arr = [2,1,4,6,5,3,8,7,9,12];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[0] == 5){
		var arr = [2,1,4,6,5,3,10,8,7,12,13];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[0] == 6){
		var arr = [2,1,4,6,5,3,7,11,12,13,8,10];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[0] == 7){
		var arr = [2,1,4,6,5,3,10,9,12];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[0] == 8){
		var arr = [2,1,4,6,5,3,10,8,9,7,11,12,13];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[0] == 9){
		var arr = [2,1,4,6,5,3,10,8,9,7,12,13];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
}else{
	if(min.toString()[0] == 1){
		var arr = [3,5];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[0] == 2){
		var arr = [2,3,0,4,6];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[0] == 3){
		var arr = [2,3,0,5,6];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[0] == 4){
		var arr = [1,0,3,5];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[0] == 5){
		var arr = [2,1,0,5,6];
		for(var i=0;i < arr.length; i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[1] == 0){
		var arr = [10,9,11,13,12,8];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[1] == 1){
		var arr = [9,12];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[1] == 2){
		var arr = [10,9,7,11,13];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[1] == 3){
		var arr = [10,9,7,12,13];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[1] == 4){
		var arr = [8,7,9,12];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[1] == 5){
		var arr = [10,8,7,12,13];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[1] == 6){
		var arr = [7,11,12,13,8,10];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[1] == 7){
		var arr = [10,9,12];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[1] == 8){
		var arr = [10,8,9,7,11,12,13];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(min.toString()[1] == 9){
		var arr = [10,8,9,7,12,13];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
}
//-----------------------------------------SEKUNDE--------------------------------------
if(sec.toString()[1] == undefined){
	if(sec.toString()[0] == 0){
		var arr = [17,15,16,19,18,20,24,22,23,25,26,27];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[0] == 1){
		var arr = [17,15,16,18,19,20,23,26];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[0] == 2){
		var arr = [17,15,16,18,19,20,24,23,21,25,27];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[0] == 3){
		var arr = [17,15,18,20,19,16,24,23,21,26,27];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[0] == 4){
		var arr = [17,15,18,20,19,16,22,21,23,26];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[0] == 5){
		var arr = [17,15,18,20,19,16,24,22,21,26,27];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[0] == 6){
		var arr = [17,15,18,20,19,16,21,25,27,26,22,24];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[0] == 7){
		var arr = [17,15,18,20,19,16,24,23,26];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[0] == 8){
		var arr = [17,15,18,20,19,16,24,22,23,21,25,26,27];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[0] == 9){
		var arr = [17,15,18,20,19,16,24,22,23,21,26,27];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
}else{
	if(sec.toString()[0] == 1){
		var arr = [16,19];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[0] == 2){
		var arr = [17,16,14,18,20];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[0] == 3){
		var arr = [17,16,14,19,20];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[0] == 4){
		var arr = [15,14,16,19];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[0] == 5){
		var arr = [17,15,14,19,20];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[1] == 0){
		var arr = [24,22,25,27,26,23];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[1] == 1){
		var arr = [23,26];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[1] == 2){
		var arr = [24,23,21,25,27];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[1] == 3){
		var arr = [24,23,21,26,27];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[1] == 4){
		var arr = [22,21,23,26];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[1] == 5){
		var arr = [24,22,21,26,27];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[1] == 6){
		var arr = [21,25,27,26,22,24];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[1] == 7){
		var arr = [24,23,26];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[1] == 8){
		var arr = [24,22,23,21,25,26,27];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
	if(sec.toString()[1] == 9){
		var arr = [24,22,23,21,26,27];
		for(var i=0;i< arr.length;i++){
			document.getElementsByTagName('div')[arr[i]].style.backgroundColor = "#f00";
			document.getElementsByTagName('div')[arr[i]].style.boxShadow = "0 0 5px #f00";
		}
	}
}
},1000);