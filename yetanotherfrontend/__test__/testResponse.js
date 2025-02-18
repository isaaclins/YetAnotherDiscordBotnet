const axios = require('axios');
const { describe, it } = require('mocha');
const { expect } = require('chai');

const URL = 'http://localhost:3000';

describe('Server Response Test', function () {
    it('should return 200 OK', async function () {
        try {
            const response = await axios.get(URL);
            expect(response.status).to.equal(200);
            console.log('✅ Test Passed: Server responded with 200 OK');
        } catch (error) {
            console.error(`❌ Test Failed: ${error.message}`);
            throw error;
        }
    });
});
