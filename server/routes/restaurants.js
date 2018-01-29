var express = require('express');
var router = express.Router();
// var server = require('../lib/zomato-client');
const axios = require('axios');
const config = require('../lib/config-defaults');

router.get('/', (request, result, next) => {
  if(!request.body)
    return result.sendStatus(400);

  const url = config.url.restaurants;
  const location = '94741';
  const location_type = 'zone';
  const sort = "asc";
  const cuisine_id = request.headers.cuisine;

  axios
    .get(url, {
      headers: {
        'user-key' : config.user_key,
      },
      params: {
        entity_type: location_type,
        entity_id: location,
        cuisines: cuisine_id,
        order: sort
      }
    })
    .then(res => {
      console.log(res);
      result.send(res.data);
      // result.status(200).send(res.data);
    })
    .catch(error => {
      console.log("Error!");
      console.log(error);
    });
});

module.exports = router;