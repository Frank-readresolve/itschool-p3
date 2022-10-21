//
const args = process.argv;
const firstArgument = args[0];
const secondArgument = args[1];
console.log('### Command line arguments:');
console.log('### [0] (node path): ' + args[0]);
console.log('### [1] (script path): ' + args[1]);
for (let i = 2; i < args.length; i++) {
    const arg = args[i];
    console.log(`### [${i}]: ${arg}`);
}
//
const str = args[2];
const inputs = str.split(',');
console.log(inputs);