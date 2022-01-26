import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import platController from './plat.controller.js' ;
import tableController from './table.controller.js' ;
import planTableController from './plan-table.controller.js'

const app = express() ;
const PORT = 8080 ;

// MongoDB
mongoose.connect('mongodb+srv://hugobarsacq:hugobarsacq@cluster0.rhjep.mongodb.net/altable?retryWrites=true&w=majority',{
  useNewUrlParser : true,
  useUnifiedTopology: true
})
const db = mongoose.connection;
db.on("error",console.error.bind(console, "Erreur de connexion à Mongo : "));
db.once("open", function () {
  console.log("Connexion à Mongo OK");
})

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Le serveur est lancé sur le port : ' + PORT )
})

//ROUTES

app.get('/', (req, res) => {
    res.send('Hello World')
})

//Récupérer les plats
app.get('/all', platController.get) ;

//Ajouter un plat
app.post('/add', platController.add) ;

//Modification de la quantité d'un plat
app.put('/edit', platController.edit) ;

//Récupérer la carte
app.get('/dispo', platController.getPlatsDispo);

//Ajouter une table
app.post('/table/add', tableController.addTable);

//Ajouter un plan table
app.post('/plantable/add', planTableController.addPlanTable);
