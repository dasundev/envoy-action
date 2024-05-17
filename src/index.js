import { exec } from '@actions/exec'
import * as core from '@actions/core'

try {
    const nameToGreet = core.getInput('story');
    console.log(`Hello ${nameToGreet}!`);
} catch (error) {
    core.setFailed(error.message);
}