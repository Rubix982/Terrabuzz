const express = require('express');
const { authorizeUser } = require('../middleware/index.js');

const Router = express.Router();
const indexContoller = require('../controllers/index.js');

Router.get('/', indexContoller.getHomePage);
Router.get('/feed', authorizeUser, indexContoller.getUserFeed);
Router.get('/profile/:handle', authorizeUser, indexContoller.getUserProfile);
Router.post('/publish', authorizeUser, indexContoller.publishPost);
Router.get('/post/:id', indexContoller.getPost);
Router.post('/post/:id', indexContoller.newComment);
Router.get('/like/:id', authorizeUser, indexContoller.getLike);
Router.post('/like/:id', authorizeUser, indexContoller.addLike);
Router.get('/search-post', authorizeUser, indexContoller.searchPost);
Router.get('/search-user', authorizeUser, indexContoller.searchUser);
Router.get('/settings', authorizeUser, indexContoller.getSettings);
Router.post('/settings', authorizeUser, indexContoller.updateSettings);
Router.post('/login', indexContoller.loginUser);
Router.post('/register', indexContoller.registerUser);
Router.post('/new-password', indexContoller.newPassword);
Router.post('/reset-password', indexContoller.resetPassword);
Router.post('/changepassword', indexContoller.changePassword);
module.exports = Router;
