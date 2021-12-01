import { expect } from 'chai';
// import { humans, transformers } from '../src/app';

describe('OOP Practice', async () => {
    const humans = (await import('../src/app')).humans;
    it('test1', function () {
        expect(typeof humans[0] !== 'undefined').equal(true);
    });    
});
