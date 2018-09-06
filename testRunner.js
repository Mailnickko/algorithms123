const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const runner = new Mocha({
  ui: 'bdd',
  reporter: 'spec',
  bail: false,
  timeout: 10000,
  slow: 3000
});

const getArgs = () => {
  return process.argv[2];
};

const isDirectory = filePath => {
  try {
    return fs.lstatSync(filePath).isDirectory();
  } catch {
    return false;
  }
};

const collectTests = dir => {
  const testFiles = glob.sync('**/*.spec.js', { cwd: dir || __dirname });
  testFiles.forEach(test => {
    const filePath = dir ? path.join(__dirname, dir, test) : path.join(__dirname, test);
    runner.addFile(filePath);
  });
};

const testContainer = location => {
  if (!isDirectory(location)) {
    console.log(`The directory does not exist: ${location}`);
  }
  collectTests(location);
};

const runTests = () => {
  testContainer(getArgs());
  runner.run();
};

runTests();
