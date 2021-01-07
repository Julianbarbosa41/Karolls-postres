const express = require('express');
const router = express.Router();

router.get("/Usurios/Registro", (req, res) =>{
    res.render('registro');
  });
  
  router.get("/Usurios/Inicia-sesion", (req, res) =>{
    res.render('usurios/inicia-sesion');
  });

module.exports = router;