const assert = require('chai').assert;
//const app = require('../app');
const sayHello = require('../app').sayHello;

describe('App', function(){
  it('sayHello should return paola', function(){
    let result = sayHello('prueba');
    assert.equal(result,'paola');
  });

  it('sayHello should return type string',function(){
    let result = sayHello('prueba');
    assert.typeOf(result,'string');
  });

  it('sayHello should return type boolean when the size of string is 1',function(){
    let result = sayHello('a');
    assert.typeOf(result,'boolean');
  });
});
