import {expect} from 'chai';
import {add,sub} from '../src/app.js';

// BDD
describe('Test suite 1', ()=>{
    it('test should return 5', ()=>{
        expect(add(2,3)).to.be.equal(5);
    })

    it('test should return 18', ()=>{
        expect(sub(30,12)).to.be.equal(18);
    });
})
