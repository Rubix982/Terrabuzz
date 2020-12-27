import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ComponentStyling from '../../style/NewsFeed/NewPost.module.css';
import { CenterAlign } from '../FlexAlignment';
import { userContext } from '../userDataContext';

const NewPost = () => {

  const userInformationContext = useContext(userContext);

  return (
    <div className={ComponentStyling.newPost}>
      <CenterAlign>
        <div className={ComponentStyling.profilePicture}>
          <img alt="user icon" src={`${userInformationContext.imageSource.state}`} />
        </div>
      </CenterAlign>
      <CenterAlign>
        <Link to="/publish">
          <h1>What’s on your mind, {userInformationContext.userName.state}?</h1>
        </Link>
      </CenterAlign>
    </div>
  )
};

export default NewPost;
