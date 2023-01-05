const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.send('index')
})

app.listen(8080, ()=> {
    console.log('Servidor funcionando')
});
