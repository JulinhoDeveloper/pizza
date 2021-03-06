const express = require("express");
const router = express.Router();

const {register,login, getallusers, deleteuser} = 
require('../controllers/user');

//register user
router.post('/register',register);

//login
router.post('/login', login);

router.get('/getallusers', getallusers);

router.delete('/deleteuser', deleteuser);

module.exports = router