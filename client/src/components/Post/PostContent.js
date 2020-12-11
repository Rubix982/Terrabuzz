import React, { useContext } from 'react';
import { postContext } from './PostContext';
import ComponentStyling from '../../style/Post/PostContent.module.css';
import { CenterAlign } from '../FlexAlignment';

const PostContent = () => {
  const [[ postData , setPostData ],,] = useContext(postContext);

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
            <h1>Richard Miles | @{postData.handle}</h1>
            <h1>{postData.datePublished}</h1>
          </div>
        </div>
        <div className={ComponentStyling.postText}>
          <div>
            <h1>
              {postData.title}
            </h1>
          </div>
          <div>
            <p>
              {postData.content}
            </p>
          </div>
        </div>
      </div>
      <div className={ComponentStyling.stats}>
        <CenterAlign>
          <h1>{postData.likes.length} Likes</h1>
        </CenterAlign>
        <CenterAlign>
          <h1>{postData.comments.length} Comments</h1>
        </CenterAlign>
      </div>
    </div>
  );
};

export default PostContent;
