// var arr=[4,6,8]
num = 15
// function prime(num){
    
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
  

// function sum(arr){  
//     var add =0;
//     for (var i=0; i<arr.length; i++){
//         add = add+ arr[i];
//         //console.log(typeof add)   
//     }
//     return add;
// }
// function product(arr){  
//     var product =1;
//     for (var i=1; i<arr.length; i++){
//         product *= arr[i];
//         //console.log(typeof add)   
//     }
//     return product;
// }
// function primenumber(arr){  
    
//     for (var i=2; i<arr.length; i++){
//         if(arr % i === 0)
//         console.log(false)
//             // return false;
//             else{
//                 console.log(true)
//                 // return true;
//             }
        
//         //console.log(typeof add)   
//     }
    
// }
// console.log(+sum(arr))
// console.log(+product(arr))
// primenumber(arr)
// console.log(primenumber(arr))