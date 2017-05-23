const assert = require('chai').assert;
//const addNumbers = require('../app').addNumbers;
const app = require('../app');

//results
sumResult = app.addNumbers(2, 5);

describe('addNumbers', function(){
  it('addNumbers should return 0 when input is zero', function(){
    let result = app.addNumbers(0, 0);
    assert.equal(result, 0);
  });

  it('addNumbers should return the sum of two positive numbers', function(){
    let result = app.addNumbers(1, 3);
    assert.equal(result, 4);
  });

  it('addNumbers should return the positive sum when the major num of the sum is positive', function(){
    let result = app.addNumbers(-1, 3);
    assert.equal(result, 2);
  });

  it('addNumbers should return the negative sum when the major num of the sum is negative', function(){
    let result = app.addNumbers(-1, 3);
    assert.equal(result, 2);
  });

  it('addNumbers should return the sum when is above 7', function(){
    let result = app.addNumbers(2, 9);
    assert.isAbove(result, 7);
  });

  it('addNumbers should return the sum when is below 10', function(){
    assert.isBelow(sumResult, 10);
  });

  it('addNumbers should is Number the sum', function(){
    assert.isNumber(sumResult, 'si es number');
  });
});
