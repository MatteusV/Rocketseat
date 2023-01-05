function imprimirDado(dado) {
    console.log('Outra tarefa')
    console.log(dado())
}

imprimirDado(function() {
    return 'Olá mundo'
})