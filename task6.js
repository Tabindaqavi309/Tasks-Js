let numeralVal = ['I' , 'II' , 'III' , 'IV' , 'V' , 'VI' ,' VII' ,' VIII', 'IX',' X'];
let num = [['I', 1] ,['IV',4] ,['V',5],['IX',9] ,['X', 10],['XL',40],  ['L', 50],	['XC', 90],  ['C', 100]	,['CD',400],['D',500]	,['CM',900], [ 'M',1000]];
function romanNumeral(value){
   var romno = [] ;
 
if(value > 0 && value < 4000){
    //console.log('hello)
    if(value > 0 && value <=10 ){
    return numeralVal[value - 1];
}
else if( value > 10){
 var m;
 var div;
 var y,x;
 while(value >= 10){
   

     //console.log('hello')
for(var i = 0 ; i < num.length ; i++)
{  m = num[i][1];
    if(value < m){
        y = num[i - 1][1]; 
        x = num[i - 1][0];
        break;
    }
    else if(value >= 1000){
        y = 1000 
        x = 'M'
        break;
    }
}
div = value / y;
//console.log(div)
while(div>=1 ){
    --div;
    romno.push(x);

}

value = value % y;

//console.log(value)
}
if(value < 10 && value > 0 ){
    
    romno.push(numeralVal[value - 1]);
}

return romno;
}}
else return 'Wrong Input'
}
var Arr  = [];
var str = ''
Arr = (romanNumeral(3999))
for(var i = 0 ; i < Arr.length;i++){
str = str + Arr[i]
//console.log(str)
}
console.log(str)
