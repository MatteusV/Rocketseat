import getFlagValue from './flags';

console.log(`Oi ${getFlagValue('--name')}, ${getFlagValue('--greeting')}`);