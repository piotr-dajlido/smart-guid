'use strict';
var should = require('chai').should(),
    expect = require('chai').expect,
    SUID   = require('../index'),
    GUID   = SUID(),
    UUID   = SUID('Xxxx-Yyyy-7xyx');

//console.log(SUID());
//console.log(SUID('xxx-5xx-Kyy'));
//console.log(SUID('x-x-y-b', 2));
//console.log(SUID('x-x-y-B', 2, true));
//console.log(SUID('x-x-y-O', 8));
//console.log(SUID('x-x-y-H', 16));

describe('GUID', function(){
    var test = GUID.toString().split('-');
    it('It is 36 chars long', function () {
       GUID.toString().length.should.equal(36);
    });

    it('It should have 8 - 4 - 4 - 4 - 12 structure', function () {
        test[0].length.should.equal(8);
        test[1].length.should.equal(4);
        test[2].length.should.equal(4);
        test[3].length.should.equal(4);
        test[4].length.should.equal(12);
    });

    it('It should hold 13th char intact as number 4', function () {
        test[2][0].should.equal('4');
    });

});
describe('UUID', function(){
    var test = UUID.toString().split('-');
    it('It is 14 chars long', function () {
        UUID.toString().length.should.equal(14);
    });

    it('It should have 4 - 4 - 4 structure', function () {
        test[0].length.should.equal(4);
        test[1].length.should.equal(4);
        test[2].length.should.equal(4);
    });

    it('It should hold 9th char intact as number 7', function () {
        test[2][0].should.equal('7');
    });

    it('It should respect uppercase X and Y as characters', function () {
        test[0][0].should.equal('X');
        test[1][0].should.equal('Y');
    });

});
describe('Options', function(){
    it('It should fail if base < 2 or base > 36', function () {
        SUID.bind(null,'x',1).should.throw(RangeError);
        SUID.bind(null,'x',37).should.throw(RangeError);
        SUID.bind(null,'x',5).should.not.throw(RangeError);
    });
    it('It should fail if base has decimal point', function () {
        SUID.bind(null,'x',5.32432).should.throw(RangeError);
    });
});
