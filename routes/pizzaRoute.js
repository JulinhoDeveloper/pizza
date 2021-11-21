const express = require("express");
const router = express.Router();
const {getallpizzas,getpizzabyid, addpizza , editpizza, deletepizza} = 
require('../controllers/pizza');

//get pizza
router.get('/getallpizzas', getallpizzas);

//get pizza pelo id
router.get('/getpizzabyid', getpizzabyid);

//ADD pizza
router.post('/addpizza',addpizza);
//atualizar pizza
router.put('/editpizza', editpizza);
//excluir pizza
router.delete('/deletepizza', deletepizza);

module.exports = router;