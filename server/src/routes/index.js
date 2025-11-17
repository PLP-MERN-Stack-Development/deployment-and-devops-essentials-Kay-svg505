const express = require('express');
const router = express.Router();

// Import controllers
// const authController = require('../controllers/authController');
// const postController = require('../controllers/postController');

// Auth routes example
// router.post('/auth/register', authController.register);
// router.post('/auth/login', authController.login);

// Post routes example
// router.get('/posts', postController.getAllPosts);
// router.post('/posts', postController.createPost);

// Health check routes
router.get('/healthz', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));
router.get('/ready', (req, res) => res.json({ ready: true }));

module.exports = router;
