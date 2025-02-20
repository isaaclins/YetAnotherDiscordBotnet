const { describe, it } = require('mocha');
const { expect } = require('chai');

/**
 * @issue another test issue
 * @body Hello world!!!. this is a test code in the test file 1_fail.test.js to test the failure of the test case.
 */
describe('Sample Test Suite', () => {
    it('should always fail', () => {
        expect(true).to.be.false;
    });
});
