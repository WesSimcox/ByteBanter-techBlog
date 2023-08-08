const express = require('express');
const router = express.Router();
const postRoute = require('./postRoute');
const userRoute = require('./userRoute');

router.use('/post', postRoute);
router.use('/user', userRoute);

module.exports = router;