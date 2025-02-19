describe('AlwaysfaultyTest', function () {
    it('should return error in the pipeline', async function () {
        throw new Error('❌ Test Failed: This test is always faulty');
    });
    
});