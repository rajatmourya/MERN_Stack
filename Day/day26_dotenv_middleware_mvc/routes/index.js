const router = require('express').Router();
const postRouter = require('./post')
const authRouter = require('./auth');
const reviewRouter = require('./review');
const log = require('../middlewares/Logger');

router.use('/post', postRouter);
router.use('/auth', log, authRouter);
router.use('/review', reviewRouter);

module.exports = router;