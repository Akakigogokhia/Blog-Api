const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const postController = require('../controllers/PostController');
const validatePost = require('../middleware/validatePost');

router.post('/create', [verifyToken, validatePost], postController.createPost);

module.exports = router;
