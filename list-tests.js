const fs = require('fs');
const path = require('path');

const testDir = path.join(__dirname, 'yetanotherfrontend', '__test__');
const testFiles = fs.readdirSync(testDir).filter(file => file.endsWith('.test.js'));

console.log(`::set-output name=testFiles::${testFiles.join(',')}`);
