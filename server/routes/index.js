const express = require('express');
const { authorizeUser } = require('../middleware/index.js');

const Router = express.Router();
const indexContoller = require('../controllers/index.js');

Router.get('/', indexContoller.getHomePage);
Router.get('/feed', authorizeUser, indexContoller.getUserFeed);
Router.get('/profile/:id', authorizeUser, indexContoller.getUserProfile);
Router.post('/publish', authorizeUser, indexContoller.publishPost);
Router.get('/post/:id', indexContoller.getPost);
Router.get('/search-post', authorizeUser, indexContoller.searchPost);
Router.get('/search-user', authorizeUser, indexContoller.searchUser);
Router.get('/settings', authorizeUser, indexContoller.getSettings);
Router.put('/settings', authorizeUser, indexContoller.updateSettings);
Router.post('/login', indexContoller.loginUser);
Router.post('/register', indexContoller.registerUser);
Router.post('/new-password', indexContoller.newPassword);
Router.post('/reset-password', indexContoller.resetPassword);

module.exports = Router;
