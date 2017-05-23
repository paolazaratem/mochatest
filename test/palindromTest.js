const assert = require('chai').assert;
const isPalindrom = require('../app').isPalindrom;

describe('2', function(){
  it('should return boolean when string is empty', function(){
    assert.equal(isPalindrom(""), true);
  });
});

describe('3', function(){
  it('should return true when string have size is equal 1', function(){
    assert.equal(isPalindrom("a"), true);
  });
});

describe('4', function(){
  it('should return true when size of string is odd is palindrom', function(){
    assert.equal(isPalindrom("aba"), true);
  });
});

describe('5', function(){
  it('should return false when size of string is odd and is not palindrom', function(){
    assert.equal(isPalindrom("12341"), false);
  });
});

describe('6', function(){
  it('should return true when size of string is even is palindrom', function(){
    assert.equal(isPalindrom("1221"), true);
  });
});

describe('7', function(){
  it('should return false when size of string is even is not palindrom', function(){
    let result = isPalindrom("124431");
    assert.equal(result, false);
  });
});

describe('8', function(){
  it('should return true when string is very big is palindrom', function(){
    assert.equal(isPalindrom("111116111111"), false);
    assert.equal(isPalindrom("12345654321"), true);
  });
});
