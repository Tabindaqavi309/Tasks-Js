var str = [];
var thousand = ["","M","MM","MMM","MMMM"]
var hundred = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
var tens = ["", "X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
var unit = ["", 'I',"II","III","IV","V","VI","VII","VIII","IX"]

function RomanNumerals(num){

    var a  = thousand[Math.floor(num/1000)];
    str += a ;
    b = hundred[Math.floor((num%1000)/100)];
    str+= b;
    c = tens[Math.floor((num%100)/10)];
    str+= c;
    d = unit[Math.floor(num%10)];
    str+= d;
    return str;
}


console.log(RomanNumerals(566));