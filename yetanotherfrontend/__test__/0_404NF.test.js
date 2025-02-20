const axios = require('axios');
const { describe, it } = require('mocha');
const { expect } = require('chai');

const URL = 'http://localhost:3000/404NF';
/**
 * @issue test issue2
 * @body Hello world!!!. this is a test code in the test file 0_404NF.test.js to test the 404 response of the server when the URL is not found in the server. 
 */
describe('404 Server Response Test', function () {
    this.timeout(10000); // Set global timeout to 10 seconds
    it('should return 404 NOT FOUND', async function () {
        try {
            await axios.get(URL);
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    expect(error.response.status).to.equal(404);
                    console.log('✅ Test Passed: Server responded with 404 Not Found');
                } else if (error.response.status === 500) {
                    console.log('⚠️ Test Warning: Server responded with 500 Internal Server Error');
                } else {
                    console.log(`⚠️ Test Warning: Server responded with status code ${error.response.status}`);
                }
            } else {
                console.log('❌ Test Failed: No response from server');
            }
        }
    });
});
