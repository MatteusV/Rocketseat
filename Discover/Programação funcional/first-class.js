const sayMyName = () => console.log('Matteus')
const runFunction = fn => fn()

runFunction(sayMyNames)
runFunction(() => console.log('Discover'))

console.log(runFunction(Math.random))