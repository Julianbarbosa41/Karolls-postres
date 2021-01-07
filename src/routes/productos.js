const express = require('express');
const router = express.Router();

router.get("/Aministcion/Productos", (req, res) =>{
    res.send('Inicia sesion');
  });

module.exports = router;
