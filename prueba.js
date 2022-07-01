const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const app = express();
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    profesores = {
        id: '1',
        nombre: 'raul',
        edad: 30,
    };
	res.send(profesores);
});

app.post('/login', (req, res) => {
	console.log(req.query);
	res.send(JSON.stringify({msj: 'hola'}));
});


app.listen(3000, () => console.log('server started'));