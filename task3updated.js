var Objects = [
    { name: 'Tabinda',
        id: 14
  },
   {
    name:'Haya',
    id: 6
     },
  {
    name: 'Nida',
    id: 11
      }
     ];
     function swap(x,y){
        var t = x;
        x = y;
        y = t;
       }
       
      Objects.sort( function($a, $b) {
        return $a.id - $b.id;
      });
      
      console.log(Objects)