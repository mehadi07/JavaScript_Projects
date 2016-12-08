function isPasswordValid(input){
  if (hasUpperCase(input) && hasLowerCase(input) && isLongEnough(input) && hasSpecialCharacter(input)) {
    console.log('Code works fine !!');
}else if(!hasUpperCase(input)){
         console.log('Password Invalid Needs Uppercase');}else if(!hasLowerCase(input)){
         console.log('Password Invalid needs lowercase');}else if(!isLongEnough(input)){
         
    console.log('Password Invalid needs 8 Characters');}else if(!hasSpecialCharacter(input)){
         console.log('Password Invalid needs Special Characters');}
      
}
  

function hasUpperCase (input){
  for (var i = 0; i < input.length; i++){
    if(input[i] === input[i].toUpperCase()){
      return true;
    } 
    
  }
}
function hasLowerCase(input){
  for(var i = 0; i < input.length; i++){
    if (input[i] === input[i].toLowerCase()){
      return true;
    }
  }
}
function isLongEnough(input){
  for(var i = 0; i < input.length; i++){
    if (input.length >= 8){
      return true;
    }
  }
}

function hasSpecialCharacter(input){
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for(var i = 0; i < input.length; i++){
    for(var j = 0; j < specialCharacters.length; j++)
    if (input[i] === specialCharacters[j]){
      return true;
    }
  }
}
isPasswordValid('hHHGYHHGHG%&^$#H');
    