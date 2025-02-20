const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('Sample Test Suite', () => {
    it('should always fail', () => {
        expect(true).to.be.false;
    });
});
