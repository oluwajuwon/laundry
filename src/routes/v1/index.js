import express from 'express';

const router = express.Router();

router.get('/index', (request, response) => response.status(200)
  .json({ message: 'welcome to Amity Laundry' }));

router.all('*', (request, response) => response.status(404)
  .json({ message: 'oops! This page does not exist' }));

module.exports = router;
