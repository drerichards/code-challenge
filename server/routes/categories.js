const express = require('express');
const router = express.Router();
const server = require('../lib/zomato-client');

router.get('/', (request, result, next) => {
  if(!request.body)
    return result.sendStatus(400);

  
})