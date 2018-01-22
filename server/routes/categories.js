const express = require('express');
const router = express.Router();
const config = require('./config-defaults');

router.get('/', (request, result, next) => {
  if(!request.body)
    return result.sendStatus(400);

  
})