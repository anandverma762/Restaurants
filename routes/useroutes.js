const usercontroller = require('../controllers/userinfo')

const express = require('express');

const rout = express.Router();

rout.post('/restaurantsend',usercontroller.postdata);

rout.get('/restaurantdata',usercontroller.getuser);

rout.delete('/deleterestaurant/:id',usercontroller.deleteuser);

module.exports = rout;