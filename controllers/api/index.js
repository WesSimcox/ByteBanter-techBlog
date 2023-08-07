const express = require('express');
const router = express.Router();
const postRoute = require('./post-route');
const userRoute = require('./user-route');

router.use('/post', postRoute);
router.use('/user', userRoute);

module.exports = router;