import mongoose from 'mongoose';
import express from 'express';

import platController from './plat.controller.js' ;

const app = express() ;
const PORT = 8080 ;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/all', platController.get) ;

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

app.listen(PORT, () => {
    console.log('Le serveur est lancé sur le port : ' + PORT )
})