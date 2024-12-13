import { expect } from 'chai';
import Calculator from '../src/calculator.js';

describe('Test Calculator class', ()=>{

    it('should return sum', ()=>{
        //arrange
        const calc = new Calculator();
        
        //act
        const result = calc.add(4,5);
        
        //assert
        expect(result).to.equal(9);

    });

    it('should return difference', ()=>{
        const calc = new Calculator();       
        const result = calc.subtract(4,5);      
        expect(result).to.equal(-1);
    });

    it('should return multiplication', ()=>{
        const calc = new Calculator();       
        const result = calc.multiply(4,5);      
        expect(result).to.equal(20);
    });

    it('should return division', ()=>{
        const calc = new Calculator();       
        const result = calc.divide(4,5);      
        expect(result).to.equal(0.8);
    });

    it('should rthrow error while dividing by 0', ()=>{
        const calc = new Calculator();  
        expect(()=>calc.divide(4,0).to.throw('Cannot divide by 0.'));      
    });
})