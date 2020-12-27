import React, { useContext } from 'react';
import { postContext } from './PostContext';
import ComponentStyling from '../../style/Post/PostContent.module.css';
import { CenterAlign } from '../FlexAlignment';
import LikeToggle from './LikeToggle';
import { countTotalLikes } from '../../services/post';
import { loginUserContext } from '../LoginUserContext';

const PostContent = () => {
  const { login } = useContext(loginUserContext);
  const { post } = useContext(postContext);

  return (
    <div className={ComponentStyling.main}>
      <div className={ComponentStyling.postBody}>
        <div className={ComponentStyling.postDescription}>
          <CenterAlign>
            <div className={ComponentStyling.profilePicture}>
              <img
                src={`/assets/img/profile_pictures/${post.state.profilePicture}`}
                alt="user profile"
              />
            </div>
          </CenterAlign>
          <div className={ComponentStyling.postTitle}>
            <div className={ComponentStyling.floatLeft}>
              <h1>@{post.state.handle}</h1>
              <h1>{post.state.datePublished}</h1>
            </div>
            <div></div>
            <div className={ComponentStyling.floatRight}>
              <h1>#{post.state.interest}</h1>
            </div>
          </div>
        </div>
        <div className={ComponentStyling.postText}>
          <div>
            <h1>
              {post.state.title}
            </h1>
          </div>
          <div>
            <p>
              {post.state.content}
            </p>
          </div>
        </div>
      </div>
      <div className={ComponentStyling.stats}>
        {login.state ? (
          <LikeToggle />
        ) : (
            <CenterAlign>
              <h1>{countTotalLikes(post.state.likes)} Likes</h1>
            </CenterAlign>
          )}

        {/* <div className={ComponentStyling.commentStyling}> */}
          <CenterAlign>
            <h1>{post.state.comments.length} Comments</h1>
          </CenterAlign>
        {/* </div> */}
      </div>
    </div>
  );
};

export default PostContent;
