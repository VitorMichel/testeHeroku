const express = require('express');
const app = express();

const PORT = process.env.PORT || 8877;

app.get('/about', (req, res) => {
    res.json({
        name: 'Vitor',
        email: 'vitor@gmail'
    })
})

app.get('/', (req, res) => {
    res.json({
        msg: 'ok'
    })
})

app.listen(PORT, () => {
    console.log('Escutando na porta: ' + PORT);
})