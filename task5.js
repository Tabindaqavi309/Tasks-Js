//countOf substrings
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
 var count = 1;
 var c = [];
   function longRepeat(str){
    str = alphabet_order(str);
    
    for(var i = 0 ; i< str.length; i++){
        if(str[i]===str[i+1]){
            count++;
    
        }

        else if(str[i]!==str[i+1]){
            c.push(count)
            //console.log(count)
            count = 1;
        }
    
    }
//console.log(c);
var max = c.reduce(function(a, b) { return Math.max(a, b); });
return max;
  }
  console.log(longRepeat('ddvvrwwwrggg'));
  
  
 