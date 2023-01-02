// Converter as notas pra A,B,C etc

// let nota = 8

// let A = nota >= 90 && nota <= 100
// let B = nota >= 80 && nota < 90
// let C = nota >= 70 && nota < 80
// let D = nota >= 60 && nota < 70
// let E = nota >= 50 && nota < 60
// let F = nota > 50 && nota >= 0

// if(A) {
//     console.log("Sua nota foi: A")
// } else if(B) {
//     console.log("Sua nota foi: B")
// } else if(C) {
//     console.log("Sua nota foi: C")
// } else if(D) {
//     console.log("Sua nota foi: D")
// } else if(E) {
//     console.log("Sua nota foi: E")
// } else {
//     console.log("Sua nota foi: F")
// }


// Gastos da familia

// let family = {
//     receitas: [4000, 250, 45.90, 1489.64],
//     despesas: [300, 200, 177.23, 1000, 80, 780]
// }

// function soma(array) {
//     let total = 0

//     for(let value of array) {
//         total += value
//     }

//     return total
// }

// function calculadora() {
//     const calculadoraReceitas = sum(family.receitas)
//     const calculadoraDespesas = sum(family.despesas)

//     const total = calculadoraReceitas - calculadoraDespesas

//     const positivo = total >= 0

//     const texto = "Negativo"

//     if(positivo) {
//         texto = "Positivo"
//         console.log(`Seu saldo é ${positivo}: ${total}`)
//     } else {
//         console.log("Seu saldo está negativo :(")
//     }
// }

// calculadora()

// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32


// function identificar(degree) {
//     const celsiusExiste = degree.toUpperCase().includes('C')
//     const fahrenheitExiste = degree.toUpperCase().includes('F')

//     if(!celsiusExiste && !fahrenheitExiste) {
//         throw new Error('Grau não idetificado')
//     } 

//     // Fluxo de F -> C
//     let updateDegree = Number(degree.toUpperCase().replace('F', ''))
//     let formula = fahrenheit => (fahrenheit - 32) * 5/9 
//     let degreeSign = "C"

//     // Fluxo de C -> F
//     if(celsiusExiste) {
//         let updateDegree = Number(degree.toUpperCase().replace('C', ''))
//         let formula = celcius => celcius *9/5 + 32 
//         let degreeSign = "F"
//     }

//     return formula(updateDegree) + degreeSign
// }

// try {
//     console.log(identificar('40C'))
// } catch (error) {
//     console.log(error.message)
// }

// identificar();


/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

console.log(`O número de categorias são: ${booksByCategory.length}`);

for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category);
    console.log(category.books.length);
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
          if(authors.indexOf(book.author) == -1) {
            authors.push(book.title);
          }
        }
    }

    console.log("Total de autores:", authors.length);
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
          if(book.author === 'Augusto Cury') {
           books.push(book.title)
          }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`);
}

booksOfAuthor('Augusto Cury');