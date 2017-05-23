const assert = require('chai').assert;
const addNumbers = require('../app').addNumbers;

describe('addNumbers', function(){
  it('addNumbers should return 0 when input is zero', function(){
    let result = addNumbers(0, 0);
    assert.equal(result, 0);
  });

  it('addNumbers should return the sum of two positive numbers', function(){
    let result = addNumbers(1, 3);
    assert.equal(result, 4);
  });
});
