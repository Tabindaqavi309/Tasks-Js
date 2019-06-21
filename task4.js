// Write a function which will return 
//you first two times 1, then 2, then 3, 
//then 5 and so on (Fibonacci numbers). 
// let the length of fibbonaci be 10
var fib = 20;
var sum  , s = 1 , f = 0 ; 
for (var i = 0 ; i<fib ; i++){
   if(i<=1){
      sum = i;
   //console.log(sum);
  
   }
  else{
    sum = f + s;
      f = s;
      s = sum;
  }
  if(i>0)
  console.log(sum);
    
}