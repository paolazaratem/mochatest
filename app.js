//module
var utilities;

utilities = {
  sayHello: function(){
    return 'paola';
  },

  checkOddString: function(input){
    var output = false;
    for (var i = 0, j = input.length-1 ; i != j ; i++, j-- ){
      if(input[i] === input[j]){
        output =  true;
      }else{
        output = false;
      }
    }
    return output;
  },

  checkEvenString: function(input){
    var output = false;
    for (var i = (input.length/2)-1, j = (input.length/2); i >= 0 && j <= input.length-1; i--, j++ ){
      if(input[i] === input[j]){
        output =  true;
      }else{
        return false;
      }
    }
    return output;
  },

  isPalindrom: function(input){
    var answer = true;
    if(input === ""){
      return answer;
    }
    if(input.length === 1){
      return answer;
    }
    if(input.length % 2 === 1){
      answer = utilities.checkOddString(input);
      return answer;
    }
    if(input.length % 2 === 0){
      answer = utilities.checkEvenString(input);
      return answer;
    }
  }

};

module.exports = utilities;
