const express = require('express');
const { authorizeUser } = require('../middleware/index.js');

const Router = express.Router();
const indexContoller = require('../controllers/index.js');

Router.get('/', indexContoller.getHomePage);
Router.get('/feed', authorizeUser, indexContoller.getUserFeed);
Router.get('/profile/:handle', authorizeUser, indexContoller.getUserProfile);
Router.get('/post/:id', indexContoller.getPost);
Router.get('/like/:id', authorizeUser, indexContoller.getLike);
Router.get('/search-post', authorizeUser, indexContoller.searchPost);
Router.get('/search-user', authorizeUser, indexContoller.searchUser);
Router.get('/settings', authorizeUser, indexContoller.getSettings);
Router.get('/newPassword/:hashed', indexContoller.newPassword);
Router.post('/newPassword/:hashed', indexContoller.resetPassword);
Router.post('/forget-password', indexContoller.forgetPassword);
Router.post('/post/:id', authorizeUser, indexContoller.newComment);
Router.post('/publish', authorizeUser, indexContoller.publishPost);
Router.post('/like/:id', authorizeUser, indexContoller.addLike);
Router.post('/settings', authorizeUser, indexContoller.updateSettings);
Router.post('/logout', authorizeUser, indexContoller.controllerLogOut);
Router.post('/login', indexContoller.loginUser);
Router.post('/register', indexContoller.registerUser);
Router.post('/changepassword', indexContoller.changePassword);
Router.post('/firstLogin', authorizeUser, indexContoller.postFirstLoginInformation);
module.exports = Router;
