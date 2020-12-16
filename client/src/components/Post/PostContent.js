import React, { useContext } from 'react';
import { postContext } from './PostContext';
import ComponentStyling from '../../style/Post/PostContent.module.css';
import { CenterAlign } from '../FlexAlignment';
import LikeToggle from './LikeToggle';
import { countTotalLikes } from '../../services/post';
import { loginUserContext } from '../LoginUserContext';

const PostContent = () => {
  const [ loggedIn ] = useContext(loginUserContext);
  const { post } = useContext(postContext);

  return (
    <div className={ComponentStyling.main}>
      <div className={ComponentStyling.postBody}>
        <div className={ComponentStyling.postDescription}>
          <CenterAlign>
            <div className={ComponentStyling.profilePicture}>
              <img
                src="/assets/img/profile_pictures/boy.svg"
                alt="user profile"
              />
            </div>
          </CenterAlign>
          <div className={ComponentStyling.postTitle}>
            <h1>@{post.state.handle}</h1>
            <h1>{post.state.datePublished}</h1>
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
        { loggedIn ? (
          <LikeToggle/>
        ) : (
        <CenterAlign>
          <h1>{countTotalLikes(post.state.likes)} Likes</h1>
        </CenterAlign>
        )}

        <CenterAlign>
          <h1>{post.state.comments.length} Comments</h1>
        </CenterAlign>
      </div>
    </div>
  );
};

export default PostContent;
