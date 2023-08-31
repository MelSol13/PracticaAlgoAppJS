
function largestValue(){
var array = [3, 55, -10, 19, -27, 6, -2, 0, 11, -4];
var largest= array[0];
for( var i=0; i < array.length; i++) {
    if(array[i] > largest) {
        largest = array[i];
    }
    }
    return largest;
}

var largest= largestValue();
console.log(largest);


function countPositives(){
var array = [-13, -15, -8, -29, -3, 4, 9, 10, -3, 7];
var count = 0;
for (var i=0; i < array.length; i++) {
	if (array[i] > 0) {
	count += array[i];
	} 
} 
return count;
}

var count = countPositives();
console.log(count);