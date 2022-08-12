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

app.get('/materias', (req, res) => {
    const materias = [{
        id: '1',
        nombre: 'manzana',
        categoria: 'frutas',
        precio: 1.99
      },
      {
        id: '2',
        nombre: 'peras',
        categoria: 'hola',
        precio: 1.49
      }]
      console.log('hola');
      console.log(materias);
	res.json(materias);
});

app.get('/teachers', (req, res) => {
    const teachers = [{
        id: '1',
        nombre: 'binker',
        apellido: 'eze',
        edad: 22,
        idMateria: 1
      },
      {
        id: '2',
        nombre: 'damian',
        apellido: 'asman',
        edad: 40,
        idMateria: 2
      }]
      console.log(teachers);
      console.log(req.query.idMateria);
      console.log(teachers[0].idMateria);
      console.log(req.query.idMateria == teachers[0].idMateria);
      if(req.query.idMateria){
        res.json(teachers.filter(profe =>profe.idMateria == req.query.idMateria))
      }
      else{
        res.json(teachers);
      }
	
});

app.get('/login', (req, res) => {
	console.log(req.query);
    res.send(JSON.stringify({msj: 'hola'}));
});


app.listen(3000, () => console.log('server started'));