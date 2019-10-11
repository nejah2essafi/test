

 function sum (array){
	var total=0;
	for(var i = 0; i< array.length; i++){
		total += array[i];
	}
	return total; 
}

function max (array){
	var mx=array[0];
	for (var i= 0; i<array.length; i++) {
		
		if (array[i]>mx){
			mx= array[i]
			
		}
	}
	return mx;
	
}

function remove(arr, ele){
	var array2=[];
	for (var i =0; i<arr.length; i++){
		if(arr[i]!==ele){
         array2.push(arr[i])
		}
	}
	return array2;
}

function even(array){
	var array2=[];
	for (var i =0; i<array.length; i++){
		if(array[i]% 2===0){
         array2.push(array[i])
		}
	}
	return array2;
}

function average (array){
	var total=0;
	for(var i = 0; i< array.length; i++){
		total += array[i];
	}
	return total/array.length; 
}

function min (array){
	var mx=array[0];
	for (var i= 0; i<array.length; i++) {
		
		if (array[i]<mx){
			mx= array[i]
			
		}
	}
	return mx
}

function shortesWord (array){
	var mx=array[0].length;
	for (var i= 0; i<array.length; i++) {
		
		if (array[i].length<mx){
			mx= array[i]
			
		}
	}
	return mx
}

function countChr(str, ch){
	var arr=str.split("");
	var count=0
	for( var i=0; i<arr.length; i++){
		if (arr[i]===ch){
			count=count+1
		}
    }
    return count;
}

function evenLengthWords(array){
	var array2=[];
	for (var i =0; i<array.length; i++){
		if(array[i].length% 2===0){
         array2.push(array[i])
		}
	}
	return array2;
}

function reversed (str){
	var array=str.split(" ");
	console.log(array)
	var arr=[];
	for (var i=array.length-1; i>=0; i--){
		console.log("i "+i)
     arr.push(array[i]);
	}
	return arr.join(" ");
}


function Keep(array, ele){
return ele(array);
}



	

