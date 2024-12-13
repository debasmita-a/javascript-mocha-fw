import {expect} from 'chai';
import {add1,sub1} from '../src/app.js';


// BDD
describe('Test suite 1', ()=>{
    it('test should return 5', ()=>{
        expect(add1(2,3)).to.be.equal(5);
    });

    it('test should return 18', ()=>{
        expect(sub1(30,12)).to.be.equal(18);
    });
})
