import { exec } from '@actions/exec'
import * as core from '@actions/core';

try {
    const nameToGreet = core.getInput('who-to-greet');

    console.log(`Hello ${nameToGreet}!`);
} catch(error) {
    // Handle errors and indicate failure
    core.setFailed(error.message);
}