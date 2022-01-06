const arr = [3,5,17,19,23,29];
// var counter=0
var counter = 0
var counter1=1
var text = 0
function prime(arr){
   for(let i=0; i<arr.length;i++){
      console.log(counter)
     
      for(let j=2; j<=arr[i];j++){
      
      if(arr[i] % j === 0){
         counter++  
         }
      }
      if(counter>1){
         return false
     }
      counter =0;
   }
   
return true

}


var temp = prime(arr)
console.log(temp)


console.log(Math)