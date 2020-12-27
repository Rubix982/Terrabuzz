const { generateAccessToken } = require('../services/auth.js');
const { createAndPushPost } = require('../services/publishPost.js');
const { getHomePagePosts } = require('../services/homePage.js');
const { getSinglePost } = require('../services/getSinglePost.js');
const { getLikeStatus, updateLike } = require('../services/like.js');
const { getFollowStatus, alterFollowStatus } = require('../services/follow.js');
const { addComment } = require('../services/comment.js');
const { getProfileData } = require('../services/profile.js');
const { searchUserProfiles, searchInterestEntries } = require('../services/search.js');
const { forgetPasswordUpdation } = require('../services/forgetPassword.js');
const { VerifyResetPasswordHash } = require('../services/verifyResetHash.js');
const { changePasswordForUser } = require('../services/changePassword.js');
const { checkForFirstLogin } = require('../services/firstLogin.js');
const { getFeedData } = require('../services/feed.js');
const { postUserInformationForBio } = require('../services/postFirstLogin.js');
const { changePasswordInSettings } = require('../services/settingsChangePassword.js');
const { postUserCredentialsInDatabase } = require('../services/register.js');
const { getSettingsFromDatabase } = require('../services/getSettings.js');
const { updateSettingsInDatabase } = require('../services/updateSettings.js');
const { postExternDataToDB } = require('../services/postExternalLinks.js');
const { postProfileDataToDB } = require('../services/postExternalProfile.js');
const { postNotification } = require('../services/postNotification.js');
const { getNavbarInformationFromDatabase } = require('../services/getNavbarInfo.js');
const { getUserVerificationStatus, verifyUser } = require('../services/verify.js');

module.exports.getHomePage = async (req, res) => {
  try {
    const posts = await getHomePagePosts();
    return res.json(posts);
  } catch (error) {
    return res.status(404).json({ msg: error.message });
  }
};

module.exports.getNavbarInformation = async (req, res) => {
  try {
    const output = await getNavbarInformationFromDatabase(req.userHandle);
    const data = {
      Username: output[0][0].Username,
      ProfilePicture: output[0][0].ProfilePicture,
      Handle: req.userHandle,
    };
    console.log(data);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).json({ msg: `Unable to fetch navbar information due to error "${error.message}"` });
  }
};

module.exports.getUserFeed = async (req, res) => {
  try {
    const data = await getFeedData(req.userHandle);
    return res.json({ msg: `Fetched feed of ${req.userHandle}`, data });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.getUserProfile = async (req, res) => {
  try {
    const userID = req.params.handle;
    const data = await getProfileData(userID, req.userHandle);
    res.json({ msg: `UserID to be queried: ${userID}`, data });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports.publishPost = async (req, res) => {
  try {
    await createAndPushPost(req.body, req.userHandle);
    return res.json({ msg: 'Post posted successfully!' });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

module.exports.getPost = async (req, res) => {
  try {
    const postID = req.params.id;
    const data = await getSinglePost(postID);
    res.json({ msg: `postID to be queried: ${postID}`, data });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports.newComment = async (req, res) => {
  try {
    const postID = req.params.id;
    const status = await addComment(postID, req.userHandle, req.body.Comment);
    res.json({ msg: `Comment status of postID ${postID}`, status });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports.getLike = async (req, res) => {
  try {
    const postID = req.params.id;
    const status = await getLikeStatus(postID, req.userHandle);
    res.json({ msg: `Get like status of postID ${postID}`, status });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports.addLike = async (req, res) => {
  try {
    const postID = req.params.id;
    const status = await updateLike(postID, req.userHandle);
    res.json({ msg: 'Like updated successfully', status });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports.getFollow = async (req, res) => {
  try {
    const profileHandle = req.params.handle;
    const status = await getFollowStatus(profileHandle, req.userHandle);
    res.json({ msg: `Connection status of profileHandle ${profileHandle}`, status });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports.alterFollow = async (req, res) => {
  try {
    const profileHandle = req.params.handle;
    const status = await alterFollowStatus(profileHandle, req.userHandle);
    res.json({ msg: `New connection of user ${req.userHandle} with profileHandle ${profileHandle}`, status });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports.searchInterest = async (req, res) => {
  try {
    const { topic } = req.query;
    const entries = await searchInterestEntries(topic);
    return res.status(200).json({ msg: `Post topic to be queried: ${topic}`, entries });
  } catch (error) {
    return res.status(500).json({ msg: `Error occurred while searching for interests, ${error.message}` });
  }
};

module.exports.searchUser = async (req, res) => {
  try {
    const { handle } = req.query;
    const users = await searchUserProfiles(handle);
    return res.status(200).json({ msg: `Handle to be queried: ${handle}`, users });
  } catch (error) {
    return res.status(500).json({ msg: `Error occurred while searching for users, ${error.message}` });
  }
};

module.exports.getSettings = async (req, res) => {
  try {
    const output = await getSettingsFromDatabase(req.userHandle);
    return res.status(200).send(output);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.updateSettings = async (req, res) => {
  try {
    const updateForm = {
      Password: req.body.Password,
      CPassword: req.body.CPassword,
      userHandle: req.body.Handler,
      Email: req.body.Email,
      Username: req.body.Username,
    };
    await updateSettingsInDatabase(updateForm, req.userHandle);
    return res.status(200).json({ msg: 'Update settings performed successfully' });
  } catch (error) {
    return res.status(500).json({ msg: `Error while updating settings, ${error.message}` });
  }
};

module.exports.changePassword = async (req, res) => {
  try {
    await changePasswordInSettings(req.userHandle, req.body.oldPassword,
      req.body.newPassword, req.body.confirmPassword);
    return res.status(200).json({ msg: 'Password changed succesfully!' });
  } catch (error) {
    return res.status(500).json({ msg: `Unable to update password, due to ${error.message}` });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { token, handle } = await generateAccessToken(req.body);
    res.cookie('access-token', token, { httpOnly: true, sameSite: true });
    const firstLoginStatus = await checkForFirstLogin(handle);
    const verificationStatus = await getUserVerificationStatus(handle);
    return res.status(200).json({ msg: 'User logged in!!', firstLoginStatus, verificationStatus });
  } catch (error) {
    return res.status(401).json({ msg: error.message });
  }
};

module.exports.registerUser = async (req, res) => {
  try {
    const registerForm = {
      password: req.body.password,
      cpassword: req.body.cpassword,
      userhandler: req.body.userhandler,
      username: req.body.username,
      email: req.body.email,
    };
    await postUserCredentialsInDatabase(registerForm);
    return res.status(200).json({ msg: 'Successfully registered user' });
  } catch (error) {
    return res.status(500).json({ msg: `Unable to register user, due to error "${error.message}"` });
  }
};

module.exports.newPassword = async (req, res) => {
  try {
    const handle = await VerifyResetPasswordHash(req.url.split('/')[2]);
    return res.status(200).json(handle);
  } catch (error) {
    return res.status(404).json({ msg: `Verification for reset hash not approved, see error, ${error.message}` });
  }
};

module.exports.resetPassword = async (req, res) => {
  try {
    await changePasswordForUser(req.body.password, req.body.handle);
    return res.status(200).json({ msg: 'Password reset!' });
  } catch (error) {
    return res.status(500).json({ msg: `Error while running changePasswordForUser, with error ${error.message}` });
  }
};

module.exports.forgetPassword = async (req, res) => {
  try {
    await forgetPasswordUpdation(req.body.email);
    return res.status(200).json({ msg: 'Successfully sent request to change password' });
  } catch (error) {
    return res.status(500).json({ msg: `Unable to send request for forgetPassword, due to error "${error.message}"` });
  }
};

module.exports.logoutUser = async (req, res) => {
  try {
    res.clearCookie('access-token');
    return res.status(200).json({ msg: 'User succesfully logged out' });
  } catch (error) {
    return res.status(401).json({ msg: error.message });
  }
};

module.exports.postFirstLoginInformation = async (req, res) => {
  try {
    await postUserInformationForBio(req.userHandle, req.body.userInformation);
    return res.status(200).json({ msg: 'Succesfully posted first login information' });
  } catch (error) {
    return res.status(500).json({ msg: `Unable to perform insertion, due to error "${error.message}"` });
  }
};

module.exports.postExternalInformationDetails = async (req, res) => {
  try {
    await postExternDataToDB(req.body.editInfoComponentForm, req.userHandle);
    return res.status(200).json({ msg: 'Saved information for the external links in the database' });
  } catch (error) {
    return res.status(500).json({ msg: `Unable to save external link information due to error "${error.message}" ` });
  }
};

module.exports.postExternalProfileDetails = async (req, res) => {
  try {
    await postProfileDataToDB(req.body.editInfoComponentForm, req.userHandle);
    return res.status(200).json({ msg: 'Saved information for the external profile information in the database' });
  } catch (error) {
    return res.status(500).json({ msg: 'Uanble to save profile information due to error' });
  }
};

module.exports.postNotificationController = async (req, res) => {
  try {
    await postNotification(req.body.__notificationSchemaForm, req.userHandle);
    return res.status(200).json({ msg: 'Notification posted successfully!' });
  } catch (error) {
    return res.status(500).json({ msg: `Failed to post notification to database due to error "${error.message}"` });
  }
};

module.exports.verifyUser = async (req, res) => {
  try {
    const { hash } = req.body;
    const status = await verifyUser(hash);
    res.json({ msg: 'User successfully verified', status });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
