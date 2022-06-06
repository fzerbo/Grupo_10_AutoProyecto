const path = require ('path');

const controlador = {

    home: (req , res) =>{
        res.render(path.resolve(__dirname, '../views/home.ejs'))},

        

    vehiculos: (req , res) =>{
            res.render(path.resolve(__dirname, '../views/Vehiculos.ejs'))},

    chevrolet: (req , res) =>{
                res.render(path.resolve(__dirname, '../views/chevrolet.ejs'))},

     //CATEGORIAS CHEVROLET           

    autosChevrolet: (req , res) =>{
                    res.render(path.resolve(__dirname, '../views/AutosChevrolet.ejs'))},

    suvsChevrolet: (req , res) =>{
                        res.render(path.resolve(__dirname, '../views/SUVsChevrolet.ejs'))},

    pickupsChevrolet: (req , res) =>{
                            res.render(path.resolve(__dirname, '../views/PickupsChevrolet.ejs'))}, 
                            
    deportivosChevrolet: (req , res) =>{
                                res.render(path.resolve(__dirname, '../views/DeportivosChevrolet.ejs'))},                  

}


module.exports = controlador;