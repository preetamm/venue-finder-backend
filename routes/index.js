var express = require('express');
var router = express.Router();
const axios = require('axios');
const { resource } = require('../app');
const baseUrl = 'https://apis.mapmyindia.com/advancedmaps/v1/'
const REST_KEY = 'kxsamg3wm581geh3jub4hfhjlw2nv1sr';
const config = {
  steps: true,
  rtype: 1,
  resource: 'route_adv'
}

//const URL =  `${baseUrl}${REST_KEY}/${config.resource}/`
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});





module.exports = router;
