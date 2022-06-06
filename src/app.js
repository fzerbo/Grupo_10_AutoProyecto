const express = require('express');
const app = express();


const mainRouter = require('./routers/main')

app.use('/',mainRouter);
app.use('/Vehiculos',mainRouter);
app.use('/chevrolet',mainRouter);
//CATEGORIAS CHEVROLET , AUTOS , SUVS , PICKUPS , DEPORTIVOS//
app.use('/AutosChevrolet',mainRouter);
app.use('/SUVsChevrolet',mainRouter);
app.use('/PickupsChevrolet',mainRouter);
app.use('/DeportivosChevrolet',mainRouter);





app.listen(3001, ()=>{
    console.log('Servidor funcionando');
});


app.set('view engine','ejs');

app.use(express.static('public'))






//MARCAS DE VEHICULOS PRINCIPAL

app.get('/Ford', (req,res)=>{
    res.sendFile(__dirname + '/views/Ford.html');
});

app.get('/Volkswagen', (req,res)=>{
    res.sendFile(__dirname + '/views/volkswagen.html');
});

app.get('/Jeep', (req,res)=>{
    res.sendFile(__dirname + '/views/jeep.html');
});

//VARIANTES DE VEHICULOS DE CHEVROLET!!







//DETALLE DE PRODUCTO DE CADA VEHICULO DE CHEVROLET

app.get('/ChevroletCruzeRS', (req,res)=>{
    res.sendFile(__dirname + '/views/ChevroletCruzeRS.html');
});

app.get('/pruebafoto', (req,res)=>{
    res.sendFile(__dirname + '/views/foto.html');
});




  