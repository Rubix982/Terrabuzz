import React from 'react';
import { Link } from 'react-router-dom'
import ComponentStyling from '../../style/Search/Post.module.css';
import { CenterAlign } from '../FlexAlignment';
import { countAndFormatTotalLikes, formatTotalComments , reducePostContent } from '../../services/post';

const Post = ({ postData, profilePicture }) => (
  <Link to={`/post/${postData._id}`}>
    <div className={ComponentStyling.entry}>
      <div className={ComponentStyling.header}>
        <h1>#{postData.interest}</h1>
      </div>
      <div className={ComponentStyling.main}>
        <CenterAlign>
          <div className={ComponentStyling.profilePicture}>
            <img src={`/assets/img/profile_pictures/${profilePicture}`} alt="" />
          </div>
        </CenterAlign>
        <div className={ComponentStyling.postBody}>
          <div className={ComponentStyling.postTitle}>
            <h1>@{postData.handle}</h1>
            <h2>{postData.datePublished}</h2>
          </div>
          <div className={ComponentStyling.postText}>
            <p>{reducePostContent(postData.content,50)}</p>
          </div>
        </div>
      </div>
      <div className={ComponentStyling.stats}>
        <CenterAlign>
          <h1>{countAndFormatTotalLikes(postData.likes)}</h1>
        </CenterAlign>
        <CenterAlign>
          <h1>{formatTotalComments(postData.comments)}</h1>
        </CenterAlign>
      </div>
    </div>
  </Link>
);

export default Post;
