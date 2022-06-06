const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');





router.get('/', mainController.home)
router.get('/Vehiculos', mainController.vehiculos)
router.get('/chevrolet', mainController.chevrolet)
//CATEGORIAS CHEVROLET , AUTOS , SUVS , PICKUPS , DEPORTIVOS//
router.get('/AutosChevrolet', mainController.autosChevrolet)
router.get('/SUVsChevrolet', mainController.suvsChevrolet)
router.get('/PickupsChevrolet', mainController.pickupsChevrolet)
router.get('/DeportivosChevrolet', mainController.deportivosChevrolet)

module.exports = router;
