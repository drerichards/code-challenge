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
  const category = 11;

  axios
    .get(url, {
      headers: {
        'user-key' : config.user_key,
      },
      params: {
        entity_type: location_type,
        entity_id: location,
        category: category,
        order: sort
      }
    })
    .then(res => {
      console.log(res.data);
      result.send(res.data);
    })
    .catch(error => {
      console.log("Error!");
      console.log(error);
    });
});

module.exports = router;