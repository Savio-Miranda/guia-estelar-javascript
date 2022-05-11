/* 
SISTEMAS DE NOTAS ESCOLARES

- Criar um algoritmo que transforme as notas do sistema numérico
para sistema de notas em caracteres (Ex. A, B, C, D, F)

90 a 100 = A
80 a 89 = B
70 a 79 = C
60 a 69 = D
menor que 60 = F
*/
function note_system() {
    let student_note = prompt('Enter the note: ')
    student_note = parseInt(student_note)
    let result

    if(student_note <= 100 && student_note >= 90){
        result = "A"
    
    }else if(90 > student_note && student_note >= 80){
        result = "B"        
    
    }else if(80 > student_note && student_note >= 70){
        result = "C"
    
    }else if(70 > student_note && student_note >= 60){
        result = "D"
    
    }else if(0 <= student_note && student_note < 60){
        result = "F"
    }else{
        return 'Fora do escopo'
    }
    return result
}

test = note_system()
console.log(test)

/* 
FLUXO DE CAIXA FAMILIAR

- Crie um objeto que terá duas propriedades, ambas do tipo array:
    * receitas = []
    * despesas = []

Crie uma função que irá calcular um total de despesas e receitas
e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguido do valor do saldo.
*/

function balance(){
    let income_break
    let income = []
    while(income_break != 0){
        income_break = prompt('Enter incomes (input [0] if you want to end): ')
        income_break = parseInt(income_break)
        if(income_break == 0){
            continue
        }
        income.push(income_break)
    }
    
    let adicionar = 0
    for(bagulho in income){
        adicionar += income[bagulho]
    }

    let outlay_break
    let outlay = []
    while(outlay_break != 0){
        outlay_break = prompt('Enter outlay (input [0] if you want to end): ')
        outlay_break = parseInt(outlay_break)
        if(outlay_break == 0){
            continue
        }
        outlay.push(outlay_break)
    }
    
    let subtrair = 0
    for(bagulho in outlay){
        subtrair += outlay[bagulho]
    }

    let result = adicionar - subtrair
    if(result <= 0){
        return `Saldo negativo por -R$${Math.abs(result)}`
    }
    return `Saldo positivo por R$${result}`
}

test = balance()
console.log(test)

/* 
CELSIUS PARA FAHRENHEIT

- Crie uma função que receba uma string em celsius
ou fahrenheit e faça a transformação de uma unidade para outra
    C = (F - 32) * 5/9
    F = C * 9/5 + 32
*/

function fahrenheit_to_celsius(fahrenheit){
    let celsius
    celsius = (fahrenheit - 32) * 5/9
    return celsius.toFixed(2)
}

function celsius_to_fahrenheit(celsius){
    let fahrenheit
    fahrenheit = celsius * 9/5 + 32
    return fahrenheit.toFixed(2)
}

function temperature_conversor(){
    let result
    let type_of_measure = prompt('Type [1] to convert to Fahrenheit or [2] to Celsius: ')
    let temperature = prompt('Enter the temperature: ')
    temperature = parseFloat(temperature)
    
    if(type_of_measure == '1'){
        result = celsius_to_fahrenheit(temperature)
        return `${temperature}C° is equivalente to ${result}F`

    }else if(type_of_measure == '2'){
        result = fahrenheit_to_celsius(temperature)
        return `${temperature}F is equivalente to ${result}C°`
    
    }else{
        new Error('Accepts only string 1 or 2.')
    }
}

test = temperature_conversor()
console.log(test)

/*
BUSCANDO E ENCONTRANDO DADOS NUM ARRAY

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios:

    * Contar o número de categorias e o número de livros em cada categoria;
    * Contar o número de autores;
    * Mostrar livros do autor Augusto Cury;
    * Transformar a função acima em uma função que irá receber o nome do autor e
    devolver os livros desse autor.
*/
let quantity_of_books = []
let quantity_of_categorys = []
let quantity_of_authors = []
const books_by_category = [
    {
        category: "Riqueza",
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker'
            },
            {
                title: 'O homem mais rico da Babilônia',
                author: 'George S. Clason'
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter'
            }
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: 'Você é Insubstituível',
                author: 'Augusto Cury'
            },
            {
                title: 'Ansiedade: Como enfrenter o mal do século',
                author: 'Augusto Cury'
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey'
            }
        ]
    }
]

for(books in books_by_category){
    genre = books_by_category[books]
    quantity_of_categorys.push(genre['category'])
    
    for(amount_of_books in genre['books']){
        let all_books = genre['books'][amount_of_books]
        quantity_of_books.push(all_books)

        if(quantity_of_authors.includes(all_books['author'])){
            continue
        }
        quantity_of_authors.push(all_books['author'])
        
    }
}

function authors_work(authors_name){
    let authors_books = []
    for(books in quantity_of_books){
        every_author_name = quantity_of_books[books]['author']
        
        if(every_author_name.includes(authors_name)){
            authors_books.push(quantity_of_books[books]['title'])
        }
    }

    return `Livros do(a) autor(a) ${authors_name}: ${authors_books}`
}

console.log('Quantidade de categorias:', quantity_of_categorys.length)
console.log('Quantidade de livros:', quantity_of_books.length)
console.log('Quantidade de autores:', quantity_of_authors)

test = authors_work('Augusto Cury')
console.log(test)