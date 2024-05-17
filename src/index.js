import { exec } from '@actions/exec'

async function deploy() {
    exec('./vendor/bin/envoy ')    
}

deploy()