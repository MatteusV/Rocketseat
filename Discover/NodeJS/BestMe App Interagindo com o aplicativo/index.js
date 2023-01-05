const questions = [
    "O que eu aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz?",
    "O quantas pessoas eu ajudei",
];

const ask = (index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()
const answers = [];

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on("exit", () => {
    console.log(`
    O que você aprendeu:
    ${(answers[0])}

    O que te deixou aborrecido:
    ${(answers[1])}

    O que te deixou feliz:
    ${(answers[2])}

    O que você fez para melhorar:
    ${(answers[3])}

    Quantas pessoas você ajudou: 
    ${(answers[4])}
    `)
})