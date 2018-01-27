const express = require('express');
const router = express.Router();
const server = require('../lib/zomato-client');
const axios = require('axios');
const config = require('../lib/config-defaults');

router.get('/', (request, result, next) => {
  if(!request.body)
    return result.sendStatus(400);

  const url = config.url.cuisines;
  const city_id = 280;
  const sort = 'asc';

  axios
    .get(url, {
      headers: {
        'user-key' : config.user_key,
      },
      params: {
        city_id: city_id,
        // order: sort
      }
    })
    .then(res => {
      console.log(res);
      result.send(res.data);
    })
    .catch(err => {
      console.log(`Error! ${err}`);
    });
})

module.exports = router;