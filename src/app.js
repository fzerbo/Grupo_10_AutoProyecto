const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3001, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/Vehiculos', (req,res)=>{
    res.sendFile(__dirname + '/views/Vehiculos.html');
});
//MARCAS DE VEHICULOS PRINCIPAL
app.get('/chevrolet', (req,res)=>{
    res.sendFile(__dirname + '/views/chevrolet.html');
});

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

app.get('/SUVsChevrolet', (req,res)=>{
    res.sendFile(__dirname + '/views/SUVsChevrolet.html');
});

app.get('/AutosChevrolet', (req,res)=>{
    res.sendFile(__dirname + '/views/AutosChevrolet.html');
});

app.get('/PickupsChevrolet', (req,res)=>{
    res.sendFile(__dirname + '/views/PickupsChevrolet.html');
});

app.get('/DeportivosChevrolet', (req,res)=>{
    res.sendFile(__dirname + '/views/DeportivosChevrolet.html');
});

//DETALLE DE PRODUCTO DE CADA VEHICULO DE CHEVROLET

app.get('/ChevroletCruzeRS', (req,res)=>{
    res.sendFile(__dirname + '/views/ChevroletCruzeRS.html');
});



//const grande = document.querySelector('.grande');
//const punto = document.querySelector('.punto');

// cuando hago click en punto 
  //sabes la posicion de ese punto
  // aplicar un transform translatex al grande
  //quitar la clase activo a todos los puntos
  //añadir la clase activo al punto que hemos echo click

  /* punto.forEach((cadaPunto , i )=>{
      punto[i].addEventListener('click',()=>{
          let posicion = i
          let operacion = posicion * -50
          
          grande.style.transform = 'translateX(${ operacion }%)'
      })
      
  }); */