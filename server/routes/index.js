const express = require('express');

const Router = express.Router();
const indexContoller = require('../controllers/index.js');

Router.get('/', indexContoller.getHomePage);
Router.get('/feed', indexContoller.getUserFeed);
Router.get('/profile/:id', indexContoller.getUserProfile);
Router.post('publish', indexContoller.publishPost);
Router.get('/post/:id', indexContoller.getPost);
Router.get('/search-post', indexContoller.searchPost);
Router.get('/search-user', indexContoller.searchUser);
Router.get('/settings', indexContoller.getSettings);
Router.put('/settings', indexContoller.updateSettings);
Router.post('/login', indexContoller.loginUser);
Router.post('/register', indexContoller.registerUser);
Router.post('/new-password', indexContoller.newPassword);
Router.post('/reset-password', indexContoller.resetPassword);

module.exports = Router;
