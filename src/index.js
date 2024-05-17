import { exec } from '@actions/exec'
import * as core from '@actions/core';

async function installEnvoy() {  
    await exec('composer require laravel/envoy --dev')
}

async function deploy(story) {  
    await exec('./vendor/bin/envoy ' + story)
}

async function run() {
    const story = core.getInput('story')

    console.log(story)
    
    // await installEnvoy()
    // await deploy(story)
}

(async () => {
    await run()
})().catch(error => {
    core.setFailed(error.message);
})