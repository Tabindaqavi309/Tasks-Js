
   
  var arr = [23,44,15,17,90,2,11,5,4,3,22]

 arr.splice(arr.indexOf(arr.reduce(function(a, b) { return Math.max(a, b); })),1);
 console.log(arr.reduce(function(a, b) { return Math.max(a, b); }))