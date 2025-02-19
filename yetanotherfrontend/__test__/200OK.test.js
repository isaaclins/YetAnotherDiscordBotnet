const axios = require('axios');
const { describe, it } = require('mocha');
const { expect } = require('chai');

const URL = 'http://localhost:3000';

describe('200 Server Response Test', function () {
    this.timeout(10000); // Set global timeout to 10 seconds
    it('should return 200 OK in index URL', async function () {
        try {
            const response = await axios.get(URL);
            expect(response.status).to.equal(200);
            console.log('✅ Test Passed: Server responded with 200 OK');
        } catch (error) {
            console.error(`❌ Test Failed: ${error.message}`);
            throw error;
        }
    });
    it('should return 200 OK in Python URL', async function () {
        try {
            const response = await axios.get(URL + "/python");
            expect(response.status).to.equal(200);
            console.log('✅ Test Passed: Server responded with 200 OK');
        } catch (error) {
            console.error(`❌ Test Failed: ${error.message}`);
            throw error;
        }
    });
});