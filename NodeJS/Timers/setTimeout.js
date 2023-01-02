// rodar uma função depois de X milissegundos

const timeout = 3000
const finished = () => console.log('done!')

// setTimeout (finished, timeout)

// console.log('Mostrar')

// clearTimeout cancelar um timeout

let timer = setTimeout(finished, timeout)

clearTimeout(timer)
