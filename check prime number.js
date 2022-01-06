num = 15
   
var counter=0;
function prime(num){
  for(let i=2; i<=num;i++){
      if(num % i === 0){
        counter++
      }
     }
      if(counter > 1){
         return false
      }else{
      return true
    } 
}
var temp  = prime(num)
console.log(temp)