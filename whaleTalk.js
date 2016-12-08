var input = prompt('Enter a phrase here and translate it into whale talk.');
var vowels = ['i' , 'o' , 'e' , 'u', 'a'];
var resultArray = [];

for ( var i = 0; i < input.length; i++){
  for (var j=0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      resultArray.push(input[i]);
    }
    if (input[i] === 'e' || input[i] === 'u'){
      resultArray.push(input[i]);
    }
  }
}
console.log(resultArray.join('').toUpperCase());
