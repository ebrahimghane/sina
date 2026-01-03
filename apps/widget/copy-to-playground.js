import { copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = join(__dirname, 'dist');
const playgroundDir = join(__dirname, '..', 'playground');

try {
  copyFileSync(join(distDir, 'sina-sdk.js'), join(playgroundDir, 'sina-sdk.js'));
  console.log('✓ Copied sina-sdk.js to playground');
  
  try {
    copyFileSync(join(distDir, 'sina-sdk.js.map'), join(playgroundDir, 'sina-sdk.js.map'));
    console.log('✓ Copied sina-sdk.js.map to playground');
  } catch (e) {
    // Source map is optional
  }
} catch (error) {
  console.error('Error copying files:', error);
  process.exit(1);
}

