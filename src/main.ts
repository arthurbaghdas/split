import * as core from '@actions/core';

const main = () => {
  try {
    const string = core.getInput('string');
    const parts = string.split(' ', -1);
    core.setOutput('multiline', parts.join('\n'));
  } catch (error) {
    core.setFailed(error.message);
  }
};

main();
