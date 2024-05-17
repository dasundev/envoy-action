import * as fs from 'fs'
import * as constants from './constants.js'

export async function getServers() {
    const ENVOY_FILE = 'Envoy.blade.php'

    const content = await fs.readFileSync(ENVOY_FILE, 'utf8')

    const serverRegex = /@servers\(\[(.*?)\]\)/s;

    const serverMatch = content.match(serverRegex);

    if (serverMatch && serverMatch[1]) {
        const serverContent = serverMatch[1];
        
        const pairRegex = /'[^']+' => '([^']+)'/g;
        
        const matches = [];
        let match;
        
        while ((match = pairRegex.exec(serverContent)) !== null) {
            matches.push(match[1]);
        }
        
        console.log(matches);
    } else {
        console.log('No server found');
    }
}