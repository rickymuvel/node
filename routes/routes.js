var express = require('express');
var router = express.Router();
let controllers = require('../controllers');

router.post( '/registrar', controllers.AccesoController.Registrar );
router.post( '/login', controllers.AccesoController.Login );

module.exports = router;