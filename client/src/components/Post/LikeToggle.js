import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { postContext } from './PostContext';
import API from '../../API/API';
import { countTotalLikes } from '../../services/post';
import ComponentStyling from '../../style/Post/LikeToggle.module.css';
import { postLikeNotify } from '../../services/likeNotify.js';

const LikeToggle = () => {
  const { post, like } = useContext(postContext);
  const { id } = useParams();

  return (
    <div onClick={async () => {
      try {
        const notificationSchemaForm = {
          for: post.state.handle,
          timestamp: new Date(),
          post: id,
          by: '',
          profilePicture: '',
        }

        const status = await postLikeNotify(id, notificationSchemaForm);
        like.setter(status);
      } catch (error) {
        alert(error.message);
      }
    }} className={like.state ? `${ComponentStyling.likeToggle} ${ComponentStyling.active}` : `${ComponentStyling.notActive} ${ComponentStyling.likeToggle}`}>
      <h1>{countTotalLikes(post.state.likes)} Likes</h1>
    </div>
  );
};

export default LikeToggle;