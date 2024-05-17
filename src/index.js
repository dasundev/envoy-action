import { exec } from '@actions/exec'
import * as core from '@actions/core'

try {
    const story = core.getInput('story');

    // Install Laravel Envoy
    await exec('composer require laravel/envoy --dev')

    // Deploy
    await exec('./vendor/bin/envoy run' + story)
} catch (error) {
    core.setFailed(error.message);
}