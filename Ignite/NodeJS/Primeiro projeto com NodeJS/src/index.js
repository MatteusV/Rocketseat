const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const customers = [];

/*
cpf - string
name - string
id - uuid
statement [] 
*/

// Middleware

function verifyIfExisteAccountCPF(req, res, next) {
    const { cpf } = req.headers;

    const customer = customers.find(customer => customer.cpf === cpf)

    if(!customer) {
        return res.status(400).json({error: 'Customer not found'})
    }

    req.customer = customer
    
    return next()
}

// se todas as rotas precisar desse middleware = app.use(verifyIfExisteAccountCPF)

function getBalance(statement) {
   const balance = statement.reduce((accumulator, operation) => {
        if(operation.type === 'credit') {
            return accumulator + operation.amount;
        } else {
            return accumulator - operation.amount;
        }
    }, 0)

    return balance
}

app.post('/account',(req, res) => {
    const {cpf, name} = req.body;

    const customerAlreadyExists = customers.some(
        (customer) => customer.cpf === cpf
    )

    if(customerAlreadyExists) {
        return res.status(400).json({error: 'Customer already exists'})
    }

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    })

    return res.status(201).send()

})


app.get('/statement', verifyIfExisteAccountCPF, (req, res) => {
    const { customer } = req
    
    return res.json(customer.statement)

})

app.get('/statement/date', verifyIfExisteAccountCPF, (req, res) => {
    const { customer } = req
    const { date } = req.query

    const dateFormat = new Date(date +  " 00:00");

    const statement = customer.statement.filter((statement) => statement.created_at.toDateString() === new Date(dateFormat).toDateString())
    
    return res.json(customer.statement)

})

app.post('/deposit', verifyIfExisteAccountCPF, (req, res) => {
    const { description, amount } = req.body

    const { customer } = req

    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: 'credit'
    }

    customer.statement.push(statementOperation)

    return res.status(201).send()
})

app.post('/withdraw', verifyIfExisteAccountCPF, (req, res) => {
    const { amount } = req.body
    const { customer } = req

    const balance = getBalance(customer.statement)

    if(balance < amount) {
        return res.status(400).json({error: 'Insufficient funds'})
    }

    const statementOperation = {
        amount,
        created_at: new Date(),
        type: 'debit'
    }

    customer.statement.push(statementOperation)

    return res.status(201).send()
})

app.put("/account", verifyIfExisteAccountCPF,(req, res) => {
    const { name } = req.body
    const { customer } = req

    customer.name = name

    return res.status(201).send()
})

app.get("/account", verifyIfExisteAccountCPF,(req, res) => {
    const { customer } = req

    return res.json(customer)
} )

app.delete("/account", verifyIfExisteAccountCPF, (req, res) => {
    const { customer } = req
    
    //splice

    customers.splice(customer, 1)

    return res.status(204).json(customers)
})

app.get("/balance", verifyIfExisteAccountCPF, (req, res) => {
    const { customer } = req 

    const balance = getBalance(customer.statement)
    
    return res.json(balance)
})

app.listen(3333)