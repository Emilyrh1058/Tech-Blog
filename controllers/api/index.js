const router = require('express').Router();
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes.js');

router.use('/comment', commentRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;