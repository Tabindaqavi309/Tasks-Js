var Objects = [
    { name: 'Tabi',
   rollno : 2
  },
   {
    name : 'Zee',
    class : 'Mont',
    rollno : '4',
    key : 5
     },
  {
          location: 'khi'
      }
  
     ];
 var len= 0;
 for( var i = 0 ;i<Objects.length ; i++){
 var j = 0 ; 
 while(Objects.forEach(property => {if(property) return true})){
 j= j+1;
 console.log(j);
 }
 
 }
 var min = []
 
 for(var i = 0 ; i< Objects.length ; i++ )
 {
 min.push([(Object.keys(Objects[i]).length), i]);
 
  }
 min.sort()
 console.log(min)
 var sortedObj = []
 for(var i = 0 ; i < min.length ; i++){
 
     sortedObj.push(Objects[min[i][1]])
 }
 console.log(sortedObj)