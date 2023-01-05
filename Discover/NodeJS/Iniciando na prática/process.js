// Lista de argumentos
console.log(process.argv);

const firstName = process.argv[2];
const lastName = process.argv[3];

if (!firstName ||!lastName) {
    console.log('Please provide a first name and last name');
    process.exit(1);
 } else {
    console.log("Hello", firstName, lastName);
 }

