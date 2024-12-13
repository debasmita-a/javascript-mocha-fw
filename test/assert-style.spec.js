import { assert } from "chai";
import Calculator from "../src/calculator.js";
import { throws } from "assert";

describe('Assert style tests', ()=>{
    it('Assert that sum returns correct data',()=>{
        const calc = new Calculator();
        const sum = calc.add(4,5);
        assert.equal(9, sum);
    });

    it('system throws error when divided by zero',()=>{
        const calc = new Calculator();
        assert.throws(()=>calc.divide(8,0), 'Cannot divide by 0', 'Error is expected.'); 
   });
        
})
