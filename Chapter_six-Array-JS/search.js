// Search DATA

var arr = [ 5, 6, 43, 6, 3, 5, 12, 45, 31, 40, 4, 9, 6,]

var find = 31;

var isFound = false;
for (var i = 0; i < arr.length; i++) {
   if(arr[i]=== find){
       console.log('Data Found at Index '+ i);
       isFound = true;
       break
   } 
    
}
if(!isFound){
    console.log('Data Not Found');
}