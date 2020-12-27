const express = require('express');
const { authorizeUser, forwardUnAuthorizedUser } = require('../middleware/index.js');

const Router = express.Router();
const indexContoller = require('../controllers/index.js');

Router.get('/', indexContoller.getHomePage);
Router.get('/navbar', authorizeUser, indexContoller.getNavbarInformation);
Router.get('/feed', authorizeUser, indexContoller.getUserFeed);
Router.get('/profile/:handle', forwardUnAuthorizedUser, indexContoller.getUserProfile);
Router.get('/post/:id', indexContoller.getPost);
Router.get('/like/:id', authorizeUser, indexContoller.getLike);
Router.get('/follow/:handle', authorizeUser, indexContoller.getFollow);
Router.get('/search-interest', authorizeUser, indexContoller.searchInterest);
Router.get('/search-user', authorizeUser, indexContoller.searchUser);
Router.get('/settings', authorizeUser, indexContoller.getSettings);
Router.get('/newPassword/:hashed', indexContoller.newPassword);
Router.get('/notification-comment', authorizeUser, indexContoller.getCommentNotification);
Router.get('/notification-like', authorizeUser, indexContoller.getLikeNotification);
Router.post('/logout', authorizeUser, indexContoller.logoutUser);
Router.post('/newPassword/:hashed', indexContoller.resetPassword);
Router.post('/forget-password', indexContoller.forgetPassword);
Router.post('/post/:id', authorizeUser, indexContoller.newComment);
Router.post('/publish', authorizeUser, indexContoller.publishPost);
Router.post('/like/:id', authorizeUser, indexContoller.addLike);
Router.post('/follow/:handle', authorizeUser, indexContoller.alterFollow);
Router.post('/settings', authorizeUser, indexContoller.updateSettings);
Router.post('/login', indexContoller.loginUser);
Router.post('/register', indexContoller.registerUser);
Router.post('/firstLogin', authorizeUser, indexContoller.postFirstLoginInformation);
Router.post('/changepassword', authorizeUser, indexContoller.changePassword);
Router.post('/externalLinks', authorizeUser, indexContoller.postExternalInformationDetails);
Router.post('/externalProfile', authorizeUser, indexContoller.postExternalProfileDetails);
Router.post('/notification', authorizeUser, indexContoller.postNotificationController);
Router.post('/verify', indexContoller.verifyUser);
Router.post('/notification-comment', authorizeUser, indexContoller.postCommentNotification);
Router.post('/notification-like', authorizeUser, indexContoller.postLikeNotification);

module.exports = Router;
