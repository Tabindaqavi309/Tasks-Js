ArrayOfnumbers = [12,1,3,4,55,76,53,6,33,65,05]
var ArrayOffunc = [] 
for( var i = 0 ; i < ArrayOfnumbers.length;i++){
 ArrayOffunc[i] = () => {
console.log(ArrayOfnumbers[i]);
}

}

for( var i = 0 ; i< ArrayOffunc.length; i++){
    ArrayOffunc[i]()
}